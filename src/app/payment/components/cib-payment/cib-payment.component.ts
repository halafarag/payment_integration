import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cib-payment',
  templateUrl: './cib-payment.component.html',
  styleUrls: ['./cib-payment.component.scss'],
})
export class CibPaymentComponent implements OnInit {
  redirectPage!: any;
  constructor(
    private fb: FormBuilder,
    private payService: PaymentService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  cibForm = this.fb.group({
    id: ['2000050000', Validators.required],
    tuitionAmount: ['', [Validators.required]],
    successURL: ['http://localhost:4200/success'],
    failURL: ['http://localhost:4200/success'],
  });

  pay() {
    const data = this.cibForm.value;
    this.payService.sendToCib(data).subscribe((data) => {
      this.redirectPage = data.response;
      this.router.navigate(['cib', this.redirectPage]);
      // window.open(`${this.redirectPage}`, '_blank');
    });
  }
}
