import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPage } from './company.page';
import { CompanyRoutes } from './company-routes.constant';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage
  },
  {
    path: `${CompanyRoutes.CREATE}`,
    loadChildren: () => import('./management/company-create/company-create.module').then( m => m.CompanyCreatePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPageRoutingModule {}
