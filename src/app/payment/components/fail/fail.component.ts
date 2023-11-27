import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss'],
})
export class FailComponent {
  options: AnimationOptions = {
    path: 'assets/imges/fail.json',
  };
}
