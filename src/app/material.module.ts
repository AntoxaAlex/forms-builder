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
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    DragDropModule,
    PortalModule,
    MatOptionModule,
    MatButtonModule,
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
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    DragDropModule,
    PortalModule,
    MatIconModule,
    MatOptionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
