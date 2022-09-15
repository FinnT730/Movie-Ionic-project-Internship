import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-description-of-tvshow',
  templateUrl: './description-of-tvshow.page.html',
  styleUrls: [/*'./description-of-tvshow.page.scss'*/],
})
export class DescriptionOfTvshowPage implements OnInit {

  public id = 0;
  public series: any[] = [];
  public videos_ids: string[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);


    fetch('https://api.themoviedb.org/3/tv/' + this.id + '?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US')
      .then(rep => rep.json())
      .then(data => {
        console.log(data);
        this.series.push(data);
      });


    fetch('https://api.themoviedb.org/3/tv/' + this.id + '/videos?api_key=7d87b01406d2be659dd0cb0017acf2db&language=en-US')
      .then(rep => rep.json())
      .then(data => {
        // console.log(data.results);
        this.videos_ids.push(data.results);
        console.log(data);
      });


  }

}
