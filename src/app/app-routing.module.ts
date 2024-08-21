import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes.constant';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: AppRoutes.SPLASH,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.SPLASH,
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: AppRoutes.HOME,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: AppRoutes.AUTH,
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: AppRoutes.MANAGEMENT,
    loadChildren: () => import('./management/management.module').then( m => m.ManagementPageModule)
  },
  {
    path: AppRoutes.PUBLIC,
    loadChildren: () => import('./public/public.module').then( m => m.PublicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
