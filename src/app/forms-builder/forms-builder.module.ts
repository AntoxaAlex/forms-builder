import {NgModule} from "@angular/core";
import {FormsBuilderRoutingModule} from "./forms-builder-routing.module";
import {FormsBuilderComponent} from "./forms-builder.component";
import {CommonModule} from "@angular/common";

//Modules
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
//Components
import {FormsBuilderAccordionComponent} from "./subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {FormsBuilderDropAreaComponent} from "./subcomponents/forms-builder-drop-area/forms-builder-drop-area.component";
import {FormsBuilderDragAreaComponent} from "./subcomponents/forms-builder-drag-area/forms-builder-drag-area.component";
import { StyleItemComponent } from './style-item/style-item.component';



@NgModule({
  imports:[
    CommonModule,
    FormsBuilderRoutingModule,
    FormsModule,
    DragDropModule,
    MatCheckboxModule,
    CdkAccordionModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule,
    MatSlideToggleModule,
    PortalModule,
    MatSelectModule
  ],
  declarations:[
    FormsBuilderComponent,
    FormsBuilderAccordionComponent,
    FormsBuilderDropAreaComponent,
    FormsBuilderDragAreaComponent,
    StyleItemComponent
  ]
})

export class FormsBuilderModule {

}
