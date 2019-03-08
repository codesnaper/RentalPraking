import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map:GoogleMap;
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap(){
    alert('Loading Map')
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };  
    this.map = GoogleMaps.create('map', mapOptions);
    alert(JSON.stringify(this.map))
  }

}
