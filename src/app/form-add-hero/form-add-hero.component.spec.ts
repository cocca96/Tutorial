import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddHeroComponent } from './form-add-hero.component';

describe('FormAddHeroComponent', () => {
  let component: FormAddHeroComponent;
  let fixture: ComponentFixture<FormAddHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
