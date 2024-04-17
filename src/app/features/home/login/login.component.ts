import { Component } from '@angular/core';
import {LoginService} from "../../../core/services/login/login.service";
import {Router} from "@angular/router";
import {LayoutService} from "../../../layout/service/app.layout.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: LoginService,private router:Router,
                public layoutService: LayoutService) { }

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
