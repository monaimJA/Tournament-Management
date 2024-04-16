import { Component } from '@angular/core';
import {LoginService} from "../../../core/services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: LoginService,private router:Router) { }

  login(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe(success => {
      if (success) {
        this.router.navigateByUrl("/dashboard/players");
      } else {
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    });
  }
}
