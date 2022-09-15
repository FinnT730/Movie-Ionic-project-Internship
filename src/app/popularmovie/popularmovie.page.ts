import { Component, OnInit } from '@angular/core';
import {Movie} from './movie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.page.html',
  styleUrls: [/*'./popularmovie.page.scss'*/],
})
export class PopularmoviePage implements OnInit {

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
  ngOnInit() {

    this.fetchData(false);
  }

  fetchData(b: boolean) {
    if(this.firstRun === false) {
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
      "https://api.themoviedb.org/3/movie/popular?api_key=7d87b01406d2be659dd0cb0017acf2db&page=" + (this.page).toString()
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (const movie of data.results) {
          // console.log(movie.title);
          const m = new Movie();
          m.name = movie.title;
          m.adult = movie.adult;
          m.desc = movie.overview;
          m.imgPath = movie.backdrop_path;
          m.id = movie.id;
          m.genres = movie.genre_ids;
          m.popularity = movie.popularity;
          this.totalPages = movie.total_pages;
          this.movies.push(m);
        }
      });
    this.firstRun = false;
  }

}
