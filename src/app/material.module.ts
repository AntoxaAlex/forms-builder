import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {PortalModule} from "@angular/cdk/portal";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,
    DragDropModule,
    PortalModule,
    MatOptionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,
    DragDropModule,
    PortalModule,
    MatOptionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
