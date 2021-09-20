import {
  AfterViewInit,
  Component,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  OnInit, EventEmitter, ViewChildren, AfterViewChecked, ChangeDetectorRef
} from '@angular/core';
import {TemplatePortal} from "@angular/cdk/portal";

import {from, fromEvent,merge} from "rxjs";
import {map, } from "rxjs/operators";

import {FormsBuilderAccordionComponent} from "./subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {StyleItemComponent} from "./style-item/style-item.component";
import {Store} from "@ngrx/store";
import {select} from "@ngrx/store";
import {selectAccordion,selectDragArea,selectDropArea} from "../selectors";
import {FormsBuilderContentState} from "../reducers";

import {AccordionChangeStylingAction} from "../actions/accordionActions";
import {AccordionChangeFormAction} from "../actions/accordionActions";

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements OnInit,AfterViewInit,AfterViewChecked{
  @Input("cdkPortalOutlet")cdkPortalOutlet:any
  @Input("cdkDropListData")cdkDropListData:any
  @Input('cdkDropListConnectedTo') connectedTo: any
  @Input('cdkDropListData') data: any
  @Output('cdkDragDropped') cdkDragDropped: any
  @Output('cdkDragStarted') cdkDragStarted:any

  @Input("ngModel") ngModel:any

  @ViewChild("accordionPortalContent") accordionPortalContent:any
  @ViewChild("dropAreaPortalContent")dropAreaPortalContent:any
  @ViewChild("dragAreaPortalContent") dragAreaPortalContent:any

  @ViewChild("dragInput") dragInput:any
  @ViewChild("dragTextarea") dragTextarea:any
  @ViewChild("dragButton") dragButton:any
  @ViewChild("dragCheck") dragCheck:any
  @ViewChild("dragSelect") dragSelect:any
  @ViewChild("mainInput") mainInput:any


  @ViewChild(FormsBuilderAccordionComponent) accordionComponent:any
  @ViewChildren("formStyleItems") formStyleItems:any
  @ViewChildren("fieldStyleItems") fieldStyleItems:any



  styleItems:any

  //Observables
  expandAccordionObservable:any
  changeFormEvents:any[] = []
  changeFormObserver$:any

  //State
  accordionState:any
  dragAreaState:any
  dropAreaState:any

  //Accordion Data
  accordionData = {
    isFormStyleActive:true,
    formStyle:{
      padding:20,
      backgroundColor:"#fff",
      fontSize:14
    },
    fieldStyle:{
      placeholder:"Type some text",
      width:100,
      height:50,
      required:false,
      borderStyle:"solid",
      fontSize:20,
      fontWeight:400,
      color:"#000"
    }
  }

  selectedIndex:number = 0
  expandedIndex = 0;

  //Variables for checking if element is dragged and if it crossing a Drop Area
  isDragging:boolean = false
  isDragItemEnter:boolean = false

  //Dropped elements array for Drop Area
  dropElements:any = []

  //Portals
  accordionPortal:any
  dropAreaPortal:any
  dragAreaPortal:any

  constructor(private _viewContainerRef: ViewContainerRef,private store$:Store<FormsBuilderContentState>,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.store$.pipe(select(selectAccordion)).subscribe((data:any)=>{
      this.accordionState = data
    })
    this.store$.pipe(select(selectDragArea)).subscribe((data:any)=>{
      this.dragAreaState = data
    })
    this.store$.pipe(select(selectDropArea)).subscribe((data:any)=>{
      this.dropAreaState = data
    })
  }

  ngAfterViewInit() {
    this.accordionPortal = new TemplatePortal(this.accordionPortalContent,this._viewContainerRef)
    this.dropAreaPortal = new TemplatePortal(this.dropAreaPortalContent,this._viewContainerRef)
    this.dragAreaPortal = new TemplatePortal(this.dragAreaPortalContent,this._viewContainerRef)

    this.expandAccordionObservable = fromEvent(this.accordionComponent.expandBtn.nativeElement,"click").subscribe((evt:any)=>{
      this.accordionComponent.accordionItem.toggle()
    })

    console.log(this.formStyleItems)
    setTimeout(()=>{
      this.formStyleItems._results.forEach((item:any)=>{
       this.changeFormEvents.push(fromEvent(item.formInputRef.nativeElement,"change"))
      })

      this.changeFormObserver$ = merge(...this.changeFormEvents).subscribe((evt:any)=>{
        console.log("change")
        this.onChangeDropArea(evt.target.name,evt.target.value)
      })

    },1000)

  }

  ngAfterViewChecked() {
  }

  //Get dropped item position in Drop Area
  getPosition = (el:string,point:number):any => {
    const dropItem = document.getElementById("drop-list")
    if(dropItem){
      if(el==="x"){
        return point - dropItem.getBoundingClientRect().x
      }else if(el==="y"){
      return point - dropItem.getBoundingClientRect().y
    }
    }
  }


  //Drop event handler
  drop(event:any){
    //If dragged element crossed Drop Area
    if(this.isDragItemEnter){
      //Retrieve information about drop position and element id from event
      const dropPoint = event.dropPoint
      const elementId = event.item.element.nativeElement.id
      //Get element position relative to Drop Area
      const x = this.getPosition("x",dropPoint.x)
      const y = this.getPosition("y",dropPoint.y)
      //Add element into Drop Area

      this.dropElements.push({
        elementId,
        x,
        y,
        styles:{
          placeholder:"Type some text",
          width:100,
          height:50,
          required:false,
          borderStyle:"solid",
          fontSize:20,
          fontWeight:400,
          color:"#000"
        }})
      this.isDragging = false
      this.isDragItemEnter = false
    }
  }

  customiseInput(index:number){
      this.selectedIndex = index
      this.store$.dispatch(new AccordionChangeStylingAction())
  }

  onChangeDropArea = (name:string,value:any) =>{
    if(name && value){
      if(this.accordionState.isFormStylingActive){
        this.store$.dispatch(new AccordionChangeFormAction({name,value}))
      }
    }
  }


  getInputType(key:any):string{
    switch (key) {
      case "width":
        return "number"
      case "height":
        return "number"
      case "fontSize":
        return "number"
      case "padding":
        return "number"
      case "borderWidth":
        return "number"
      case "borderRadius":
        return "number"
      case "fontWeight":
        return "number"
      case "backgroundColor":
        return "color"
      case "borderColor":
        return "color"
      case "color":
        return "color"
      case "required":
        return "checkbox"
      default:
       return "text"
    }
  }

}
