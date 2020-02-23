import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'six', component: FirstComponent },
      { path: 'seven', component: SecondComponent },
      { path: 'third', component: ThirdComponent },
      { path: 'four', component: FourComponent },
      { path: 'five', component: FiveComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
