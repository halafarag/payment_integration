import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PaymentModule } from './payment/payment.module';
import { LottieModule } from 'ngx-lottie';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PaymentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LottieModule],
})
export class AppModule {}
