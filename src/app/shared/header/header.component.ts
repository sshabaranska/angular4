import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    constructor(private authService: AuthService,
                private router: Router) {}

    ngOnInit () {}

    onLogout() {
        this.authService.unAuth();
        this.router.navigate(['/signin']);
    }
}
