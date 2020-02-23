import { Component, Inject, AfterViewChecked, AfterViewInit } from '@angular/core';

import {DOCUMENT, PlatformLocation} from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  // ngAfterViewChecked(): void {
  //   console.log("parentent loaded view checked");
  // }
  // ngAfterViewInit(): void {
  //   console.log("parentent loaded");
  // }
  title = 'demo2';
  constructor( @Inject(DOCUMENT) private doc: any,
  private router: Router){
    this.setGoogleAnalyticsScript();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const urlList = event.urlAfterRedirects.split('?');
          (<any>window).ga('set', 'page', urlList[0]);
          (<any>window).ga('send', 'pageview');
          (<any>window).ga('send', {
            'hitType': 'event',
            'timingCategory': 'firstcategory',
            'timingVar': 'firstlookup',
            'timingValue': 4000 ,
            'timingLabel': 'firtstimelabel'
          });
      }
    });
  }

  private setGoogleAnalyticsScript() {
    const s = this.doc.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = `(function (i, s, o, g, r, a, m) {
     i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
     })(window, document, 'script', 'https://www.google-analytics.com/analytics_debug.js', 'ga');

   ga('create','UA-141934315-1',  {'siteSpeedSampleRate': 100})`;
    const head = this.doc.getElementsByTagName('head')[0];
    head.appendChild(s);
  }
}
