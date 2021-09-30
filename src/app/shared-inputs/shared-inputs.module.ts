import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthInputComponent } from './auth-input.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    AuthInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[AuthInputComponent]
})

export class SharedInputsModule { }
