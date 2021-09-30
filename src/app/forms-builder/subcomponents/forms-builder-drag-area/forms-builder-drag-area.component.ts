import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Store } from '@ngrx/store';

import { FormsBuilderContentState } from '../../state/reducers';
import { DragAreaStartDraggingAction } from '../../state/actions/dragAreaActions';
import { FormsBuilderService } from '../../forms-builder.service';
import { DragAreaState } from '../../state/reducers/dragAreaReducer';
import { DropAreaState } from '../../state/reducers/dropAreaReducer';


@Component({
  selector: 'app-forms-builder-drag-area',
  templateUrl: './forms-builder-drag-area.component.html',
  styleUrls: ['./forms-builder-drag-area.component.scss']
})

export class FormsBuilderDragAreaComponent implements AfterViewInit{

  public dragAreaPortal:TemplatePortal
  @Input('draggingData') public draggingData: DragAreaState
  @Input('dropElements') public dropElements: DropAreaState

  @ViewChild('dragAreaPortalContent') public dragAreaPortalContent: any

  constructor(private _viewContainerRef: ViewContainerRef, private store$: Store<FormsBuilderContentState>, private fb: FormsBuilderService) {}

  ngAfterViewInit() {
    this.dragAreaPortal = new TemplatePortal(this.dragAreaPortalContent,this._viewContainerRef)
  }

  public dropItem(evt:any,isDragItemEnter:boolean,length:number):void{
    const index = length.toString()
    this.fb.drop(evt,isDragItemEnter,index)
  }

  public startDragging():void{
    this.store$.dispatch(new DragAreaStartDraggingAction(true))
  }

}
