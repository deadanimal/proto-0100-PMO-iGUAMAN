/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SemakanComponent } from './semakan.component';

describe('SemakanComponent', () => {
  let component: SemakanComponent;
  let fixture: ComponentFixture<SemakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
