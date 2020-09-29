/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemujanjiComponent } from './temujanji.component';

describe('TemujanjiComponent', () => {
  let component: TemujanjiComponent;
  let fixture: ComponentFixture<TemujanjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemujanjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemujanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
