import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-style-item',
  templateUrl: './style-item.component.html',
  styleUrls: ['./style-item.component.css']
})
export class StyleItemComponent implements OnInit {

  @Input() key:any
  @Input() value:any
  @Input() inputType:any
  @Input() isFormActive:any
  @Output("formChanged") formChanged = new EventEmitter()

  @ViewChild('formInputRef') formInputRef:any

  constructor() { }

  ngOnInit(): void {
  }

  changeForm(evt:any){
    this.formChanged.emit(evt)
  }

}
