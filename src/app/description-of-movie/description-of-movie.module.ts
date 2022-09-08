import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionOfMoviePageRoutingModule } from './description-of-movie-routing.module';

import { DescriptionOfMoviePage } from './description-of-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionOfMoviePageRoutingModule
  ],
  declarations: [DescriptionOfMoviePage]
})
export class DescriptionOfMoviePageModule {}
