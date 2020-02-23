import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    // (<any>window).ga('send', {
    //   'hitType': 'event',
    //   'timingCategory': 'firstcategory',
    //   'timingVar': 'firstlookup',
    //   'timingValue': 5000 ,
    //   'timingLabel': 'firtstimelabel'
    // });
  }
  imageSearch: any;
  constructor(private http: Http) { }

  ngOnInit(): void {
    const urlofApi= 'https://api.github.com/search/repositories?q=five';
    this.http.get(urlofApi)
    .subscribe(
      (res: Response) => 
        {
          const searchResult = res.json();  
          console.log(searchResult);
          this.imageSearch = searchResult.items;
          //console.log(this.imageSearch.owner.avatar_url);
        }
    );
  }

}
