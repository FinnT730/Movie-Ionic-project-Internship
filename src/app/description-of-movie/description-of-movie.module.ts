import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionOfMoviePageRoutingModule } from './description-of-movie-routing.module';

import { DescriptionOfMoviePage } from './description-of-movie.page';
import { YoutubeEmbedPipe } from './youtube-embed.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionOfMoviePageRoutingModule
  ],
  exports: [
    YoutubeEmbedPipe
  ],
  declarations: [DescriptionOfMoviePage, YoutubeEmbedPipe]
})
export class DescriptionOfMoviePageModule {}
