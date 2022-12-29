import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit = (f : NgForm) => {
    const {email, password} = f.value;

    this.auth.signIn(email, password)
    .then((resp) => {
      this.router.navigateByUrl("/");
      this.toastr.success("SignIn Succesful!");
    })
    .catch((err) => {
      console.log(err.message);
      this.toastr.error("Something went wrong during signin! Please check console logs!");
    });
  }
  
}
