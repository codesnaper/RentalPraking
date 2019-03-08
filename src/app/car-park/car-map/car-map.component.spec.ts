import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMapPage } from './car-map.page';

describe('CarMapPage', () => {
  let component: CarMapPage;
  let fixture: ComponentFixture<CarMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
