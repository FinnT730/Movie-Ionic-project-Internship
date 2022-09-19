import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularmoviePageRoutingModule } from './popularmovie-routing.module';

import { PopularmoviePage } from './popularmovie.page';

import { SwiperModule } from 'swiper/angular';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularmoviePageRoutingModule,
    SwiperModule,
    ScrollingModule,
  ],
  declarations: [PopularmoviePage]
})
export class PopularmoviePageModule {}
