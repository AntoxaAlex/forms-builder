import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {Portal,TemplatePortal} from "@angular/cdk/portal";

export interface FormDataInterface {
  padding:number,
  backgroundColor:string,
  textColor:string
}

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements AfterViewInit{

  @ViewChild("sectionOnePortalContent") sectionOnePortalContent:any

  items = ['Form General Styling', 'Field Styling'];
  expandedIndex = 0;
  isFormStyling:boolean = true
  formData:FormDataInterface = {
    padding:0,
    backgroundColor:"#fff",
    textColor:"#000"
  }
  sectionOnePortal:any


  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.sectionOnePortal = new TemplatePortal(this.sectionOnePortalContent,this._viewContainerRef)
  }


  changeFormPadding(evt:any){
    console.log(evt)
    // document.getElementById("drop-aria").style.padding =
  }
}
