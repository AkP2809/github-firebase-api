import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit = (f : NgForm) => {
    const {email, password} = f.value;

    this.auth.signUp(email, password)
    .then((resp) => {
      this.router.navigateByUrl("/");
      this.toastr.success("SignUp Succesful!");
    })
    .catch((err) => {
      console.log(err.message);
      this.toastr.error("Something went wrong during signup! Please check console logs!");
    });
  }

}
