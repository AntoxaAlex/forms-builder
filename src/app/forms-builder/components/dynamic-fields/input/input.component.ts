import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { selectDropArea } from '../../../../core/state/selectors';
import { DropAreaState } from '../../../../core/state/reducers/dropAreaReducer';
import { FormsBuilderContentState } from '../../../../core/state/reducers';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [],
})
export class InputComponent implements OnInit, OnDestroy {
  public field: FieldConfig;
  public group: FormGroup;
  public index: number;
  public styles: FieldConfig[];
  public isStyleInput: boolean;
  public isFormActive: boolean;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  @Output('fieldSelected') public fieldSelected = new EventEmitter();
  constructor(private store$: Store<FormsBuilderContentState>) {}

  ngOnInit() {
    if (!this.isStyleInput) {
      this.store$.pipe(
        takeUntil(this.destroy$),
        select(selectDropArea)
      ).subscribe((state: DropAreaState) => {
        this.styles = state.items[this.index].styles;
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public selectField(): void {
    this.fieldSelected.emit();
  }
}
