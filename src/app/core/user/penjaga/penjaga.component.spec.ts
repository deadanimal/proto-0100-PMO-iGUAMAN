/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PenjagaComponent } from './penjaga.component';

describe('PenjagaComponent', () => {
  let component: PenjagaComponent;
  let fixture: ComponentFixture<PenjagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
