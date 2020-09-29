/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RespondenComponent } from './responden.component';

describe('RespondenComponent', () => {
  let component: RespondenComponent;
  let fixture: ComponentFixture<RespondenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
