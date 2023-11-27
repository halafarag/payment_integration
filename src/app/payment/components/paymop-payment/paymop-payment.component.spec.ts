import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymopPaymentComponent } from './paymop-payment.component';

describe('PaymopPaymentComponent', () => {
  let component: PaymopPaymentComponent;
  let fixture: ComponentFixture<PaymopPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymopPaymentComponent]
    });
    fixture = TestBed.createComponent(PaymopPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
