import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularmoviePage } from './popularmovie.page';

const routes: Routes = [
  {
    path: '',
    component: PopularmoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularmoviePageRoutingModule {}
