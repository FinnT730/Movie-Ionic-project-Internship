import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'popularmovie',
    loadChildren: () => import('./popularmovie/popularmovie.module').then( m => m.PopularmoviePageModule)
  },
  {
    path: 'description-of-movie/:id',
    loadChildren: () => import('./description-of-movie/description-of-movie.module').then( m => m.DescriptionOfMoviePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
