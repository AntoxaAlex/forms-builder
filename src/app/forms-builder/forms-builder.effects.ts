import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {dropAreaActions, DropAreaAddItemAction} from "./state/actions/dropAreaActions";
import {map, switchMap, tap} from "rxjs/operators";
import {FormsBuilderService} from "./forms-builder.service";

@Injectable()
export class FormsBuilderEffects {
  constructor(private actions$: Actions,private formsBuilderService:FormsBuilderService) {}

  loadDropItems$ = createEffect(()=>this.actions$.pipe(
    ofType(dropAreaActions.addItemToServer),
    switchMap((item:any)=>this.formsBuilderService.getDropItems(item).pipe(
      map((item:any)=>(new DropAreaAddItemAction(item.payload))
    ))
  )))
}
