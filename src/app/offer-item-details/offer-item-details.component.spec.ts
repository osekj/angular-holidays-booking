import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferItemDetailsComponent } from './offer-item-details.component';

describe('OfferItemDetailsComponent', () => {
  let component: OfferItemDetailsComponent;
  let fixture: ComponentFixture<OfferItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
