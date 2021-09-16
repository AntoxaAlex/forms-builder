import {Component,Input} from "@angular/core";
import {SubclassComponent} from "../subclass.component";
import {DumbComponent} from "../subclass-decorator.component";

@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.css']
})

export class FormsBuilderDropAreaComponent extends SubclassComponent{
  @Input("dropAreaPortal") dropAreaPortal:any
  @Input("cdkPortalOutlet") cdkPortalOutlet:any

  constructor() {
    super();
  }
}
