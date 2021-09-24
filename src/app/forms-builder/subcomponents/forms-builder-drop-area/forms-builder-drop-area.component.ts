import {AfterViewInit, Component, Input, Output, ViewChild, ViewContainerRef} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {TemplatePortal} from "@angular/cdk/portal";


@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.css']
})

export class FormsBuilderDropAreaComponent implements AfterViewInit{
  @Input("dropElements") dropElements:any
  @Input("accordionData") accordionData:any
  @Output("fieldSelected") fieldSelected = new EventEmitter<number>()
  @Output("itemDropped") itemDropped = new EventEmitter()

  @ViewChild("dropList") dropList:any
  @ViewChild("dropAreaPortalContent") dropAreaPortalContent:any

  dropAreaPortal:any

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
