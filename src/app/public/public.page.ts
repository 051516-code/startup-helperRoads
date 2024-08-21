import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-public',
  templateUrl: './public.page.html',
  styleUrls: ['./public.page.scss'],
})
export class PublicPage implements OnInit {

  isLoading = false;

  avatarList: string[] = [
    'assets/img/negro.jpg',
    'assets/img/moura.jpeg',
    'assets/img/borracha.jpeg',
    'assets/img/negro.jpg',
    'assets/img/avatar2.jpg',
    'assets/img/avatar3.jpg',
    'assets/img/negro.jpg',
    'assets/img/avatar2.jpg',
    'assets/img/avatar3.jpg',
    'assets/img/negro.jpg',
    'assets/img/avatar2.jpg',
    'assets/img/avatar3.jpg',
  ];

  cardList = [
    { title: 'Card 1', content: 'This is the content of card 1' },
    { title: 'Card 2', content: 'This is the content of card 2' }
  ];


  constructor(
    private alertController : AlertController,
    private navCtrl : NavController
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
        this.navCtrl.navigateForward('/helperRoads/map/company-list'); // Redirige a la página correspondiente
      } else if (selection === 'borracharia') {
        this.navCtrl.navigateForward('/helperRoads/map/company-list'); // Redirige a la página correspondiente
      }
    }, 2000); // Simula un retraso de 2 segundos
  }
}
