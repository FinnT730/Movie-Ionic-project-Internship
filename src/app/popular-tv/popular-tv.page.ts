import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.page.html',
  styleUrls: [/*'./popular-tv.page.scss'*/],
})
export class PopularTvPage implements OnInit {
  /**
   * Array to hold the info of the movies.
   */
  public series: any[] = [];
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

    this.series = [];

    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US&page=" + (this.page).toString()
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (const serie of data.results) {
          // console.log(serie);
          this.series.push(serie);
        }
      });
    this.firstRun = false;
  }
}
