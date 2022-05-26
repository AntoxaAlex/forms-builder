import { Injectable } from '@angular/core';
import { AccordionChangeFormAction } from '../../core/state/actions/accordionActions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

import { DropAreaAddItemAction, DropAreaEditItemAction, DropAreaItem } from '../../core/state/actions/dropAreaActions';
import { FormsBuilderContentState } from '../../core/state/reducers';
import { DragAreaEnterToDropAreaAction, DragAreaStartDraggingAction } from '../../core/state/actions/dragAreaActions';
import { RemoveUserAction } from '../../core/state/actions/userActions';
import { initStyles } from "../../core/interfaces/style.interface";

@Injectable({
  providedIn: 'any',
})
export class FormsBuilderService {
  public index: number = 0;

  constructor(private store$: Store<FormsBuilderContentState>, private http: HttpClient, private router: Router) {}

  public getUser(): Observable<any> {
    return this.http.get('http://localhost:5000/user');
  }

  public logout(): void {
    this.store$.dispatch(new RemoveUserAction());
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public getPosition = (el: string, point: number): number | void => {
    const dropItem: HTMLElement | null = document.getElementById('drop-list');
    if (dropItem) {
      let result: any = dropItem.getBoundingClientRect()
      return point - result[el];
    }
  };

  public drop(event: CdkDragDrop<any>, isDragItemEnter: boolean, index: string | null): void {
    //If dragged element crossed Drop Area
    console.log(event)
    if (isDragItemEnter) {
      const payload = this.createDropElement(event, index!);
      this.store$.dispatch(new DropAreaAddItemAction(payload));
      this.store$.dispatch(new DragAreaStartDraggingAction(false));
      this.store$.dispatch(new DragAreaEnterToDropAreaAction(false));
    }
  }

  createDropElement = (event: CdkDragDrop<any>, index: string) => {
    //Retrieve information about drop position and element id from event
    const dropPoint = event.dropPoint;
    const type = event.item.element.nativeElement.id;
    //Get element position relative to Drop Area
    const x = this.getPosition('x', dropPoint.x);
    const y = this.getPosition('y', dropPoint.y);
    //Add element into Drop Area
    const payload: DropAreaItem = {
      type,
      id: 'field-' + type,
      index,
      x: x!,
      y: y!,
      styles: initStyles(type)
    };

    return payload;
  };

  public onChangeDropArea = (evt: Event): void => {
    if (evt) {
      const target = evt.target as HTMLInputElement
      const name: string = target.id;
      const value: string | boolean | number = target.value;
      const index: number = parseInt(target.name);
      this.store$.dispatch(new AccordionChangeFormAction({ index, name, value }));
    }
  };

  public onChangeField = (data: { evt: Event, items: DropAreaItem[] }, selectedIndex: number): void => {
    console.log(data)
    if (data) {
      const { items, evt } = data;
      const target = evt.target as HTMLInputElement
      const name = target.id;
      const index = parseInt(target.name);
      const value = name === 'field-checkbox' ? target.checked : target.value;
      const newItems = [...items];
      newItems[selectedIndex] = { ...newItems[selectedIndex] };
      newItems[selectedIndex].styles = [...newItems[selectedIndex].styles!];
      newItems[selectedIndex].styles![index] = {
        ...newItems[selectedIndex].styles![index],
        value: value,
      };
      this.store$.dispatch(new DropAreaEditItemAction(newItems));
    }
  };
}
