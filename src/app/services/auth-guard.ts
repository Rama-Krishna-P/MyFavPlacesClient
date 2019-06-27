import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { TokenInterceptor } from "./token-interceptor";
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private tokenInterceptor: TokenInterceptor, private router: Router) {

    }

    canActivate(): boolean {
        // var key = CryptoJS.enc.Utf8.parse('123456$#@$^@1ERF');
        // var iv = CryptoJS.enc.Utf8.parse('123456$#@$^@1ERF');

        // var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InJrcCIsImV4cGlyZXMiOnRydWUsImlhdCI6MTU2MTYyMTIxMSwiZXhwIjoxNTYxNjIxMzkxfQ.mjnPjZvd4cBcX9iH2fsFiJ0-joNUFBIySsK0jl1UEOc'), key,
        //     {
        //         keySize: 128 / 8,
        //         iv: iv,
        //         mode: CryptoJS.mode.CBC,
        //         padding: CryptoJS.pad.Pkcs7
        //     });
        // console.log(encrypted.toString());

        // var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), key, {
        //     keySize: 128 / 8,
        //     iv: iv,
        //     mode: CryptoJS.mode.CBC,
        //     padding: CryptoJS.pad.Pkcs7
        // });

        // let test = decrypted.toString(CryptoJS.enc.Utf8);
        // console.log(`Test: ${test}`);

        if (this.tokenInterceptor.tokenAvailable()) {
            return true;
        }
        else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}