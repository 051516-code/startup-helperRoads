import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMPANY_ROUTES } from './company-routes.constant';

const routes: Routes = [
  {
    path : COMPANY_ROUTES.PUBLIC.PROFILE,
    loadChildren : () => import('./public/company-profile/company-profile.module').then( m => m.CompanyProfilePageModule)
  }, 
  {
    path : COMPANY_ROUTES.PUBLIC.COMPANY_LIST,
    loadChildren : () => import('./public/company-list/company-list.module').then( m => m.CompanyListPageModule)
  },
  {
    path : COMPANY_ROUTES.MANAGEMENT.DASHBOARD,
    loadChildren : () => import('./management/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path : COMPANY_ROUTES.MANAGEMENT.CREATE_COMPANY,
    loadChildren: () => import('./management/crud/company-create/company-create.module').then( m => m.CompanyCreatePageModule)
  },
  {
    path : COMPANY_ROUTES.MANAGEMENT.COMPANY_EDIT,
    loadChildren: () => import('./management/crud/company-edit/company-edit.module').then( m => m.CompanyEditPageModule)
  },
  {
    path : COMPANY_ROUTES.MANAGEMENT.COMPANY_DETAILS,
    loadChildren: () => import('./management/crud/company-detail/company-detail.module').then( m => m.CompanyDetailPageModule)
  },
  {
    path: '',
    redirectTo: COMPANY_ROUTES.PUBLIC.COMPANY_LIST,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyModuleRoutingModule { }
