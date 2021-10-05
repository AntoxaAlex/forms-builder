import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { FormsBuilderContentState } from '../../../../core/state/reducers';
import { selectDropArea } from '../../../../core/state/selectors';
import { DropAreaState } from '../../../../core/state/reducers/dropAreaReducer';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: [],
})
export class TextareaComponent implements OnInit {
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
