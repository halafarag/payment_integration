import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}
  sendToCib(data: any): Observable<any> {
    return this.http.post<any>(
      `https://admission.must.edu.eg/PaymentAPI/api/Payment/InitiateTuitionCheckoutCIB`,
      data
    );
  }

  sendPayMob(data: any): Observable<any> {
    return this.http.post<any>(
      `https://admission.must.edu.eg/PaymentAPI/api/Payment/InitiateTuitionCheckoutPaymob`,
      data
    );
  }
}
