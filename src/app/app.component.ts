import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth/services/authFake.service';
import { Register } from './auth/interfaces/resgister.interface';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LocationService } from './core/services/location.service';

import { AppRoutes } from './app-routes.constant';
import { PublicRoutes } from './public/public-routes.constant';
import { ModulesRoutes } from './modules/modules-routes.constant';
import { COMPANY_ROUTES } from './modules/company-module/company-routes.constant';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  isAuthenticated: boolean = false;
  user : Register | null = null;

  constructor(
    private authService : AuthService,
    private router : Router,
    private menuController : MenuController,
    private locationService : LocationService
  ) {}

  ngOnInit(): void {
    
    this.isAuthenticated = this.authService.isAuthenticated();

    if(this.isAuthenticated){
      const userString = this.authService.whoIm();
      this.user = userString ? JSON.parse(userString) : null;
    }

    //TODO: saber as cordenadas do usuario
    this.locationService.getUserLocation().subscribe(
      position => {
        // console.log('Position:', position);
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      error => {
        console.error('Error getting location:', error);
      }
    );

  }

  goToLogout() {
    this.authService.logout();
    
    // Redirige al usuario a la página de autenticación

    this.router.navigate([`${AppRoutes.AUTH}`]).then(() => {
      // Después de la navegación, recarga la página y cierra el menu
      this.closeMenu();
      // window.location.reload();
    }).catch(err => {
      // Maneja cualquier error que pueda ocurrir durante la navegación
      console.error('Error during navigation:', err);
    });
  }

  goToCompanyMode(){
    this.router.navigate([`${AppRoutes.MODULE}/${ModulesRoutes.COMPANY}`])
    this.closeMenu();
  }

  goToProfile(){
    
    
    this.router.navigate([`${AppRoutes.MODULE}/${ModulesRoutes.COMPANY}/${COMPANY_ROUTES.PUBLIC.COMPANY_LIST}`])
    this.closeMenu();
  }

  async goToSettings() {
    await this.router.navigate(['helperRoads/settings']);  // Cambia el enlace según tu configuración
    // this.router.navigate([`${AppRoutes.AUTH}`])
    this.closeMenu();
  }

  goToMap(){
    
    this.router.navigate([`${AppRoutes.MAP}`])
    this.closeMenu();
  }

  async closeMenu() {
    
    await this.menuController.toggle();
    
  }

}
