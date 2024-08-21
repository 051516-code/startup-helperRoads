import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyEntryPageRoutingModule } from './company-entry-routing.module';

import { CompanyEntryPage } from './company-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyEntryPageRoutingModule
  ],
  declarations: [CompanyEntryPage]
})
export class CompanyEntryPageModule {}
