import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from './movie';

@Component({
  selector: 'app-best-movie',
  templateUrl: './best-movie.component.html',
  styleUrls: ['best-movie.component.scss', '../folder/folder.page.scss', './movie.css'],
})

export class BestMovieComponent implements OnInit {


  public movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=7d87b01406d2be659dd0cb0017acf2db'
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
          this.movies.push(m);
        }
      });

  }

}
