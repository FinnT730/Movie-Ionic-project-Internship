import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionOfTvshowPage } from './description-of-tvshow.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionOfTvshowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionOfTvshowPageRoutingModule {}
