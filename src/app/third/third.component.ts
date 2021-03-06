import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit , AfterViewInit {
  ngAfterViewInit(): void {
    console.log("third page loaded");
    // (<any>window).ga('send', {
    //   'hitType': 'event',
    //   'timingCategory': 'thirdcategory',
    //   'timingVar': 'thirdlookup',
    //   'timingValue': 300000 ,
    //   'timingLabel': 'thirdstimelabel'
    // });
  }
  imageSearch: any;
  constructor(private http: Http) { }

  ngOnInit(): void {
    const urlofApi= 'https://api.github.com/search/repositories?q=third';
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
