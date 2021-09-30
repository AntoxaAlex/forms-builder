import { Injectable } from '@angular/core';
import { AccordionChangeFormAction, AccordionChangeStylingAction } from './state/actions/accordionActions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  DropAreaAddItemToServerAction,
  DropAreaChangeIndexAction,
  DropAreaEditItemAction,
  DropAreaItem
} from './state/actions/dropAreaActions';
import { FormsBuilderContentState } from './state/reducers';
import { DragAreaEnterToDropAreaAction, DragAreaStartDraggingAction } from './state/actions/dragAreaActions';


@Injectable({
  providedIn: 'any'
})

export class FormsBuilderService {

  public index:number=0

  constructor(private store$: Store<FormsBuilderContentState>, private http: HttpClient) { }


  public getDropItems(items:DropAreaItem[]): Observable<any>{
    return this.http.post('http://localhost:5000/items',items)
  }

  public getPosition = (el:string,point:number):number|void => {
    const dropItem = document.getElementById('drop-list')
    if(dropItem){
      if(el==="x"){
        return point - dropItem.getBoundingClientRect().x
      }else if(el==="y"){
        return point - dropItem.getBoundingClientRect().y
      }
    }
  }

  public drop(event:any,isDragItemEnter:boolean,index:string|null):void{
    //If dragged element crossed Drop Area
    if(isDragItemEnter){
      const payload = this.createDropElement(event,index!)
      this.store$.dispatch(new DropAreaAddItemToServerAction(payload))
      this.store$.dispatch(new DragAreaStartDraggingAction(false))
      this.store$.dispatch(new DragAreaEnterToDropAreaAction(false))
      this.store$.dispatch(new DropAreaChangeIndexAction(parseInt(index!)))
      this.store$.dispatch(new AccordionChangeStylingAction(false))
    }
  }

  createDropElement = (event:any,index:string) => {
    //Retrieve information about drop position and element id from event
    const dropPoint = event.dropPoint
    const type = event.item.element.nativeElement.id
    //Get element position relative to Drop Area
    const x = this.getPosition("x",dropPoint.x)
    const y = this.getPosition("y",dropPoint.y)
    //Add element into Drop Area
    const payload:DropAreaItem = {
      type,
      id:"field-"+type,
      index,
      x:x!,
      y:y!,
      styles:[
        {
          type:'slider',
          id:'width',
          name:'0',
          label:'Width',
          max:600,
          min:10,
          step:1,
          tickInterval:1,
          value:150
        },
        {
          type:'slider',
          id:'height',
          name:'1',
          label:'Height',
          max:100,
          min:20,
          step:1,
          tickInterval:1,
          value:50
        },
        {
          type:'checkbox',
          id:'required',
          name:'2',
          label:'Required',
          value:false
        },
        {
          type:'input',
          id:'placeholder',
          name:'3',
          label:'Placeholder',
          inputType:'text',
          value:'Type some text'
        },
        {
          type:'slider',
          id:'fontSize',
          name:'4',
          label:'Font Size',
          max:25,
          min:10,
          step:1,
          tickInterval:1,
          value:14
        },
        {
          type:'slider',
          id:'fontWeight',
          name:'5',
          label:'Font Weight',
          max:900,
          min:100,
          step:100,
          tickInterval:100,
          value:14
        },
        {
          type:'input',
          id:'borderStyle',
          name:'6',
          label:'Border Style',
          inputType:'text',
          value:'none'
        },
        {
          type:'input',
          id:'color',
          name:'7',
          label:'Text Color',
          inputType:'color',
          value:"#000"
        }
      ]}

      return payload
  }

  public onChangeDropArea = (evt:any):void =>{
    if(evt){
      const name:string = evt.target ? evt.target.id : evt.source._elementRef.nativeElement.id
      const value:any = name ==='required' ? evt.checked : evt.target.value
      const index:number = parseInt(evt.target.name)
      this.store$.dispatch(new AccordionChangeFormAction({index,name,value}))
    }
  }

  public onChangeField = (data:any,selectedIndex:number):void => {
    if(data){
      const {items,evt} = data
      const name = evt.target ? evt.target.id : evt.source._elementRef.nativeElement.id
      const index = parseInt(evt.target.name)
      const value = name ==='field-checkbox' ? evt.checked : evt.target.value
      console.log(selectedIndex,index,name,value)
      const newItems = [...items]
      newItems[selectedIndex] = {...newItems[selectedIndex]}
      newItems[selectedIndex].styles = [...newItems[selectedIndex].styles]
      newItems[selectedIndex].styles[index] = {...newItems[selectedIndex].styles[index],value:value}
      this.store$.dispatch(new DropAreaEditItemAction(newItems))
    }
  }

}
