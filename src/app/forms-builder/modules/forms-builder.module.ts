import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';

import { MaterialModule } from '../../shared/modules/material.module';
import { FormsBuilderRoutingModule } from './forms-builder-routing.module';
import { FormsBuilderComponent } from '../components/forms-builder.component';
import { metaReducers, reducers } from '../../core/state/reducers';
import { FormsBuilderEffects } from '../../core/effects/forms-builder.effects';
import { FormsBuilderAccordionComponent } from '../components/forsms-builder-accordion/forms-builder-accordion.component';
import { FormsBuilderDropAreaComponent } from '../components/forms-builder-drop-area/forms-builder-drop-area.component';
import { FormsBuilderDragAreaComponent } from '../components/forms-builder-drag-area/forms-builder-drag-area.component';
import { DynamicFieldDirective } from '../components/dynamic-fields/dynamic-field.directive';
import { DynamicFormComponent } from '../components/dynamic-fields/dynamic-form.component';
import { TextareaComponent } from '../components/dynamic-fields/textarea/textarea.component';
import { StylePipePipe } from '../../core/pipes/style-pipe.pipe';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { InputComponent } from '../components/dynamic-fields/input/input.component';
import { ButtonComponent } from '../components/dynamic-fields/button/button.component';
import { SliderComponent } from '../components/dynamic-fields/slider/slider.component';
import { CheckboxComponent } from '../components/dynamic-fields/checkbox/checkbox.component';
import { SelectComponent } from '../components/dynamic-fields/select/select.component';
import { environment } from '../../../environments/environment';


@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    FormsBuilderRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([ FormsBuilderEffects ]),

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
    TextareaComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    StylePipePipe,
    NavbarComponent
  ],
  entryComponents:[
    InputComponent,
    ButtonComponent,
    TextareaComponent,
    CheckboxComponent,
    SliderComponent,
    SelectComponent
  ]
})

export class FormsBuilderModule {
}
