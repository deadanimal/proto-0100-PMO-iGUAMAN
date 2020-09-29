/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BayaranComponent } from './bayaran.component';

describe('BayaranComponent', () => {
  let component: BayaranComponent;
  let fixture: ComponentFixture<BayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
