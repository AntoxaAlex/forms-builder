import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { FormsBuilderAccordionComponent } from './forsms-builder-accordion/forms-builder-accordion.component';
import { selectAccordion, selectDragArea, selectDropArea } from '../../core/state/selectors';
import { FormsBuilderContentState } from '../../core/state/reducers';
import { AccordionChangeStylingAction } from '../../core/state/actions/accordionActions';
import { FormsBuilderService } from '../services/forms-builder.service';
import { NavbarComponent } from '../../core/navbar/navbar.component';


@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./forms-builder.component.scss']
})

export class FormsBuilderComponent implements OnInit,AfterViewInit{

  @ViewChild(FormsBuilderAccordionComponent) accordionComponent:FormsBuilderAccordionComponent
  @ViewChild(NavbarComponent) navbarComponent:NavbarComponent

  //State
  public accordionState$:Observable<any>
  public dragAreaState$:Observable<any>
  public dropAreaState$:Observable<any>

  public logoutEvent$:Observable<any>


  constructor(private store$:Store<FormsBuilderContentState>, private router: Router, private cdr: ChangeDetectorRef, private formsBuilderService: FormsBuilderService) {}

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
    this.logoutEvent$ = fromEvent(this.navbarComponent.logoutBtn._elementRef.nativeElement,'click')
    this.logoutEvent$.subscribe(()=>{
      localStorage.clear()
      this.router.navigate(['/login'])
    })
    fromEvent(document,'click').pipe(
      takeUntil(this.logoutEvent$),
      map((event:any)=>{
          const { target } = event
          if(
            target.id === 'field-input'
            || target.id === 'field-textarea'
            || target.id === 'field-button'
            || target.parentNode.parentNode.parentNode.id === 'field-select'
            || target.parentNode.id === 'field-option'
            || target.parentNode.parentNode.id === 'field-checkbox'
            || target.parentNode.parentNode.id == 'required'
            || (target.parentNode.parentNode.parentNode.parentNode.parentNode.id === 'form-accordion')
          ) {
            return false
          }
          else if(
            target.id === 'backgroundText' || target.id === 'drop-list'
          )return true
          return null
        }
      ),
      tap((result)=>console.log(`You choose ${result ? 'form' : 'field'}`))
    ).subscribe((value)=>{
      if(value !== null){
        this.store$.dispatch(new AccordionChangeStylingAction(value))
      }
    })
  }

}
