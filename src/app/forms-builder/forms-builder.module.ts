import {NgModule} from "@angular/core";
import {FormsBuilderRoutingModule} from "./forms-builder-routing.module";
import {FormsBuilderComponent} from "./forms-builder.component";
import {CommonModule} from "@angular/common";

//Modules
import {MaterialModule} from "../material.module";

//Components
import {FormsBuilderAccordionComponent} from "./subcomponents/forsms-builder-accordion/forms-builder-accordion.component";
import {FormsBuilderDropAreaComponent} from "./subcomponents/forms-builder-drop-area/forms-builder-drop-area.component";
import {FormsBuilderDragAreaComponent} from "./subcomponents/forms-builder-drag-area/forms-builder-drag-area.component";
import { StyleItemComponent } from './subcomponents/style-item/style-item.component';
import { DropItemsComponent } from './subcomponents/drop-items/drop-items.component';

import {InputComponent} from "./dynamic-fields/input/input.component";
import {ButtonComponent} from "./dynamic-fields/button/button.component";
import {SliderComponent} from "./dynamic-fields/slider/slider.component"
import {CheckboxComponent} from "./dynamic-fields/checkbox/checkbox.component";
import {SelectComponent} from "./dynamic-fields/select/select.component";

//NgRx
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./state/reducers";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "../app.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {environment} from "../../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DynamicFieldDirective } from './dynamic-fields/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-fields/dynamic-form.component';



@NgModule({
  imports:[
    CommonModule,
    FormsBuilderRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([AppEffects]),

    StoreRouterConnectingModule.forRoot(),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  declarations:[
    FormsBuilderComponent,
    FormsBuilderAccordionComponent,
    FormsBuilderDropAreaComponent,
    FormsBuilderDragAreaComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SliderComponent,
    SelectComponent,
    StyleItemComponent,
    DropItemsComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  entryComponents:[
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SliderComponent,
    SelectComponent,
    StyleItemComponent
  ]
})

export class FormsBuilderModule {

}
