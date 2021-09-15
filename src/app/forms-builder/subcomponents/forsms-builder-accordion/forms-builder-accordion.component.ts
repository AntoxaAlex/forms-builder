import {Component,Input} from "@angular/core";

@Component({
  selector: 'app-forms-builder-accordion',
  templateUrl: './forms-builder-accordion.component.html',
  styleUrls: ['./forms-builder-accordion.component.css']
})

export class FormsBuilderAccordionComponent {
  @Input("isFormStyleActive") isFormStyleActive:any
  @Input("accordionData") accordionData:any
  @Input("accordionPortal") accordionPortal:any

}
