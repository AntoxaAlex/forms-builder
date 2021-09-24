import {AfterViewInit, Component, EventEmitter,Output, ViewChild, ViewContainerRef} from "@angular/core";
import {TemplatePortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-forms-builder-drag-area',
  templateUrl: './forms-builder-drag-area.component.html',
  styleUrls: ['./forms-builder-drag-area.component.css']
})

export class FormsBuilderDragAreaComponent implements AfterViewInit{
  @Output("itemDropped") itemDropped = new EventEmitter()
  @Output("dragStarted") dragStarted = new EventEmitter()

  @ViewChild("dragAreaPortalContent") dragAreaPortalContent: any

  dragAreaPortal:any

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.dragAreaPortal = new TemplatePortal(this.dragAreaPortalContent,this._viewContainerRef)
  }

  dropItem(evt:any){
    this.itemDropped.emit(evt)
  }

  startDragging(){
    this.dragStarted.emit()
  }


}
