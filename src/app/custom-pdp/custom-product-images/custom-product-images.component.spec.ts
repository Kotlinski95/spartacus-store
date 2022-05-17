import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductImagesComponent } from './custom-product-images.component';

describe('CustomProductImagesComponent', () => {
  let component: CustomProductImagesComponent;
  let fixture: ComponentFixture<CustomProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
