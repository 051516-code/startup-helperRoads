
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRoutes } from './company-routes.constant';

const routes: Routes = [

  {
    path: CompanyRoutes.PUBLIC,
    loadChildren: () => import('./public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: CompanyRoutes.MANAGEMENT,
    loadChildren: () => import('./management/management.module').then( m => m.ManagementPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
