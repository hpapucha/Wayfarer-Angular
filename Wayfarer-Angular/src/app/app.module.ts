import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { LondonComponent } from './cities/london/london.component';
import { ParisComponent } from './cities/paris/paris.component';
import {FormsModule} from '@angular/forms';
import { DumbledoreComponent } from './cities/paris/dumbledore/dumbledore.component';
import {HttpClientModule} from '@angular/common/http';
import { RonComponent } from './cities/paris/ron/ron.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    LondonComponent,
    ParisComponent,
    DumbledoreComponent,
    RonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
