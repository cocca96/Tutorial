import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetails1Component } from './hero-details1.component';

describe('HeroDetails1Component', () => {
  let component: HeroDetails1Component;
  let fixture: ComponentFixture<HeroDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
