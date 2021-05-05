import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dumbledore',
  templateUrl: './dumbledore.component.html',
  styleUrls: ['./dumbledore.component.css']
})
export class DumbledoreComponent implements OnInit {

  constructor(private location: Location)
  {}

  backClicked(): void {
    this.location.back();
  }
  ngOnInit(): void {
  }

}
