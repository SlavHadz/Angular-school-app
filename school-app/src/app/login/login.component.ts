import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  signInMode = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signUpOrSignIn() {
    this.signInMode ? this.authService.signIn(this.email, this.password) :
                      this.authService.signUp(this.email, this.password);
  }

  toggleSignInMode() {
    this.signInMode = !this.signInMode;
  }

}
