import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';

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

  @ViewChild('formInputRef') formInputRef:any

  constructor() { }

  ngOnInit(): void {
  }

}
