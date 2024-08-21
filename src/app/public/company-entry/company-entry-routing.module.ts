import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyEntryPage } from './company-entry.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyEntryPageRoutingModule {}
