import {AfterViewInit, Component, Input, Output, ViewChild, ViewContainerRef} from "@angular/core";
import {SubclassComponent} from "../subclass.component";
import {EventEmitter} from "@angular/core";
import {DumbComponent} from "../subclass-decorator.component";
import {TemplatePortal} from "@angular/cdk/portal";


@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.css']
})

export class FormsBuilderDropAreaComponent implements AfterViewInit{
  @Input("dropAreaPortal") dropAreaPortal:any
  @Input("dropElements") dropElements:any
  @Input("accordionData") accordionData:any
  @Output("fieldSelected") fieldSelected = new EventEmitter<number>()
  @Output("itemDropped") itemDropped = new EventEmitter()

  @ViewChild("dropList") dropList:any
  @ViewChild("dropAreaPortalContent") dropAreaPortalContent:any


  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {
    this.dropAreaPortal = new TemplatePortal(this.dropAreaPortalContent,this._viewContainerRef)
  }

  selectField(index:number){
    this.fieldSelected.emit(index)
  }

  dropItem(evt:any){
    this.itemDropped.emit(evt)
  }
}
