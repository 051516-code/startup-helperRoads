import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesRoutes } from './modules-routes.constant';

const routes: Routes = [
  {
    path : '',
    redirectTo: ModulesRoutes.PROFILE,
    pathMatch: 'full'
  },
  {
    path: ModulesRoutes.PROFILE,
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path : ModulesRoutes.COMPANY,
    loadChildren: () => import('./company-module/company-module.module').then( m => m.CompanyModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
