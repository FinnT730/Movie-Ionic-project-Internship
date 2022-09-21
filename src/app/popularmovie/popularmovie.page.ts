import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from './movie';
import {ActivatedRoute, Router} from '@angular/router';
import {SwiperModule} from "swiper/angular";
import Swiper from "swiper";

import {Genre} from './Genre';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.page.html',
  styleUrls: [/*'./popularmovie.page.scss'*/],
  encapsulation: ViewEncapsulation.None
})
export class PopularmoviePage implements OnInit {

  public swiper = new Swiper('.swiper', {
    width: 250,
    height: 250,
    slidesPerGroup: 4,
    autoHeight: true
  });


  private _genre: Genre[] = [];

  /**
   * Array to hold the info of the movies.
   */
  public movies: Movie[] = [];
  public page = 1;
  public totalPages = 0;
  private firstRun = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  /**
   * Use the build in override function to fetch the data for the most popular movies, and then put them in the array.
   */
  async ngOnInit() {

    /**
     * Get the genres and put them into the array for sorting the movies into the right genre.
     */
    await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US')
      .then(response => response.json())
      .then(genres => {
        console.log(genres);
        for (const genre of genres.genres) {
          const _g = new Genre();
          _g.genre_names = genre['name'];
          _g.genre_ids = genre['id'];
          this._genre.push(_g);
        }
      });

    this.fetchData(false);
  }

  fetchData(b: boolean) {
    if (this.firstRun === false) {
      if (b) {
        if (!(this.page + 1 < this.totalPages)) {
          this.page += 1;
        }
      } else if (!b) {
        if (this.page > 1) {
          this.page -= 1;
        }
      } else {
        this.page = 1;
      }
    }

    this.movies = [];

    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=7d87b01406d2be659dd0cb0017acf2db&page=' + (this.page).toString()
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // data.results = data.results.sort(data.results.vote_average);
        for (const movie of data.results) {
          // console.log(movie.title);
          const m = new Movie();
          m.name = movie.title;
          m.adult = movie.adult;
          m.desc = movie.overview;
          m.imgPath = movie.backdrop_path;
          m.id = movie.id;
          m.genres = movie.genre_ids;
          m.popularity = movie.vote_average;
          this.totalPages = movie.total_pages;
          this.movies.push(m);

          /**
            loop though the genres and through the movies, and check if the movie genre has a match with said the genre array. If that is the case, store the movie ID in that as well.
           **/
          for(let _g of this._genre) {
            for(let mg of m.genres) {
              if(mg === _g.genre_ids) {
                _g.movieid = m.id;
              }
            }
          }


        }
      });
    this.firstRun = false;
  }

}
