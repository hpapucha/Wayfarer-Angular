import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { LondonComponent } from './cities/london/london.component';
import { ParisComponent } from './cities/paris/paris.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    LondonComponent,
    ParisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
