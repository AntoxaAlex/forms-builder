import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { selectDropArea } from '../../../../core/state/selectors';
import { DropAreaState } from '../../../../core/state/reducers/dropAreaReducer';
import { FormsBuilderContentState } from '../../../../core/state/reducers';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [],
})
export class CheckboxComponent implements OnInit {
  public field: FieldConfig;
  public group: FormGroup;
  public index: number;
  public styles: FieldConfig[];
  public isStyleInput: boolean;
  public isFormActive: boolean;

  @Output('fieldSelected') public fieldSelected = new EventEmitter();

  constructor(private store$: Store<FormsBuilderContentState>) {}

  ngOnInit() {
    if (!this.isStyleInput) {
      this.store$.pipe(select(selectDropArea)).subscribe((state: DropAreaState) => {
        this.styles = state.items[this.index].styles;
      });
    }
  }

  public selectField(): void {
    this.fieldSelected.emit();
  }
}
