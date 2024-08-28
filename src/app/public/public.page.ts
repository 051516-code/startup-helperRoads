import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AppRoutes } from '../app-routes.constant';
import { ModulesRoutes } from '../modules/modules-routes.constant';
import { COMPANY_ROUTES } from '../modules/company-module/company-routes.constant';

import { Company } from '../core/interfaces/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.page.html',
  styleUrls: ['./public.page.scss'],
})
export class PublicPage implements OnInit {

  isLoading = false;

  avatarList: Company[] = [
    {
      image: 'assets/img/negro.jpg',
      name: 'Empresa Negra',
      rating: [1, 1, 1, 1, 1], // 5 estrellas
      distance: 5 // 5 km
    },
    {
      image: 'assets/img/moura.jpeg',
      name: 'Empresa Moura',
      rating: [1, 1, 1, 1, 0], // 4 estrellas
      distance: 10 // 10 km
    },
    {
      image: 'assets/img/borracha.jpeg',
      name: 'Empresa Borracha',
      rating: [1, 1, 1, 0, 0], // 3 estrellas
      distance: 15 // 15 km
    },
    {
      image: 'assets/img/borracha.jpeg',
      name: 'Empresa Borracha',
      rating: [1, 1, 1, 0, 0], // 3 estrellas
      distance: 15 // 15 km
    }
  ];

  constructor(
    private alertController : AlertController,
    private navCtrl : NavController,
    private router : Router
  ) { }
  ngOnInit() {
  }

  async showAlert() {
    // Mostrar el alert con opciones
    const alert = await this.alertController.create({
      header: 'Choose an Option',
      message: 'Please select one of the options below:',
      buttons: [
        {
          text: 'Guincho',
          handler: () => {
            this.handleSelection('guincho');
          }
        },
        {
          text: 'Borracharia',
          handler: () => {
            this.handleSelection('borracharia');
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }





  private handleSelection(selection: string) {
    // Mostrar el componente de carga
    this.isLoading = true;

    // Simular un retraso para la carga (puedes reemplazar esto con tu lógica de redirección real)
    setTimeout(() => {
      this.isLoading = false;
      if (selection === 'guincho') {
        // this.navCtrl.navigateForward('/helperRoads/map/company-list'); // Redirige a la página correspondiente
        console.log(' redirecto...Guincho')
        this.router.navigate([`${AppRoutes.MODULE}/${ModulesRoutes.COMPANY}/${COMPANY_ROUTES.PUBLIC.COMPANY_LIST}`])


      } else if (selection === 'borracharia') {
        console.log(' redirecto...Borracharia')
        this.navCtrl.navigateForward('/helperRoads/map/company-list'); // Redirige a la página correspondiente
      }
    }, 2000); // Simula un retraso de 2 segundos
  }
}
