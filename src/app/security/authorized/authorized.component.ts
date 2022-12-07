import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorized',
  template: '',
})
export class AuthorizedComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    let params = new URLSearchParams(window.location.search)
    let code = params.get('code');

    if (code)
      this.authService.getToken(code)
        .then(token => {
          this.authService.saveToLocalStorage(token);
          this.router.navigate(['/tickets']);
        });
  }

}
