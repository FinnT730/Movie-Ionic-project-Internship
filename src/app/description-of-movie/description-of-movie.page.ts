import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-description-of-movie',
  templateUrl: './description-of-movie.page.html',
  styleUrls: ['./description-of-movie.page.scss'],
})
export class DescriptionOfMoviePage implements OnInit {


  /**
   * Global data for the movie, that can be called from the html page, to display it.
   */

  public id = 0;
  public MOVIE_NAME = "";
  public data: any[];

  /**
   * Init the 'this.data' with a empty array
   * @param activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) {
    this.data = [];
  }

  /**
   * Use the build in override function to fetch the data for the most popular movies, and then put them in the array.
   */
  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    fetch('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US')
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.data.push({
          name: data.title,
          description: data.overview
        });
        this.MOVIE_NAME = data.title;
      });
  }


}
