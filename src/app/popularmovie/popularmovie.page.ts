import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from './movie';
import {ActivatedRoute, Router} from '@angular/router';
import Swiper from 'swiper';

import {Genre} from './Genre';
import {ngDebug} from "@angular/cli/src/utilities/environment-options";

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.page.html',
  styleUrls: [/*'./popularmovie.page.scss'*/],
  encapsulation: ViewEncapsulation.Emulated
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
  public firstRun = true;
  public _genre: Genre[] = [];

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

  fetchGenres() {
    this._genre = [];
    /**
     * Get the genres and put them into the array for sorting the movies into the right genre.
     */
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US')
      .then(response => response.json())
      .then(genres => {

        console.log(genres);

        for (let gen of genres.genres) {
          const g: Genre = new Genre();

          g.genre_names = gen.name;
          g.genre_ids = gen.id;

          this._genre.push(g);
        }


        for (let movie of this.movies) {
          for (let gen of genres.genres) {
            movie.genres.forEach((mg) => {
              if (mg === gen.id) {
                console.log("movie: %s, with genre %i, is linked with genre: %s", movie.name, mg, gen.name);
                this._genre.find((num) => {
                  return num.genre_ids === mg;
                }).movieid.push(movie.id);
                this.movies.find((m) => m === movie).genres.find((i) => i === mg);

              }
            });
          }
        }


        // genres.genres.foreach((genre) => {
        //   if (genre.id == movie.id) {
        //     genre.push(movieid);
        //   }
        // })


        // for (let movie of this.movies) {
        //   for (let mg of movie.genres) {
        //     let _index = 0;
        //     for (let g of genres.genres) {
        //
        //       this._genre.find((gg) => {
        //         movie.
        //       })
        //
        //       if(true) {
        //         let gen = new Genre();
        //         gen.genre_names = g.name;
        //         gen.genre_ids = g.id;
        //         if (mg === g.id) {
        //           gen.movieid.push(movie.id);
        //           movie.genres[_index] = null;
        //           this._genre.push(gen);
        //         }
        //       }
        //     }
        //     _index += 1;
        //   }
        // }


        // for(let movie of this.movies) {
        //   for (let g of genres.genres) {
        //     let _g: Genre = g;
        //     movie.genres.forEach((gid) => {
        //       if(gid === _g.genre_ids) {
        //         this._genre.forEach((q) => {
        //           if(!q.movieid.find((id) => movie.id)) {
        //             const genre: Genre = new Genre();
        //             genre.genre_ids = _g.genre_ids;
        //             genre.genre_names = _g.genre_names;
        //             genre.movieid.push(movie.id);
        //             this._genre.push(genre);
        //           }
        //         });
        //       }
        //     });
        //   }
        // }


        // for(let movie of this.movies) {
        //   let run = true;
        //
        //   for(let genre of this._genre) {
        //     for(let gen of movie.genres) {
        //       if(genre.movieid.find((n) => n == gen)) {
        //         run = false;
        //       } else {
        //         run = true;
        //       }
        //     }
        //   }
        //
        //
        //   if(run === false) {
        //     for(let mg of movie.genres) {
        //       for(let gen of this._genre) {
        //         if(gen.movieid.find((q) => q == mg)) {
        //             console.log(gen.movieid);
        //         }
        //       }
        //     }
        //   }
        // }

        // genres.genres.forEach((g) => {
        //   debugger;
        //   console.log(g);
        //   let gen = new Genre();
        //   gen.genre_names = g.name;
        //   gen.genre_ids = g.id;
        //   for (let mid of movie.genres) {
        //     if (mid === g.id) {
        //       gen.movieid.push(mid);
        //     }
        //   }
        //   this._genre.push(gen);
        // });

        // this.movies.forEach((movie) => {
        //   genres.genres.foreach((genre) => {
        //     if (genre.id == movie.id) {
        //       // this._genre.push() push(movie.id);
        //     }
        //   })
        // });

        // genres.genres.forEach((gen) => {
        //   let _g = new Genre();
        //   _g.genre_names = gen.name;
        //   _g.genre_ids = gen.id;
        //   this.movies.forEach((mov) => {
        //     mov.genres.forEach((_gid) => {
        //       if(gen.id === _gid) {
        //         // console.log("movie name = %s, movie_genre id = %i, and the genre_id = %i, the genre name = %s",
        //         //   mov.name, _gid, gen.id, gen.name);
        //         _g.movieid.push(_gid);
        //         mov.genres[_gid] = null;
        //       }
        //     });
        //   });
        //
        //   this._genre.push(_g);
        // });


        // console.log(genres);
        //   for (const genre of genres.genres) {
        //     const _g = new Genre();
        //     _g.genre_names = genre['name'];
        //     _g.genre_ids = genre['id'];
        //
        //     this.movies.forEach((movie) => {
        //       for(let i = 0; i < movie.genres.length; i++) {
        //         let gi = movie.genres[i];
        //         if(gi === _g.genre_ids) {
        //           _g.movieid.push(gi);
        //           movie.genres[i] = null;
        //         }
        //       }
        //     });
        //
        //
        //     this._genre.push(_g);
        //   }
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


    console.log(this.movies);

    this.firstRun = false;
    this.fetchGenres();
  }

}
