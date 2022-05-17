import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductZoomTriggerComponent } from './custom-product-zoom-trigger.component';

describe('CustomProductZoomTriggerComponent', () => {
  let component: CustomProductZoomTriggerComponent;
  let fixture: ComponentFixture<CustomProductZoomTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductZoomTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductZoomTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
