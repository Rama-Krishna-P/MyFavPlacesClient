import { Injectable } from "@angular/core";
import { getString, setString } from "tns-core-modules/application-settings"

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
    getToken(): string {
        return getString('user');
        //return this.token;
    }

    setToken(token: string) {
        setString('user', token);
        //this.token = token;
    }
}