import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: '',
    component: PublicPage
  },  {
    path: 'company-entry',
    loadChildren: () => import('./company-entry/company-entry.module').then( m => m.CompanyEntryPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
