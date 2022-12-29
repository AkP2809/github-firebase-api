import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email : string | null | undefined = null;

  constructor(
    private auth : AuthService,
    private router : Router,
    private toastr : ToastrService
  ) { 
    this.auth.getUser().subscribe({
      next: (user) => this.email = user?.email
    });
  }

  ngOnInit(): void {
  }

  async handleSignOut() {
    try {
      const resp = this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Signed out successfully! Please log-in again to continue!");

      this.email = null;
    } catch (error) {
      this.toastr.error("Couldn't sign out the user!");
    }
  }

}
