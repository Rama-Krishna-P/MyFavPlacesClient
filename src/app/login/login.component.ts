import { Component } from "@angular/core";
import { LoginService } from "../services/login-service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: string = '';
    password: string = '';

    constructor(private loginService: LoginService,
                private router: Router) {

    }

    async login() {
       try {
           await this.loginService.login(this.userName, this.password);
           this.router.navigate(['/home']);
       } catch (error) {
           console.log(error);
       }
    }

}