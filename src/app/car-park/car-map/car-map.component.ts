import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/modal/header';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-car-map',
  templateUrl: './car-map.component.html',
  styleUrls: ['./car-map.component.scss'],
})
export class CarMapComponent implements OnInit {
  header: Header = new Header();
  constructor() { }

  ngOnInit() {
    this.header.title="parking search";
    this.header.iconFirst="apps";
    this.header.iconLast="apps";
  }

}
