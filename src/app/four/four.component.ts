import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    // (<any>window).ga('send', {
    //   'hitType': 'event',
    //   'timingCategory': 'firstcategory',
    //   'timingVar': 'firstlookup',
    //   'timingValue': 4000 ,
    //   'timingLabel': 'firtstimelabel'
    // });
  }
  imageSearch: any;
  constructor(private http: Http) { }

  ngOnInit(): void {
    const urlofApi= 'https://api.github.com/search/repositories?q=four';
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
