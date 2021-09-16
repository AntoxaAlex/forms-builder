import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { FormsBuilderComponent } from './forms-builder/forms-builder.component';
import { FormsBuilderAccordionComponent} from "./forms-builder/subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {FormsBuilderDropAreaComponent} from "./forms-builder/subcomponents/forms-builder-drop-area/forms-builder-drop-area.component";
import {FormsBuilderDragAreaComponent} from "./forms-builder/subcomponents/forms-builder-drag-area/forms-builder-drag-area.component";

//Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {PortalModule} from "@angular/cdk/portal";
import {FormsModule} from "@angular/forms";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    FormsBuilderComponent,
    FormsBuilderAccordionComponent,
    FormsBuilderDropAreaComponent,
    FormsBuilderDragAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCheckboxModule,
    CdkAccordionModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule,
    MatSlideToggleModule,
    PortalModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
