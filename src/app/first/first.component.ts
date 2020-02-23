import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

import { Http , Response } from '@angular/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, AfterViewInit {
 

  ngAfterViewInit(): void {

    console.log("first loaded view checked");
// console.log("first page loaded");
    // (<any>window).ga('send', {
    //   'hitType': 'event',
    //   'timingCategory': 'firstcategory',
    //   'timingVar': 'firstlookup',
    //   'timingValue': 100000 ,
    //   'timingLabel': 'firtstimelabel'
    // });
  }
  imageSearch: any;
  constructor(private http: Http) { }

  ngOnInit(): void {
    const urlofApi= 'https://api.github.com/search/repositories?q=first';
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
