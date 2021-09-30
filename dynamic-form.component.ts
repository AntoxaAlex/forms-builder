import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren
} from "@angular/core";
import { FormGroup, FormBuilder} from "@angular/forms";
import {FieldConfig} from "../../interfaces/field.interface";
import {Store} from "@ngrx/store";
import {FormsBuilderContentState} from "../state/reducers";
import {fromEvent} from "rxjs";
import {FormsBuilderService} from "../forms-builder.service";
import {DropAreaChangeIndexAction} from "../state/actions/dropAreaActions";

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form #dynamicForm [class]="isStyleInput ? 'accordion-container' : 'drop-area-container'" [formGroup]="form">
      <ng-container
        #dynamicInputs
        *ngFor="let field of fields;index as index"
        dynamicField
        [field]="field"
        [group]="form"
        [index]="index"
        [isStyleInput]="isStyleInput"
        [isFormActive]="isFormActive"
        [style]="!isStyleInput ? field.styles :''"
        (fieldSelected)="selectField(index)"
      >
      </ng-container>
    </form>
  `,
  styles: [
    `
      .accordion-container{
        overflow-x: auto;
        display: flex;
        padding: 20px 10px 0px 10px;
      }

      .drop-area-container{
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class DynamicFormComponent implements OnInit,AfterViewInit,AfterViewChecked {


  form: FormGroup;
  changeContent$:any

  @Input() fields: FieldConfig[] = [];
  @Input() isStyleInput:boolean
  @Input() isFormActive:boolean
  @Input() items:any
  @Input() selectedIndex:any

  @ViewChildren("dynamicInputs") inputComponents:any
  @ViewChild("dynamicForm") dynamicForm:any


  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder,private store$:Store<FormsBuilderContentState>,private formsBuilderService:FormsBuilderService) {
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value
      );
      group.addControl(field.name!, control);
    });
    return group;
  }

  ngOnInit(): void {
    this.form = this.createControl();
  }
  ngAfterViewInit() {

  }
  ngAfterViewChecked() {
   this.changeContent$= fromEvent(this.dynamicForm.nativeElement.children,"change").subscribe((evt:any)=>{
     this.isFormActive
       ? this.formsBuilderService.onChangeDropArea(evt)
       :  this.formsBuilderService.onChangeField({evt,items:this.items},this.selectedIndex)
   })
  }

  selectField(index:number){
    this.store$.dispatch(new DropAreaChangeIndexAction(index))
  }

}
