import {
  AfterViewInit,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive, EventEmitter,
  Input,
  OnInit, Output,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ButtonComponent} from "./button/button.component";
import {SliderComponent} from "./slider/slider.component";
import {FieldConfig} from "../../interfaces/field.interface";

const componentMapper:any = {
  input:InputComponent,
  select:SelectComponent,
  checkbox:CheckboxComponent,
  button:ButtonComponent,
  slider:SliderComponent
}

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit,AfterViewInit{

  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Input() index: number;
  @Output() formChanged = new EventEmitter()

  componentRef:any

  //Inject “ComponentFactoryResolver” and “ViewContainerRef” services in the constructor.
  // The ComponentFactoryResolver will be used to resolve the component at run time.
  constructor(
    private resolver:ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
  //  Use the resolveComponentFactory method of ComponentFactoryResolver to create the component factory based on field type defined in the configuration.
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    )

  //  Use the createComponent method of ViewContainerRef to create the component from the component factory.
    this.componentRef = this.container.createComponent(factory)

  //  Pass field and group properties into dynamically created component via this.componentRef.instance.
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    this.componentRef.instance.index = this.index;
  }

  ngAfterViewInit() {
    this.componentRef.instance.formChanged.subscribe((evt:any)=>{
      this.formChanged.emit(evt)
    })
  }


}