import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit,AfterViewChecked
} from '@angular/core';

import {FormsBuilderAccordionComponent} from "./subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {Store} from "@ngrx/store";
import {select} from "@ngrx/store";
import {selectAccordion,selectDragArea,selectDropArea} from "./state/selectors";
import {FormsBuilderContentState} from "./state/reducers";

import {AccordionChangeStylingAction,AccordionChangeFormAction} from "./state/actions/accordionActions";
import {DropAreaAddItemAction, DropAreaEditItemAction, DropAreaItem} from "./state/actions/dropAreaActions";

import {FormsBuilderService} from "./forms-builder.service";
import {fromEvent} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements OnInit,AfterViewInit,AfterViewChecked{

  @ViewChild(FormsBuilderAccordionComponent) accordionComponent:any

  //State
  accordionState$:any
  dragAreaState$:any
  dropAreaState$:any


  selectedIndex:number = 0

  //Variables for checking if element is dragged and if it crossing a Drop Area
  isDragging:boolean = false
  isDragItemEnter:boolean = false


  constructor(private store$:Store<FormsBuilderContentState>,private formsBuilderService:FormsBuilderService) { }

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
        )return false
        else if(
          target.id === "backgroundText" || target.id === "drop-list"
        )return true
        return null
      }
      )
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

  toggleExpander(){
    this.accordionComponent.accordionItem.toggle()
  }

  //Drop event handler
  drop(event:any){
    //If dragged element crossed Drop Area
    if(this.isDragItemEnter){
      const payload = this.formsBuilderService.createDropElement(event)
      this.store$.dispatch(new DropAreaAddItemAction(payload))
      this.isDragging = false
      this.isDragItemEnter = false
    }
  }

  selectField(index:number){
      this.selectedIndex = index
      this.store$.dispatch(new AccordionChangeStylingAction(false))
  }

  onChangeDropArea = (data:any) =>{
    if(data){
      const {evt,index} = data
      const name = evt.target ? evt.target.id : evt.source._elementRef.nativeElement.id
      const value = name ==="required" ? evt.checked : (name === "borderStyle"|| name==="placeholder" || name==="backgroundText"||name==="color"||name==="backgroundColor"||name==="borderColor" ? evt.target.value : evt.value)
      this.store$.dispatch(new AccordionChangeFormAction({index,name,value}))
    }
  }

  onChangeField = (data:any) => {
    if(data.contentData){
      const {items,contentData} = data
      const {index,evt} = contentData
      const name = evt.target ? evt.target.id : evt.source._elementRef.nativeElement.id
      const value = name ==="field-checkbox" ? evt.checked : (name === "field-input" ? evt.target.value : evt.value)
      const newItems = [...items]
      newItems[this.selectedIndex] = {...newItems[this.selectedIndex]}
      newItems[this.selectedIndex].styles = [...newItems[this.selectedIndex].styles]
      newItems[this.selectedIndex].styles[index] = {...newItems[this.selectedIndex].styles[index],value:value}
      this.store$.dispatch(new DropAreaEditItemAction(newItems))
    }
  }

}
