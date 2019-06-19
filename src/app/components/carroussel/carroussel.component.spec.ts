import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousselComponent } from './carroussel.component';

describe('CarrousselComponent', () => {
  let component: CarrousselComponent;
  let fixture: ComponentFixture<CarrousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrousselComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
