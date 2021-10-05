import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { select, Store } from '@ngrx/store';
import { fromEvent, merge, Observable, ReplaySubject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

import { FormsBuilderContentState } from '../../../core/state/reducers';
import { FormsBuilderService } from '../../services/forms-builder.service';
import { DragAreaEnterToDropAreaAction } from '../../../core/state/actions/dragAreaActions';
import { DropAreaState } from '../../../core/state/reducers/dropAreaReducer';
import { DragAreaState } from '../../../core/state/reducers/dragAreaReducer';
import { AccordionState } from '../../../core/state/reducers/accordionReducer';
import { AccordionChangeStylingAction } from '../../../core/state/actions/accordionActions';
import { selectAccordion, selectDragArea, selectDropArea } from '../../../core/state/selectors';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.scss'],
})
export class FormsBuilderDropAreaComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('dropList') public dropList: ElementRef;
  @ViewChild('backgroundText') public backgroundText: TemplateRef<any>;
  @ViewChild('dropAreaPortalContent') public dropAreaPortalContent: TemplateRef<any>;

  public accordionState: AccordionState;
  public dropAreaState: DropAreaState;
  public dragAreaState: DragAreaState;
  public dropAreaPortal: TemplatePortal;
  public changeStyling$: Observable<any>;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store$: Store<FormsBuilderContentState>,
    private fb: FormsBuilderService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.store$.pipe(select(selectAccordion)).subscribe((state: AccordionState) => {
      this.accordionState = state;
    });
    this.store$.pipe(select(selectDropArea)).subscribe((state: DropAreaState) => {
      this.dropAreaState = state;
    });
    this.store$.pipe(select(selectDragArea)).subscribe((state: DragAreaState) => {
      this.dragAreaState = state;
    });
  }

  ngAfterViewInit() {
    this.dropAreaPortal = new TemplatePortal(this.dropAreaPortalContent, this._viewContainerRef);
    this.cdr.detectChanges();
    this.changeStyling$ = merge(
      fromEvent(this.dropList.nativeElement, 'click'),
      fromEvent(this.backgroundText.elementRef.nativeElement, 'click'),
    ).pipe(
      takeUntil(this.destroy$),
      map((event: any) => event.target as Element),
      map(elementTarget => elementTarget.id === 'backgroundText' || elementTarget.id === 'drop-list'),
      tap(result => console.log(`You choose ${result ? 'form' : 'field'}`)),
      filter(value => !!value),
    );
    this.changeStyling$.subscribe(() => {
      console.log('click');
      this.store$.dispatch(new AccordionChangeStylingAction(true));
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public dropItem(evt: CdkDragDrop<any>, isDragItemEnter: boolean, length: number): void {
    let index = length.toString();
    this.fb.drop(evt, isDragItemEnter, index);
  }

  public enterToDropArea(isDragging: boolean): void {
    this.store$.dispatch(new DragAreaEnterToDropAreaAction(isDragging));
  }

  public leaveDropArea(): void {
    this.store$.dispatch(new DragAreaEnterToDropAreaAction(false));
  }
}
