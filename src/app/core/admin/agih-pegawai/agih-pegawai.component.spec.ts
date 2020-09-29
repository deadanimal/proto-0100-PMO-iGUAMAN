/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgihPegawaiComponent } from './agih-pegawai.component';

describe('AgihPegawaiComponent', () => {
  let component: AgihPegawaiComponent;
  let fixture: ComponentFixture<AgihPegawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgihPegawaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgihPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
