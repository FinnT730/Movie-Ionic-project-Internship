import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionOfTvshowPage } from './description-of-tvshow.page';

// import {YoutubeEmbedPipe} from '../description-of-movie/youtube-embed.pipe';

const routes: Routes = [
  {
    path: '',
    component: DescriptionOfTvshowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // declarations: [YoutubeEmbedPipe]
})
export class DescriptionOfTvshowPageRoutingModule {}
