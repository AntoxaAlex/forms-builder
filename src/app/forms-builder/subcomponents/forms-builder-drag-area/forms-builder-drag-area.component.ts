import {Component, Input, Output} from "@angular/core";

@Component({
  selector: 'app-forms-builder-drag-area',
  templateUrl: './forms-builder-drag-area.component.html',
  styleUrls: ['./forms-builder-drag-area.component.css']
})

export class FormsBuilderDragAreaComponent {
  @Input("dragAreaPortal") dragAreaPortal:any
  @Input("cdkPortalOutlet") cdkPortalOutlet:any
  @Input("cdkDragDropped") cdkDragDropped:any
  @Input("cdkDragStarted") cdkDragStarted:any
}