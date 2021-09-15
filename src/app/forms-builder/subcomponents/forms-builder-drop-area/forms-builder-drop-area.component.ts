import {Component,Input} from "@angular/core";

@Component({
  selector: 'app-forms-builder-drop-area',
  templateUrl: './forms-builder-drop-area.component.html',
  styleUrls: ['./forms-builder-drop-area.component.css']
})

export class FormsBuilderDropAreaComponent {
  @Input("dropAreaPortal") dropAreaPortal:any
  @Input("cdkPortalOutlet") cdkPortalOutlet:any
}
