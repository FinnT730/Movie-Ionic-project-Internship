import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionOfMoviePage } from './description-of-movie.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionOfMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionOfMoviePageRoutingModule {}
