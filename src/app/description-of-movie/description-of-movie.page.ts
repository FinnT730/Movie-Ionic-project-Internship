import { Component, OnInit} from '@angular/core';
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
  public movieData: any[];
  public videos: string[] = [];

  /**
   * Init the 'this.data' with a empty array
   * @param activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) {
    this.movieData = [];
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
        this.movieData.push({
          name: data.title,
          description: data.overview,
          imgUrl: data.backdrop_path
        });
        this.MOVIE_NAME = data.title;
      });

    /*
      Get the video ID's for the movie (most of which are linked to Youtube at the end of the day, so that should be easy enough.)
     */
    fetch('https://api.themoviedb.org/3/movie/' + this.id + '/videos?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US')
      .then(result => result.json())
      .then(data => {
        // console.log(data);
        for(let dat of data.results) {
          // console.log(dat.key);
          // const url = "https://www.youtube.com/embed/{{dat}}?color=white&origin=https://google.com";
          // const url = '<iframe id="ytplayer" width="720" height="405"\n' +
          //   '                      src="https://www.youtube.com/embed/' + dat + '?color=white&origin=https://google.com"\n' +
          //   '                      frameborder="0" allowfullscreen> </iframe>';
          // this.videos.push(url);

          // let url = 'https://www.themoviedb.org/video/play?key=' + dat.key;
          //
          // this.videos.push(url);

          this.videos.push(dat);


          console.log(dat);

        }
        // this.videos.push(data.results);
      });


    console.log(this.videos);
  }


}
