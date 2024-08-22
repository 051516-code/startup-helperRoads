import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../core/interfaces/company.interface';
import { AppRoutes } from '../../../app-routes.constant';
import { ModulesRoutes } from '../../../modules/modules-routes.constant';


@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent  implements OnInit {
  @Input() companies: Company[] = []; // Lista de URLs de avatares

  swiperConfig = {
    slidesPerView: 2, // Muestra tres slides por vista
    spaceBetween: 10, // Espacio entre los slides
    loop: true, // Habilita el loop para que el carrusel se repita
    autoplay: {
      delay: 3000, // Tiempo en milisegundos entre cada slide (3 segundos)
      disableOnInteraction: false, // No desactiva el autoplay al interactuar con el Swiper
    },
    pagination: { clickable: true }, // Habilita la paginación clickable
    navigation: true // Habilita los botones de navegación
  };

   constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  navigateToPage(index: number) {
    // todo: redirige a la pagina del perfil de la empresa
    console.log('perfil most popular',index)
    this.router.navigate([`${AppRoutes.MODULE}/${ModulesRoutes.PROFILE}`])
    // this.router.navigate([`helperRoads/map/company-profile/${index}`]); // Reemplaza con la ruta deseada
  }

}
