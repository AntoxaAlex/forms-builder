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
      styles: [
        {
          type: 'slider',
          id: 'width',
          name: '0',
          label: 'Width',
          max: 600,
          min: 10,
          step: 1,
          tickInterval: 1,
          value: type === 'checkbox' ? 20 : 150,
        },
        {
          type: 'slider',
          id: 'height',
          name: '1',
          label: 'Height',
          max: 100,
          min: 20,
          step: 1,
          tickInterval: 1,
          value: 50,
        },
        {
          type: 'checkbox',
          id: 'required',
          name: '2',
          label: 'Required',
          value: false,
        },
        {
          type: 'input',
          id: 'placeholder',
          name: '3',
          label: 'Placeholder',
          inputType: 'text',
          value: 'Type some text',
        },
        {
          type: 'slider',
          id: 'fontSize',
          name: '4',
          label: 'Font Size',
          max: 25,
          min: 10,
          step: 1,
          tickInterval: 1,
          value: 14,
        },
        {
          type: 'slider',
          id: 'fontWeight',
          name: '5',
          label: 'Font Weight',
          max: 900,
          min: 100,
          step: 100,
          tickInterval: 100,
          value: 14,
        },
        {
          type: 'input',
          id: 'borderStyle',
          name: '6',
          label: 'Border Style',
          inputType: 'text',
          value: 'none',
        },
        {
          type: 'input',
          id: 'color',
          name: '7',
          label: 'Text Color',
          inputType: 'color',
          value: '#000',
        },
      ],
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
