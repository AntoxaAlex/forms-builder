import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormsBuilderContentState } from '../core/state/reducers';
import { FetchUserAction } from '../core/state/actions/userActions';

@Component({
  selector: 'app-forms-builder',
  templateUrl: './components/forms-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./components/forms-builder.component.scss'],
})
export class FormsBuilderComponent implements OnInit {
  constructor(private store$: Store<FormsBuilderContentState>) {}

  ngOnInit() {
    //Get user from server and push to the Store
    this.store$.dispatch(new FetchUserAction());
  }
}
