import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMoreDetailsComponent } from './hero-more-details.component';

describe('HeroMoreDetailsComponent', () => {
  let component: HeroMoreDetailsComponent;
  let fixture: ComponentFixture<HeroMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
