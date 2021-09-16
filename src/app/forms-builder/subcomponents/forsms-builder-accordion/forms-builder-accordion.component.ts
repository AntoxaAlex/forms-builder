import {Component, Input, Output, ViewChild} from "@angular/core";
import {SubclassComponent} from "../subclass.component";

@Component({
  selector: 'app-forms-builder-accordion',
  templateUrl: './forms-builder-accordion.component.html',
  styleUrls: ['./forms-builder-accordion.component.css']
})

export class FormsBuilderAccordionComponent extends SubclassComponent{
  @Input("isFormStyleActive") isFormStyleActive:any
  @Input("accordionData") accordionData:any
  @Input("accordionPortal") accordionPortal:any
  @Input("cdkPortalOutlet") cdkPortalOutlet:any
  @Input("ngModel") ngModel:any

  @ViewChild("accordionItem") accordionItem:any
  @ViewChild("expandBtn") expandBtn:any


  constructor() {
    super();
  }
}
