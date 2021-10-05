import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { select, Store } from '@ngrx/store';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

import { FormsBuilderContentState } from '../../../core/state/reducers';
import { DragAreaStartDraggingAction } from '../../../core/state/actions/dragAreaActions';
import { FormsBuilderService } from '../../services/forms-builder.service';
import { DragAreaState } from '../../../core/state/reducers/dragAreaReducer';
import { DropAreaState } from '../../../core/state/reducers/dropAreaReducer';
import { selectDragArea, selectDropArea } from '../../../core/state/selectors';


@Component({
  selector: 'app-forms-builder-drag-area',
  templateUrl: './forms-builder-drag-area.component.html',
  styleUrls: ['./forms-builder-drag-area.component.scss'],
})
export class FormsBuilderDragAreaComponent implements OnInit, AfterViewInit {
  public dragAreaPortal: TemplatePortal;
  public dropAreaState: DropAreaState;
  public dragAreaState: DragAreaState;

  @ViewChild('dragAreaPortalContent') public dragAreaPortalContent: TemplateRef<any>;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store$: Store<FormsBuilderContentState>,
    private fb: FormsBuilderService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.store$.pipe(select(selectDropArea)).subscribe((state: DropAreaState) => {
      this.dropAreaState = state;
    });
    this.store$.pipe(select(selectDragArea)).subscribe((state: DragAreaState) => {
      this.dragAreaState = state;
    });
  }

  ngAfterViewInit() {
    this.dragAreaPortal = new TemplatePortal(this.dragAreaPortalContent, this._viewContainerRef);
    this.cdr.detectChanges();
  }

  public dropItem(evt: CdkDragDrop<any>, isDragItemEnter: boolean, length: number): void {
    const index = length.toString();
    this.fb.drop(evt, isDragItemEnter, index);
  }

  public startDragging(): void {
    this.store$.dispatch(new DragAreaStartDraggingAction(true));
  }
}
