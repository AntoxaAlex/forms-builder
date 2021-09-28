import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit, AfterViewChecked, ChangeDetectorRef
} from '@angular/core';

import {FormsBuilderAccordionComponent} from "./subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {Store} from "@ngrx/store";
import {select} from "@ngrx/store";
import {selectAccordion,selectDragArea,selectDropArea} from "./state/selectors";
import {FormsBuilderContentState} from "./state/reducers";

import {AccordionChangeStylingAction} from "./state/actions/accordionActions";

import {FormsBuilderService} from "./forms-builder.service";
import {fromEvent, fromEventPattern, Observable} from "rxjs";
import {filter, map, takeUntil, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {NavbarComponent} from "./navbar/navbar.component";
import set = Reflect.set;


@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./forms-builder.component.scss']
})
export class FormsBuilderComponent implements OnInit,AfterViewInit,AfterViewChecked{

  @ViewChild(FormsBuilderAccordionComponent) accordionComponent:any
  @ViewChild(NavbarComponent) navbarComponent:any

  //State
  accordionState$:any
  dragAreaState$:any
  dropAreaState$:any

  logoutEvent$:any
  logout$:any


  constructor(private store$:Store<FormsBuilderContentState>,private router:Router,private cdr: ChangeDetectorRef,private formsBuilderService:FormsBuilderService) {
  }

  ngOnInit() {
    //Detect changes explicitly when app start
    setTimeout(()=>{
      this.cdr.detectChanges()
    },300)
    //Fetch state data
    this.accordionState$ = this.store$.pipe(select(selectAccordion))
    this.dragAreaState$ = this.store$.pipe(select(selectDragArea))
    this.dropAreaState$ = this.store$.pipe(select(selectDropArea))
  }

  ngAfterViewInit() {
    this.logoutEvent$ = fromEvent(this.navbarComponent.logoutBtn._elementRef.nativeElement,"click")
    this.logout$ = this.logoutEvent$.subscribe(()=>{
      localStorage.clear()
      this.router.navigate(["/login"])
    })
    fromEvent(document,"click").pipe(
      takeUntil(this.logoutEvent$),
      map((event:any)=>{
          const {target} = event
          if(
            target.id === "field-input"
            || target.id === "field-textarea"
            || target.id === "field-button"
            || target.parentNode.parentNode.parentNode.id === "field-select"
            || target.parentNode.id === "field-option"
            || target.parentNode.parentNode.id === "field-checkbox"
            || target.parentNode.parentNode.id == "required"
            || (target.parentNode.parentNode.parentNode.parentNode.parentNode.id === "form-accordion")
          ) {
            return false
          }
          else if(
            target.id === "backgroundText" || target.id === "drop-list"
          )return true
          return null
        }
      ),
      tap((result)=>console.log(`You choose ${result ? "form" : "field"}`))
    ).subscribe((value)=>{
      if(value !== null){
        this.store$.dispatch(new AccordionChangeStylingAction(value))
      }
    })
  }

  ngAfterViewChecked() {
  }

}
