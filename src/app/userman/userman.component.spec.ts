/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsermanComponent } from './userman.component';

describe('UsermanComponent', () => {
  let component: UsermanComponent;
  let fixture: ComponentFixture<UsermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
