/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UjianComponent } from './ujian.component';

describe('UjianComponent', () => {
  let component: UjianComponent;
  let fixture: ComponentFixture<UjianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
