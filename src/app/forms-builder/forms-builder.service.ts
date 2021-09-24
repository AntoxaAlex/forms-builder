import { Injectable } from '@angular/core';
import {FormsBuilderModule} from "./forms-builder.module";
import {DropAreaItem} from "./state/actions/dropAreaActions";

@Injectable({
  providedIn: "any"
})
export class FormsBuilderService {

  constructor() { }

  getPosition = (el:string,point:number):any => {
    const dropItem = document.getElementById("drop-list")
    if(dropItem){
      if(el==="x"){
        return point - dropItem.getBoundingClientRect().x
      }else if(el==="y"){
        return point - dropItem.getBoundingClientRect().y
      }
    }
  }

  createDropElement = (event:any) => {
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
      x,
      y,
      styles:[
        {
          type:"slider",
          id:"width",
          name:"width",
          label:"Width",
          max:600,
          min:10,
          step:1,
          tickInterval:1,
          value:150
        },
        {
          type:"slider",
          id:"height",
          name:"height",
          label:"Height",
          max:100,
          min:20,
          step:1,
          tickInterval:1,
          value:50
        },
        {
          type:"checkbox",
          id:"required",
          name:"required",
          label:"Required",
          value:false
        },
        {
          type:"input",
          id:"placeholder",
          name:"placeholder",
          label:"Placeholder",
          inputType:"text",
          value:"Type some text"
        },
        {
          type:"slider",
          id:"fontSize",
          name:"fontSize",
          label:"Font Size",
          max:25,
          min:10,
          step:1,
          tickInterval:1,
          value:14
        },
        {
          type:"slider",
          id:"fontWeight",
          name:"fontWeight",
          label:"Font Weight",
          max:900,
          min:100,
          step:100,
          tickInterval:100,
          value:14
        },
        {
          type:"input",
          id:"borderStyle",
          name:"borderStyle",
          label:"Border Style",
          inputType:"text",
          value:"none"
        },
        {
          type:"input",
          id:"color",
          name:"color",
          label:"Text Color",
          inputType:"color",
          value:"#000"
        }
      ]}

      return payload
  }


}
