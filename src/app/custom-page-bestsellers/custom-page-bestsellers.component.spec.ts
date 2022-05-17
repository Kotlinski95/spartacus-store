import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPageBestsellersComponent } from './custom-page-bestsellers.component';

describe('CustomPageBestsellersComponent', () => {
  let component: CustomPageBestsellersComponent;
  let fixture: ComponentFixture<CustomPageBestsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPageBestsellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPageBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
