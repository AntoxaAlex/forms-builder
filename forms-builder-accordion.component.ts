import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {TemplatePortal} from "@angular/cdk/portal";
import {Store} from "@ngrx/store";
import {FormsBuilderContentState} from "../../state/reducers";
import {AccordionExpandAction} from "../../state/actions/accordionActions";


@Component({
  selector: 'app-forms-builder-accordion',
  templateUrl: './forms-builder-accordion.component.html',
  styleUrls: ['./forms-builder-accordion.component.scss']
})

export class FormsBuilderAccordionComponent implements OnInit,AfterViewInit {


  @Input("accordionData") accordionData: any
  @Input("dropElements") dropElements: any
  @Input("selectedIndex") selectedIndex: any

  @Output("accordionExpanded") accordionExpanded = new EventEmitter<boolean>()

  @ViewChild("accordionItem") accordionItem: any
  @ViewChild("expandBtn") expandBtn: any
  @ViewChild("accordionPortalContent") accordionPortalContent: any

  accordionPortal: any

  constructor(private _viewContainerRef: ViewContainerRef,private store$:Store<FormsBuilderContentState>) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.accordionPortal = new TemplatePortal(this.accordionPortalContent, this._viewContainerRef)
  }

  toggleExpander() {
    this.store$.dispatch(new AccordionExpandAction())
  }


}
