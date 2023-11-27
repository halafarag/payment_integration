import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymop-payment',
  templateUrl: './paymop-payment.component.html',
  styleUrls: ['./paymop-payment.component.scss'],
})
export class PaymopPaymentComponent {
  response: any;

  constructor(
    private fb: FormBuilder,
    private payService: PaymentService,
    private router: Router
  ) {}

  paymobForm = this.fb.group({
    id: ['2000050000', Validators.required],
    tuitionAmount: ['', [Validators.required]],
    type: ['', [Validators.required]],
  });

  pay() {
    const data = this.paymobForm.value;
    console.log(data);

    this.payService.sendPayMob(data).subscribe((res) => {
      console.log(res);
      this.response = res.response;
      localStorage.setItem('refNumber', this.response);
      console.log(this.response);
      // this.router.navigate(['paymob', this.response]);
      this.router.navigate(['success']);
    });
  }
}
