import { ILoginService } from "./interfaces/login-service-interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "~/environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService implements ILoginService {
    baseUrl: string = environment.webapi_baseurl;
    signInRoute: string = environment.signInRoute;
    constructor(private httpClient: HttpClient) {

    }

    async login(userName: string, password: string): Promise<void> {
        try {
            await this.httpClient.post(`${this.baseUrl}/${this.signInRoute}`, { userName: userName, password: password }).toPromise();
            return;
        } catch (error) {
            throw error;
        }
    }

}