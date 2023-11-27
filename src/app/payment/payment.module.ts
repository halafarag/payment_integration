import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CibPaymentComponent } from './components/cib-payment/cib-payment.component';
import { PaymopPaymentComponent } from './components/paymop-payment/paymop-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { FailComponent } from './components/fail/fail.component';
import { LottieModule } from 'ngx-lottie';
import { HttpClientModule } from '@angular/common/http';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cib', component: CibPaymentComponent },
  { path: 'paymob', component: PaymopPaymentComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'fail', component: FailComponent },
  { path: 'paymob/:url', component: RedirectComponent },
  { path: 'cib/:url', component: RedirectComponent },
];
export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent,
    CibPaymentComponent,
    PaymopPaymentComponent,
    SuccessComponent,
    FailComponent,
    CustomInputComponent,
    RedirectComponent,
    CustomCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    HttpClientModule,
  ],
  exports: [HomeComponent],
})
export class PaymentModule {}
