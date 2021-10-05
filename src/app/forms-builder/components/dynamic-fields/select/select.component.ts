import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { selectDropArea } from '../../../../core/state/selectors';
import { DropAreaState } from '../../../../core/state/reducers/dropAreaReducer';
import { FormsBuilderContentState } from '../../../../core/state/reducers';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: [],
})
export class SelectComponent implements OnInit {
  public field: FieldConfig;
  public group: FormGroup;
  public index: number;
  public styles: FieldConfig[];
  public isStyleInput: boolean;

  @Output('fieldSelected') public fieldSelected = new EventEmitter();
  constructor(private store$: Store<FormsBuilderContentState>) {}

  ngOnInit() {
    this.store$.pipe(select(selectDropArea)).subscribe((state: DropAreaState) => {
      this.styles = state.items[this.index].styles;
    });
  }

  public selectField(): void {
    this.fieldSelected.emit();
  }
}
