import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductImagesZoomComponent } from './custom-product-images-zoom.component';

describe('CustomProductImagesZoomComponent', () => {
  let component: CustomProductImagesZoomComponent;
  let fixture: ComponentFixture<CustomProductImagesZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductImagesZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductImagesZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
