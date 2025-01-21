import { Component } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  //constructor(public authService: AuthService, private router: Router) {}

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }
}
