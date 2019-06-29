import { Component } from "@angular/core";
import { LoginService } from "../services/login-service";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { RouterService } from "../services/router-service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: string = '';
    password: string = '';

    constructor(private loginService: LoginService,
        private router: RouterService) {

    }

    async login() {
        try {
            await this.loginService.login(this.userName, this.password);
            //this.routerExtensions.navigate(['/home'], { clearHistory: true });
            this.router.navigate(['/home'], true);
        } catch (error) {
            console.log(error);
        }
    }

}