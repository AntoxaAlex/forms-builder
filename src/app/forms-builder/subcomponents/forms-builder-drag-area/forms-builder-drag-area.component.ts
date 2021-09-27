import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from "@angular/core";
import {TemplatePortal} from "@angular/cdk/portal";
import {Store} from "@ngrx/store";
import {FormsBuilderContentState} from "../../state/reducers";
import {DragAreaStartDraggingAction} from "../../state/actions/dragAreaActions";
import {FormsBuilderService} from "../../forms-builder.service";

@Component({
  selector: 'app-forms-builder-drag-area',
  templateUrl: './forms-builder-drag-area.component.html',
  styleUrls: ['./forms-builder-drag-area.component.scss']
})

export class FormsBuilderDragAreaComponent implements AfterViewInit{
  dragAreaPortal:any
  @Input("draggingData") draggingData: any
  @Input("dropElements") dropElements: any

  @ViewChild("dragAreaPortalContent") dragAreaPortalContent: any


  constructor(private _viewContainerRef: ViewContainerRef,private store$:Store<FormsBuilderContentState>,private fb:FormsBuilderService) {}

  ngAfterViewInit() {
    this.dragAreaPortal = new TemplatePortal(this.dragAreaPortalContent,this._viewContainerRef)
  }

  dropItem(evt:any,isDragItemEnter:boolean,length:number){
    const index = length.toString()
    this.fb.drop(evt,isDragItemEnter,index)
  }

  startDragging(){
    this.store$.dispatch(new DragAreaStartDraggingAction(true))
  }


}
