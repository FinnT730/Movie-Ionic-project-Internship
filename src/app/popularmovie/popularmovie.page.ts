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

  /**
   * Array to hold the info of the movies.
   */
  public movies: Movie[] = [];
  public page = 1;
  public totalPages = 0;
  private firstRun = true;
  private _genre: Genre[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  /**
   * Use the build in override function to fetch the data for the most popular movies, and then put them in the array.
   */
  async ngOnInit() {

    this.fetchData(false);
    // this.fetchGenres();
    console.log(this._genre);

  }

  async fetchGenres() {
    this._genre = [];
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

          for(let _m of this.movies) {
            for(let _mg of _m.genres) {
              if(genre['id'] == _mg) {
                const num: number = _m.id;
                _g.movieid.push(num);
              }
            }
          }

          this._genre.push(_g);
        }
      });

    console.log(this._genre);
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
        }
      });


    // for(let i = 1; i <= 20; i++) {
    //   fetch(
    //     'https://api.themoviedb.org/3/movie/popular?api_key=7d87b01406d2be659dd0cb0017acf2db&page=' + (i).toString()
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       // data.results = data.results.sort(data.results.vote_average);
    //       for (const movie of data.results) {
    //         // console.log(movie.title);
    //         const m = new Movie();
    //         m.name = movie.title;
    //         m.adult = movie.adult;
    //         m.desc = movie.overview;
    //         m.imgPath = movie.backdrop_path;
    //         m.id = movie.id;
    //         m.genres = movie.genre_ids;
    //         m.popularity = movie.vote_average;
    //         this.totalPages = movie.total_pages;
    //         this.movies.push(m);
    //       }
    //     });
    // }

    this.firstRun = false;
    this.fetchGenres().then(r => null);
  }

}
