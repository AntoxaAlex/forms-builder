import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit, AfterViewChecked
} from '@angular/core';

import {FormsBuilderAccordionComponent} from "./subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {Store} from "@ngrx/store";
import {select} from "@ngrx/store";
import {selectAccordion,selectDragArea,selectDropArea} from "./state/selectors";
import {FormsBuilderContentState} from "./state/reducers";

import {AccordionChangeStylingAction} from "./state/actions/accordionActions";

import {FormsBuilderService} from "./forms-builder.service";
import {fromEvent, fromEventPattern, Observable} from "rxjs";
import {filter, map, tap} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./forms-builder.component.scss']
})
export class FormsBuilderComponent implements OnInit,AfterViewInit,AfterViewChecked{

  @ViewChild(FormsBuilderAccordionComponent) accordionComponent:any

  //State
  accordionState$:any
  dragAreaState$:any
  dropAreaState$:any


  constructor(private store$:Store<FormsBuilderContentState>,private formsBuilderService:FormsBuilderService,private router:Router) { }

  ngOnInit() {
    this.accordionState$ = this.store$.pipe(select(selectAccordion))
    this.dragAreaState$ = this.store$.pipe(select(selectDragArea))
    this.dropAreaState$ = this.store$.pipe(select(selectDropArea))
    fromEvent(document,"click").pipe(
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
          console.log(event)
          // this.store$.dispatch(new DropAreaChangeIndexAction())
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

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
  }


  logout(){
    localStorage.clear()
    this.router.navigate(["/authorization"])
  }

}
