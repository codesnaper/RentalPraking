import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../modal/advertisement';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private advertisement:Advertisement = new Advertisement();
  private userConfirm: boolean;

  ngOnInit(){
    this.advertisement = JSON.parse(localStorage.getItem('advertisement'));
    alert(JSON.stringify(this.advertisement))
  }
  startAdvertisement(){
    this.advertisement.advId="###";
    localStorage.setItem("advertisement",JSON.stringify(this.advertisement));
  }
}
