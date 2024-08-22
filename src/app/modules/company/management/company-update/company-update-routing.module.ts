import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyUpdatePage } from './company-update.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyUpdatePageRoutingModule {}
