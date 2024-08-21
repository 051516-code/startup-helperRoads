import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicPageRoutingModule } from './public-routing.module';

import { PublicPage } from './public.page';

import { LoadingComponent } from '../shared/components/loading/loading.component';
import { MapModule } from '../shared/components/map-component/map.module';
import { MostPopularModule } from '../shared/components/most-popular/most-popular.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicPageRoutingModule,
    MapModule,
    MostPopularModule

  ],
  declarations: [
    PublicPage,
    LoadingComponent,
   


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PublicPageModule {}
