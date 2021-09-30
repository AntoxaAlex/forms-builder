import { AfterViewInit, Component, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Store } from '@ngrx/store';
import { DropListRef } from '@angular/cdk/drag-drop';

import { FormsBuilderContentState } from '../../../core/state/reducers';
import { FormsBuilderService } from '../../services/forms-builder.service';
import { DragAreaEnterToDropAreaAction } from '../../../core/state/actions/dragAreaActions';
import { DropAreaState } from '../../../core/state/reducers/dropAreaReducer';
import { DragAreaState } from '../../../core/state/reducers/dragAreaReducer';
import { AccordionState } from '../../../core/state/reducers/accordionReducer';


@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.scss']
})

export class FormsBuilderDropAreaComponent implements AfterViewInit{

  @Input('dropElements') public dropElements:DropAreaState
  @Input('draggingData') public draggingData:DragAreaState
  @Input('accordionData') public accordionData:AccordionState
  @Output('fieldSelected') public fieldSelected = new EventEmitter<number>()
  @Output('itemDropped') public itemDropped = new EventEmitter()

  @ViewChild('dropList') public dropList:DropListRef
  @ViewChild('dropAreaPortalContent') public dropAreaPortalContent:any

  public dropAreaPortal:TemplatePortal

  constructor(private _viewContainerRef: ViewContainerRef, private store$: Store<FormsBuilderContentState>, private fb: FormsBuilderService) {}

  ngAfterViewInit() {
    this.dropAreaPortal = new TemplatePortal(this.dropAreaPortalContent,this._viewContainerRef)
  }

  public dropItem(evt:any,isDragItemEnter:boolean,length:number):void {
    let index = length.toString()
    console.log(index)
    this.fb.drop(evt,isDragItemEnter,index)
  }

  public enterToDropArea(isDragging:boolean):void {
    this.store$.dispatch(new DragAreaEnterToDropAreaAction(isDragging))
  }

  public leaveDropArea():void {
    this.store$.dispatch(new DragAreaEnterToDropAreaAction(false))
  }

}
