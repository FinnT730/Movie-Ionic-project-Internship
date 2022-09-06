import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './movie';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss', './movie.css'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.folder == 'Finn') {
        fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=7d87b01406d2be659dd0cb0017acf2db'
        )
          .then((response) => response.json())
          .then((data) => {
            let dat = data;
            console.log(dat);
            for (let movie of dat.results) {
              // console.log(movie.title);
              let _m = new Movie();
              _m.name = movie.title;
              _m.adult = movie.adult;
              _m.desc = movie.overview;
              _m.imgPath = movie.backdrop_path;
              _m.id = movie.id;
              _m.genres = movie.genre_ids;
              _m.popularity = movie.popularity;
              this.movies.push(_m);
            }
          });
    }
  }
}
