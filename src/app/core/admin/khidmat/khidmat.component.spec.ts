/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KhidmatComponent } from './khidmat.component';

describe('KhidmatComponent', () => {
  let component: KhidmatComponent;
  let fixture: ComponentFixture<KhidmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhidmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhidmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
