import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleComponentComponent } from './sale-component.component';

describe('SaleComponentComponent', () => {
  let component: SaleComponentComponent;
  let fixture: ComponentFixture<SaleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
