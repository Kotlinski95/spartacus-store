import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductZoomDialogComponent } from './custom-product-zoom-dialog.component';

describe('CustomProductZoomDialogComponent', () => {
  let component: CustomProductZoomDialogComponent;
  let fixture: ComponentFixture<CustomProductZoomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductZoomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductZoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
