/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgihanComponent } from './agihan.component';

describe('AgihanComponent', () => {
  let component: AgihanComponent;
  let fixture: ComponentFixture<AgihanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgihanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
