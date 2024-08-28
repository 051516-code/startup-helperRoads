import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../core/interfaces/company.interface';
import { AppRoutes } from '../../../app-routes.constant';
import { ModulesRoutes } from '../../../modules/modules-routes.constant';
// import { CompanyRoutes } from '../../../modules/company/company-routes.constant';
import { COMPANY_ROUTES } from 'src/app/modules/company-module/company-routes.constant';



@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent  implements OnInit {
  @Input() companies: Company[] = []; // Lista de URLs de avatares
  isLoading = false;

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
    this.isLoading = true;

    setTimeout(() => {
      // todo: redirige a la pagina del perfil de la empresa
      this.isLoading = false;
    console.log('perfil most popular',index)
    this.router.navigate([`${AppRoutes.MODULE}/${ModulesRoutes.COMPANY}/${COMPANY_ROUTES.PUBLIC.PROFILE}`])

    }, 3000)
    
  }

}
