/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KahwinComponent } from './kahwin.component';

describe('KahwinComponent', () => {
  let component: KahwinComponent;
  let fixture: ComponentFixture<KahwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KahwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
