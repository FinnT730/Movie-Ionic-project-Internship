import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularmoviePageRoutingModule } from './popularmovie-routing.module';

import { PopularmoviePage } from './popularmovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularmoviePageRoutingModule
  ],
  declarations: [PopularmoviePage]
})
export class PopularmoviePageModule {}
