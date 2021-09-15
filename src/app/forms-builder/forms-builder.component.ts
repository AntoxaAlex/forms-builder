import {
  AfterViewInit,
  Component,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {TemplatePortal} from "@angular/cdk/portal";


// export interface FormDataInterface {
//   padding:number,
//   backgroundColor:string,
//   textColor:string
// }
//
// export interface FieldDataInterface {
//   placeholder:string,
//   width:number,
//   height:number,
//   required:boolean,
//   borderStyle:string,
//   inputFortSize:number,
//   selectFontWeight:number,
//   inputTextColor:string
// }

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements AfterViewInit{
  @Input("cdkPortalOutlet")cdkPortalOutlet:any
  @Input("cdkDropListData")cdkDropListData:any
  @Input('cdkDropListConnectedTo') connectedTo: any
  @Input('cdkDropListData') data: any
  @Output('cdkDragDropped') cdkDragDropped: any
  @Output('cdkDragStarted') cdkDragStarted:any

  @ViewChild("accordionPortalContent") accordionPortalContent:any
  @ViewChild("dropAreaPortalContent")dropAreaPortalContent:any
  @ViewChild("dragAreaPortalContent") dragAreaPortalContent:any

  @ViewChild("dragInput") dragInput:any
  @ViewChild("dragTextarea") dragTextarea:any
  @ViewChild("dragButton") dragButton:any
  @ViewChild("dragCheck") dragCheck:any
  @ViewChild("dragSelect") dragSelect:any

  //Accordion Data
  accordionData = {
    isFormStyleActive:true,
    formStyle:{
      padding:20,
      backgroundColor:"#fff"
    },
    fieldStyle:{
      placeholder:"Type some text",
      width:100,
      height:50,
      required:false,
      borderStyle:"solid",
      inputFortSize:20,
      selectFontWeight:400,
      inputTextColor:"#000"
    }
  }
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

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.accordionPortal = new TemplatePortal(this.accordionPortalContent,this._viewContainerRef)
    this.dropAreaPortal = new TemplatePortal(this.dropAreaPortalContent,this._viewContainerRef)
    this.dragAreaPortal = new TemplatePortal(this.dragAreaPortalContent,this._viewContainerRef)
  }

  //Get dropped item position in Drop Area
  getPosition = (el:string,point:number):any => {
    const dropItem = document.getElementById("drop-list")
    if(dropItem){
      if(el==="x"){
        console.log(point)
        console.log(dropItem.getBoundingClientRect().x)
        console.log(point - dropItem.getBoundingClientRect().x)
        return point - dropItem.getBoundingClientRect().x
      }else if(el==="y"){
        console.log(point)
        console.log(dropItem.getBoundingClientRect().y)
        console.log(point - dropItem.getBoundingClientRect().y)
      return point - dropItem.getBoundingClientRect().y
    }
    }
  }


  //Drop event handler
  drop(event:any){
    if(this.isDragItemEnter){
      console.log("success")
      const dropPoint = event.dropPoint
      const elementId = event.item.element.nativeElement.id
      const x = this.getPosition("x",dropPoint.x)
      const y = this.getPosition("y",dropPoint.y)
      this.dropElements.push({elementId,x,y})
      this.isDragging = false
      this.isDragItemEnter = false
      console.log("isDragging:"+this.isDragging)
      console.log("isDragItemEnter:"+this.isDragItemEnter)
    }
  }

  customiseInput(event:any){
      this.accordionData.isFormStyleActive = false
  }

}
