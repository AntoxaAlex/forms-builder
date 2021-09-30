import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Store } from '@ngrx/store';

import { FormsBuilderContentState } from '../../../core/state/reducers';
import { AccordionExpandAction } from '../../../core/state/actions/accordionActions';
import { AccordionState } from '../../../core/state/reducers/accordionReducer';
import { DropAreaState } from '../../../core/state/reducers/dropAreaReducer';
import { DragAreaState } from '../../../core/state/reducers/dragAreaReducer';


@Component({
  selector: 'app-forms-builder-accordion',
  templateUrl: './forms-builder-accordion.component.html',
  styleUrls: ['./forms-builder-accordion.component.scss']
})

export class FormsBuilderAccordionComponent implements AfterViewInit {

  @Input('accordionData') public accordionData: AccordionState
  @Input('dropElements') public dropElements: DropAreaState
  @Input('selectedIndex') public selectedIndex: DragAreaState

  @Output('accordionExpanded') public accordionExpanded = new EventEmitter<boolean>()

  @ViewChild('accordionItem') public accordionItem: ElementRef
  @ViewChild('expandBtn') public expandBtn: ElementRef
  @ViewChild('accordionPortalContent') public accordionPortalContent: any

  public accordionPortal: TemplatePortal

  constructor(private _viewContainerRef: ViewContainerRef, private store$: Store<FormsBuilderContentState>) {}

  ngAfterViewInit() {
    this.accordionPortal = new TemplatePortal(this.accordionPortalContent, this._viewContainerRef)
  }

  public toggleExpander():void {
    this.store$.dispatch(new AccordionExpandAction())
  }


}
