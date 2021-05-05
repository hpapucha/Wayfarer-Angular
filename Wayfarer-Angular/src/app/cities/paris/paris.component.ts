import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-paris',
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.css']
})
export class ParisComponent implements OnInit {
  zip: string;
  weather: any;
  searchSubject = new Subject();
  public commentsArray: any = [
    {id: 1, avatar: 'assets/images/dumbledore.jpg', name: 'Dumbledore', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                     dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet. Malesuada bibendum arcu vitae elementum.'},
    {id: 2, avatar: 'assets/images/ron.jpg', name: 'Ron', text: 'Malesuada bibendum arcu vitae elementum.\n' +
        '          Lorem ipsum dolor sit amet. Lacus luctus accumsan tortor posuere ac ut.'},
    {id: 3, avatar: 'assets/images/harry.jpg', name: 'Harry', text: 'Lorem ipsum dolor sit amet. Lacus luctus accumsan tortor posuere ac ut.'},
    {id: 4, avatar: 'assets/images/hermione.jpg', name: 'Hermione', text: 'Cursus eget nunc scelerisque viverra mauris. Tellus orci ac auctor augue.\n' +
        '          Et malesuada fames ac turpis egestas sed tempus urna et.'},
  ];
  account = {
    name: ''
  };
  currentAccount = null;
  onChanges(): void {
    this.currentAccount = this.commentsArray.find(x => x.name === this.account.name);
  }

  constructor(private http: HttpClient) {
  }

  findWeather(zip) {
    this.searchSubject.next(zip);
  }

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(1000))
      .subscribe(zip => {
        this.http
          .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
          .subscribe(response => this.weather = response);
      });
  }

}
