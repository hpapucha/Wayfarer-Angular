import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paris',
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.css']
})
export class ParisComponent implements OnInit {
  public commentsArray: any = [
    {id: 1, avatar: 'assets/images/avatar.jpg', name: 'Dumbledore', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                     dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet. Malesuada bibendum arcu vitae elementum.'},
    {id: 2, avatar: 'assets/images/avatar.jpg', name: 'Ron', text: 'Malesuada bibendum arcu vitae elementum.\n' +
        '          Lorem ipsum dolor sit amet. Lacus luctus accumsan tortor posuere ac ut.'},
    {id: 3, avatar: 'assets/images/avatar.jpg', name: 'Harry', text: 'Lorem ipsum dolor sit amet. Lacus luctus accumsan tortor posuere ac ut.'},
    {id: 4, avatar: 'assets/images/avatar.jpg', name: 'Hermione', text: 'Cursus eget nunc scelerisque viverra mauris. Tellus orci ac auctor augue.\n' +
        '          Et malesuada fames ac turpis egestas sed tempus urna et.'},
  ];
  account = {
    name: ''
  };
  currentAccount = null;
  onChanges(): void {
    this.currentAccount = this.commentsArray.find(x => x.name === this.account.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
