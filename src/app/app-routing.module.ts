import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


/**
 * Setup all the routes to the pages we have created.
 * Not all of them will be on the left sidebar, since some of them need a ID from the movie to fetch data for said movie.
 */
const routes: Routes = [
  {
    path: 'popularmovie',
    loadChildren: () => import('./popularmovie/popularmovie.module').then( m => m.PopularmoviePageModule)
  },
  {
    path: 'description-of-movie/:id',
    loadChildren: () => import('./description-of-movie/description-of-movie.module').then( m => m.DescriptionOfMoviePageModule)
  },
  {
    path: 'popular-tv',
    loadChildren: () => import('./popular-tv/popular-tv.module').then( m => m.PopularTvPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
