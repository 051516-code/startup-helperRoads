import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.page.html',
  styleUrls: ['./company-list.page.scss'],
})
export class CompanyListPage implements OnInit {

  
 // Lista de empresas con datos de ejemplo
 companies = [
  {
    name: 'Borracharia do João',
    logo: 'assets/img/guincho.jpg',  // URL de la imagen del avatar
    banner: 'assets/img/banner1.jpg', // URL del banner
    distance: '50',  // Distancia en metros
    isOpen: true,  // Estado de la empresa
    description: 'Especializada em conserto de pneus e serviços rápidos.',
    location: 'Rua Exemplo, 123, Cidade, Estado',  // Dirección para el mapa
  },
  {
    name: 'Guinchos ABC',
    logo: 'https://via.placeholder.com/80x80?text=Logo2',
    banner: 'https://via.placeholder.com/350x100?text=Banner2',
    distance: '200',
    isOpen: false,
    description: 'Serviços de guincho e assistência 24h.',
    location: 'Avenida Modelo, 456, Cidade, Estado',
  },
  {
    name: 'Borracharia do Pedro',
    logo: 'https://via.placeholder.com/80x80?text=Logo3',
    banner: 'https://via.placeholder.com/350x100?text=Banner3',
    distance: '150',
    isOpen: true,
    description: 'Troca de pneus, alinhamento e balanceamento.',
    location: 'Praça Central, 789, Cidade, Estado',
  }
];


  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  openMap(location: string) {
    // Aquí puedes implementar la lógica para abrir el mapa
    this.router.navigate(['helperRoads/map'])
    console.log('Opening map for:', location);
  }
}
