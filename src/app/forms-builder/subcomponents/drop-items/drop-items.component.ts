import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-item',
  templateUrl: './drop-items.component.html',
  styleUrls: ['./drop-items.component.css']
})
export class DropItemsComponent implements OnInit {

  @Input("element") element:any
  @Input("index") index:any
  @Input("dropElements") dropElements:any
  @Output("fieldSelected") fieldSelected = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }
  selectField(){
    this.fieldSelected.emit()
  }

}
