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
