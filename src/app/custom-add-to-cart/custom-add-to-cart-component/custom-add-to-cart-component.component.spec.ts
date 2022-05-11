import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddToCartComponentComponent } from './custom-add-to-cart-component.component';

describe('CustomAddToCartComponentComponent', () => {
  let component: CustomAddToCartComponentComponent;
  let fixture: ComponentFixture<CustomAddToCartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAddToCartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddToCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
