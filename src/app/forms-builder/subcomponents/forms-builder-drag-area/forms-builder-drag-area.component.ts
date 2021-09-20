import {Component, Input, Output} from "@angular/core";
import {SubclassComponent} from "../subclass.component";

@Component({
  selector: 'app-forms-builder-drag-area',
  templateUrl: './forms-builder-drag-area.component.html',
  styleUrls: ['./forms-builder-drag-area.component.css']
})

export class FormsBuilderDragAreaComponent extends SubclassComponent{
  @Input("dragAreaPortal") dragAreaPortal:any

  constructor() {
    super();
  }
}
