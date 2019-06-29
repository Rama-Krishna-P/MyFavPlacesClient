import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
    getToken() : string{
        // let token = localStorage.getItem('user');
        return localStorage.getItem('user');
    }

    setToken(token: string) {
        localStorage.setItem('user', token);
    }
}