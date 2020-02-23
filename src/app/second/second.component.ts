import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    (<any>window).ga('send', {
      'hitType': 'event',
      'timingCategory': 'secondcategory',
      'timingVar': 'secondlookup',
      'timingValue': 20000 ,
      'timingLabel': 'secondtimelabel'
    });
  }
  imageSearch: any;
  constructor(private http: Http) { }

  ngOnInit(): void {
    const urlofApi= 'https://api.github.com/search/repositories?q=second';
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
