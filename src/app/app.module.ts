import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './auth/guards/auth.guard';
import { register } from 'swiper/element/bundle';
register();


@NgModule({
  declarations:
  [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [
    { provide: RouteReuseStrategy,
       useClass: IonicRouteStrategy,
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
