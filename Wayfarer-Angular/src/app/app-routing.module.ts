import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {LondonComponent} from './cities/london/london.component';
import {ParisComponent} from './cities/paris/paris.component';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent,
    children: [ // create the sub sections (children) for this route
      {
        path: 'london',
        component: LondonComponent
      },
      {
        path: 'paris',
        component: ParisComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
