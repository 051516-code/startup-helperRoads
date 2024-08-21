import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, take , tap } from 'rxjs';

import { AppRoutes } from "src/app/app-routes.constant";
import { AuthService } from "../services/authFake.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


  constructor(
    private router : Router,
    private authService : AuthService
  ){}


  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); // Devuelve un booleano directamente
    if (!isAuthenticated) {
      
      this.router.navigate([`${AppRoutes.AUTH}`]); // Redirige si no está autenticado
    }
    return isAuthenticated;
  }
}