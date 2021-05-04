import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.css']
})
export class LondonComponent implements OnInit {
  commentName: string;
  divName = document.querySelector('.userName');
  divPost = document.querySelector('.post');
  filter = document.querySelector('.filteredComment');
  divTest: any;
  constructor() { }

  findComment(commentName){
    if (commentName === this.divName){
      this.divTest = document.createElement('div');
      this.divTest.innerText = this.divPost.innerHTML;
      this.filter.appendChild(this.divTest);
    }
    else{
      console.log("error");
    }
  }
  ngOnInit(): void {
  }

}
