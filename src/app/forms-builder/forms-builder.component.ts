import {
  AfterViewInit,
  AfterViewChecked,
  Component,
  Input,
  Output,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {Portal,TemplatePortal} from "@angular/cdk/portal";
import {CdkDropList, copyArrayItem} from "@angular/cdk/drag-drop";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


export interface FormDataInterface {
  padding:number,
  backgroundColor:string,
  textColor:string
}

export interface FieldDataInterface {
  placeholder:string,
  width:number,
  height:number,
  required:boolean,
  borderStyle:string,
  inputFortSize:number,
  selectFontWeight:number,
  inputTextColor:string
}

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements AfterViewInit{

  @Input("cdkDropListData")cdkDropListData:any
  @Input('cdkDropListConnectedTo') connectedTo: any
  @Input('cdkDropListData') data: any
  @Output('cdkDropListDropped') dropped: any

  @ViewChild("sectionOnePortalContent") sectionOnePortalContent:any
  @ViewChild("sectionTwoPortalContent") sectionTwoPortalContent:any
  @ViewChild("sectionThreePortalContent") sectionThreePortalContent:any

  @ViewChild("dragInput") dragInput:any
  @ViewChild("dragTextarea") dragTextarea:any
  @ViewChild("dragButton") dragButton:any
  @ViewChild("dragCheck") dragCheck:any
  @ViewChild("dragSelect") dragSelect:any

  items = ['Form General Styling', 'Field Styling'];
  expandedIndex = 0;
  isFormStyling:boolean = true
  formData:FormDataInterface = {
    padding:20,
    backgroundColor:"#fff",
    textColor:"#000"
  }
  inputElement:FieldDataInterface = {
    placeholder:"Type some text",
    width:100,
    height:50,
    required:false,
    borderStyle:"solid",
    inputFortSize:20,
    selectFontWeight:400,
    inputTextColor:"#000"
  }

  dropElements = []

  dragElements = [
    "input",
    "textarea",
    "button",
    "checkbox",
    "select"
  ]
  sectionOnePortal:any
  sectionTwoPortal:any
  sectionThreePortal:any

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.sectionOnePortal = new TemplatePortal(this.sectionOnePortalContent,this._viewContainerRef)
    this.sectionThreePortal = new TemplatePortal(this.sectionThreePortalContent,this._viewContainerRef)
  }

  drop(event:any){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(this.dropElements)
    }
  }

  customiseInput(){
      this.isFormStyling = false
  }

  // crateHTMLNode = (element:any) =>{
  //   const div = document.getElementById("drop-list")
  //   if(div){
  //     div.prepend(element)
  //   }
  // }
}
