<<<<<<< HEAD:src/app/forms-builder/forms-builder-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsBuilderComponent } from './forms-builder.component';

export const routes: Routes = [
  {
    path: '',
    component: FormsBuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsBuilderRoutingModule {}
=======
import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {FormsBuilderComponent} from "./forms-builder.component";

export const routes:Routes = [
  {
    path:"",
    component:FormsBuilderComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class FormsBuilderRoutingModule {

}
>>>>>>> 2b441f217a0e0a74d8e2419cdcbeb50a1bcfd267:forms-builder-routing.module.ts
