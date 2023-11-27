import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  refNumber: string;
  options: AnimationOptions = {
    path: 'assets/imges/success_json.json',
  };
  constructor() {
    this.refNumber = localStorage.getItem('refNumber')!;
  }
}
