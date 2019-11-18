import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuChoice1() {
    console.log("menu choice 1 has been selected");
  }

  menuChoice2() {
    console.log("menu choice 2 has been selected");
  }

  menuChoice3() {
    console.log("menu choice 3 has been selected");
  }

}
