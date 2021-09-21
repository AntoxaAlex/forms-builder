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
import { StyleItemComponent } from './subcomponents/style-item/style-item.component';
import { DropItemsComponent } from './subcomponents/drop-items/drop-items.component';

//NgRx
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./state/reducers";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "../app.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";



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
    MatSelectModule,

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
    StyleItemComponent,
    DropItemsComponent
  ]
})

export class FormsBuilderModule {

}
