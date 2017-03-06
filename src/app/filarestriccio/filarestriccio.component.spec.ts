/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilarestriccioComponent } from './filarestriccio.component';

describe('FilarestriccioComponent', () => {
  let component: FilarestriccioComponent;
  let fixture: ComponentFixture<FilarestriccioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilarestriccioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilarestriccioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
