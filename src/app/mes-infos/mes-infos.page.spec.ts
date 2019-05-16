import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesInfosPage } from './mes-infos.page';

describe('MesInfosPage', () => {
  let component: MesInfosPage;
  let fixture: ComponentFixture<MesInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesInfosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
