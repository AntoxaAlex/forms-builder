import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { eDropAreaActions, DropAreaAddItemAction, DropAreaItem } from '../state/actions/dropAreaActions';
import { FormsBuilderService } from '../../forms-builder/services/forms-builder.service';


@Injectable()

export class FormsBuilderEffects {
  constructor(private actions$: Actions, private formsBuilderService: FormsBuilderService) {}

  public loadDropItems$ = createEffect(()=>this.actions$.pipe(
    ofType(eDropAreaActions.addItemToServer),
    switchMap((items:DropAreaItem[])=>this.formsBuilderService.getDropItems(items).pipe(
      map((data:any)=>(new DropAreaAddItemAction(data.payload))
    ))
  )))

}
