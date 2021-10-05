import {
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef,
  Input,
  OnDestroy,
  OnInit, QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fromEvent, Observable, ReplaySubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { FieldConfig } from '../../../core/interfaces/field.interface';
import { FormsBuilderContentState } from '../../../core/state/reducers';
import { FormsBuilderService } from '../../services/forms-builder.service';
import { DropAreaChangeIndexAction, DropAreaItem } from '../../../core/state/actions/dropAreaActions';
import { AccordionChangeStylingAction } from '../../../core/state/actions/accordionActions';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: [`./dynamic-form.component.scss`],
})
export class DynamicFormComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  public form: FormGroup;
  public changeContent$: Observable<any>;

  @Input() public fields: FieldConfig[] = [];
  @Input() public isStyleInput: boolean;
  @Input() public isFormActive: boolean;
  @Input() public items: DropAreaItem[];
  @Input() public selectedIndex: number;

  @ViewChildren('dynamicInputs') public inputComponents: QueryList<any>;
  @ViewChild('dynamicForm') public dynamicForm: ElementRef;

  get value() {
    return this.form.value;
  }

  constructor(
    private fb: FormBuilder,
    private store$: Store<FormsBuilderContentState>,
    private formsBuilderService: FormsBuilderService,
  ) {}

  public createControl(): FormGroup {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') return;
      const control = this.fb.control(field.value);
      group.addControl(field.name!, control);
    });
    return group;
  }

  ngOnInit(): void {
    this.form = this.createControl();
  }
  ngAfterViewInit() {
    console.log(this.inputComponents);
  }
  ngAfterViewChecked() {
    this.changeContent$ = fromEvent(this.dynamicForm.nativeElement.children, 'change').pipe(takeUntil(this.destroy$));

    this.changeContent$.subscribe((evt: Event) => {
      this.isFormActive
        ? this.formsBuilderService.onChangeDropArea(evt)
        : this.formsBuilderService.onChangeField({ evt, items: this.items }, this.selectedIndex);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public selectField(index: number): void {
    this.store$.dispatch(new AccordionChangeStylingAction(false));
    this.store$.dispatch(new DropAreaChangeIndexAction(index));
  }
}
