import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { eUserActions, AddUserActions } from '../state/actions/userActions';
import { FormsBuilderService } from '../../forms-builder/services/forms-builder.service';
import { User } from '../interfaces/user.interface';

@Injectable()
export class FormsBuilderEffects {
  constructor(private actions$: Actions, private formsBuilderService: FormsBuilderService) {}

  public fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eUserActions.fetchUser),
      switchMap(() => this.formsBuilderService.getUser().pipe(
        map((user: User) => new AddUserActions(user))
        )
      ),
    ),
  );
}
