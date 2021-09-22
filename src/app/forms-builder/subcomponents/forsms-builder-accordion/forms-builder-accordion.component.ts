import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {SubclassComponent} from "../subclass.component";
import {TemplatePortal} from "@angular/cdk/portal";
import {FieldConfig} from "../../../interfaces/field.interface";


@Component({
  selector: 'app-forms-builder-accordion',
  templateUrl: './forms-builder-accordion.component.html',
  styleUrls: ['./forms-builder-accordion.component.css']
})

export class FormsBuilderAccordionComponent implements OnInit,AfterViewInit{


  @Input("accordionData") accordionData:any
  @Input("accordionPortal") accordionPortal:any
  @Input("cdkPortalOutlet") cdkPortalOutlet:any
  @Input("getInputType") getInputType:any
  @Input("dropElements") dropElements:any
  @Input("selectedIndex") selectedIndex:any

  @Output("accordionExpanded") accordionExpanded = new EventEmitter<boolean>()
  @Output("formChanged") formChanged = new EventEmitter()
  @Output("fieldChanged") fieldChanged = new EventEmitter()

  @ViewChild("accordionItem") accordionItem:any
  @ViewChild("expandBtn") expandBtn:any
  @ViewChild("accordionPortalContent") accordionPortalContent:any

  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    console.log(this.accordionData.formStyling)
  }

  ngAfterViewInit() {
    this.accordionPortal = new TemplatePortal(this.accordionPortalContent,this._viewContainerRef)
  }

  toggleExpander(){
    this.accordionExpanded.emit()
  }

  changeForm(evt:any){
    this.formChanged.emit(evt)
  }
  changeField(evt:any,items:any){
    this.fieldChanged.emit({contentData:evt, items})
  }


}
