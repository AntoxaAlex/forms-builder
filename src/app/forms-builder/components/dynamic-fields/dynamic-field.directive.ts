import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { SliderComponent } from './slider/slider.component';
import { FieldConfig } from '../../../core/interfaces/field.interface';
import { TextareaComponent } from './textarea/textarea.component';


const componentMapper:any = {
  input: InputComponent,
  textarea: TextareaComponent,
  select: SelectComponent,
  checkbox: CheckboxComponent,
  button: ButtonComponent,
  slider: SliderComponent,
};

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit, AfterViewInit {
  @Input() public field: FieldConfig;
  @Input() public group: FormGroup;
  @Input() public index: number;
  @Input() public styles: FieldConfig[];
  @Input() public isStyleInput: boolean;
  @Input() public isFormActive: boolean;
  @Output() public formChanged = new EventEmitter();
  @Output() public fieldChanged = new EventEmitter();
  @Output() public fieldSelected = new EventEmitter();

  public componentRef: ComponentRef<any>;

  //Inject “ComponentFactoryResolver” and “ViewContainerRef” services in the constructor.
  // The ComponentFactoryResolver will be used to resolve the component at run time.
  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit() {
    //  Use the resolveComponentFactory method of ComponentFactoryResolver to create the component factory based on field type defined in the configuration.
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);

    //  Use the createComponent method of ViewContainerRef to create the component from the component factory.
    this.componentRef = this.container.createComponent(factory);

    //  Pass field and group properties into dynamically created component via this.componentRef.instance.
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    this.componentRef.instance.index = this.index;
    this.componentRef.instance.isStyleInput = this.isStyleInput;
    this.componentRef.instance.isFormActive = this.isFormActive;
  }

  ngAfterViewInit() {
    if (!this.isStyleInput) {
      this.componentRef.instance.fieldSelected.subscribe(() => {
        this.fieldSelected.emit();
      });
    }
  }
}
