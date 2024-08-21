import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicPageRoutingModule } from './public-routing.module';

import { PublicPage } from './public.page';

import { MapModule } from '../shared/components/map-component/map.module';
import { MostPopularComponent } from '../shared/components/most-popular/most-popular.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicPageRoutingModule,
    MapModule
  ],
  declarations: [
    PublicPage,
    MostPopularComponent,
    LoadingComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PublicPageModule {}
