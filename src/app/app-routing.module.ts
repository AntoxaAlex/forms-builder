import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./auth.guard";


const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule) },
  { path: 'forms-builder', loadChildren: () => import('./forms-builder/forms-builder.module').then(m => m.FormsBuilderModule),canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
