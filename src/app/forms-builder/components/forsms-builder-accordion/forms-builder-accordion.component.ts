import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, OnDestroy,
  OnInit, TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";


import { FormsBuilderContentState } from '../../../core/state/reducers';
import { AccordionExpandAction } from '../../../core/state/actions/accordionActions';
import { AccordionState } from '../../../core/state/reducers/accordionReducer';
import { DropAreaState } from '../../../core/state/reducers/dropAreaReducer';
import { selectAccordion, selectDropArea } from '../../../core/state/selectors';
@Component({
  selector: 'app-forms-builder-accordion',
  templateUrl: './forms-builder-accordion.component.html',
  styleUrls: ['./forms-builder-accordion.component.scss'],
})
export class FormsBuilderAccordionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('accordionItem') public accordionItem: ElementRef;
  @ViewChild('expandBtn') public expandBtn: ElementRef;
  @ViewChild('accordionPortalContent') public accordionPortalContent: TemplateRef<any>;

  public accordionState: AccordionState;
  public dropAreaState: DropAreaState;
  public accordionPortal: TemplatePortal;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store$: Store<FormsBuilderContentState>,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.store$.pipe(
      takeUntil(this.destroy$),
      select(selectAccordion)
    ).subscribe((state: AccordionState) => {
      this.accordionState = state;
    });
    this.store$.pipe(
      takeUntil(this.destroy$),
      select(selectDropArea)
    ).subscribe((state: DropAreaState) => {
      this.dropAreaState = state;
    });
  }

  ngAfterViewInit() {
    this.accordionPortal = new TemplatePortal(this.accordionPortalContent, this._viewContainerRef);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public toggleExpander(): void {
    this.store$.dispatch(new AccordionExpandAction());
  }
}
