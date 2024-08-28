import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyProfilePageRoutingModule } from './company-profile-routing.module';

import { CompanyProfilePage } from './company-profile.page';
import { CommentCardComponent } from '../../components/comment-card/comment-card.component';
import { RatingBarsComponent } from '../../components/rating-bars/rating-bars.component';
import { CommentSummaryComponent } from '../../components/comment-summary/comment-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyProfilePageRoutingModule
  ],
  declarations: [
    CompanyProfilePage,
    CommentCardComponent,
    RatingBarsComponent,
    CommentSummaryComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanyProfilePageModule {}
