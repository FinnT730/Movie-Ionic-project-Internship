import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularTvPageRoutingModule } from './popular-tv-routing.module';

import { PopularTvPage } from './popular-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularTvPageRoutingModule
  ],
  declarations: [PopularTvPage]
})
export class PopularTvPageModule {}
