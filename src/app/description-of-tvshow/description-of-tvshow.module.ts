import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionOfTvshowPageRoutingModule } from './description-of-tvshow-routing.module';

import { DescriptionOfTvshowPage } from './description-of-tvshow.page';
import {YoutubeEmbedPipe} from '../description-of-movie/youtube-embed.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionOfTvshowPageRoutingModule
  ],
  declarations: [DescriptionOfTvshowPage,YoutubeEmbedPipe]
})
export class DescriptionOfTvshowPageModule {}
