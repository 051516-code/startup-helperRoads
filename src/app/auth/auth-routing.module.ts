import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './auth-routes.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: AuthRoutes.LOGIN,
    pathMatch: 'full',
  },
  {
    path: AuthRoutes.LOGIN,
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: AuthRoutes.REGISTER,
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: AuthRoutes.RECOVERPASS,
    loadChildren: () => import('./recoverpass/recoverpass.module').then( m => m.RecoverpassPageModule)
  },
  {
    path: AuthRoutes.VERIFYCODE,
    loadChildren: () => import('./verify-code/verify-code.module').then( m => m.VerifyCodePageModule)
  },
  {
    path: AuthRoutes.RESSETPASS,
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
