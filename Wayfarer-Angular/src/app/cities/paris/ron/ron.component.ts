import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ron',
  templateUrl: './ron.component.html',
  styleUrls: ['./ron.component.css']
})
export class RonComponent implements OnInit {

  constructor(private location: Location)
  {}

  backClicked(): void {
    this.location.back();
  }
  ngOnInit(): void {
  }

}
