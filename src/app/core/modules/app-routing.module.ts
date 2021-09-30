import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "../guards/auth.guard";


const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', loadChildren: () => import('../../authorization/auth.module').then(m => m.AuthModule) },
  { path: 'forms-builder', loadChildren: () => import('../../forms-builder/modules/forms-builder.module').then(m => m.FormsBuilderModule),canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
