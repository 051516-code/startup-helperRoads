import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyUpdatePageRoutingModule } from './company-update-routing.module';

import { CompanyUpdatePage } from './company-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyUpdatePageRoutingModule
  ],
  declarations: [CompanyUpdatePage]
})
export class CompanyUpdatePageModule {}
