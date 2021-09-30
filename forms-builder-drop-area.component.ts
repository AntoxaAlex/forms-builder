import {AfterViewInit, Component, Input, Output, ViewChild, ViewContainerRef} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {TemplatePortal} from "@angular/cdk/portal";
import {Store} from "@ngrx/store";
import {FormsBuilderContentState} from "../../state/reducers";
import {FormsBuilderService} from "../../forms-builder.service";
import {DragAreaEnterToDropAreaAction} from "../../state/actions/dragAreaActions";


@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.scss']
})

export class FormsBuilderDropAreaComponent implements AfterViewInit{

  @Input("dropElements") dropElements:any
  @Input("draggingData") draggingData:any
  @Input("accordionData") accordionData:any
  @Output("fieldSelected") fieldSelected = new EventEmitter<number>()
  @Output("itemDropped") itemDropped = new EventEmitter()

  @ViewChild("dropList") dropList:any
  @ViewChild("dropAreaPortalContent") dropAreaPortalContent:any

  dropAreaPortal:any

  constructor(private _viewContainerRef: ViewContainerRef,private store$:Store<FormsBuilderContentState>,private fb:FormsBuilderService) {
  }

  ngAfterViewInit() {
    this.dropAreaPortal = new TemplatePortal(this.dropAreaPortalContent,this._viewContainerRef)
  }


  dropItem(evt:any,isDragItemEnter:boolean,length:number){
    let index = length.toString()
    console.log(index)
    this.fb.drop(evt,isDragItemEnter,index)
  }

  enterToDropArea(isDragging:boolean){
    this.store$.dispatch(new DragAreaEnterToDropAreaAction(isDragging))
  }
  leaveDropArea(){
    this.store$.dispatch(new DragAreaEnterToDropAreaAction(false))
  }
}
