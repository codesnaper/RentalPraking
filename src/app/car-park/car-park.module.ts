import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CarMapComponent } from './car-map/car-map.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: CarMapComponent
      }
    ])
  ],
  declarations: [CarMapComponent,MapComponent],
  exports: [MapComponent,CarMapComponent]
})
export class CarParkModule { }
