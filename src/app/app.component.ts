import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-firebase-api';
  
  constructor(
    private auth : AuthService
  ) {
    auth.getUser().subscribe({
      next: (user) => console.log(user),
      error: (err) => console.log(err)
    })
  }
}
