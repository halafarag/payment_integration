import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const redirectUrl = params.get('url');
      if (redirectUrl) {
        console.log('Redirecting to:', redirectUrl);
        window.location.href = decodeURIComponent(redirectUrl);
      } else {
        console.error('No redirect URL provided');
        this.router.navigate(['/home']);
      }
    });
  }
}
