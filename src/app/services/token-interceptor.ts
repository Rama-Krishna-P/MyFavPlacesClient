import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators"
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EncryptDecryptService } from "./encrypt-decrypt-service";

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private encryptDecrypt : EncryptDecryptService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('user');
        let decryptedToken = '';
        
        if(token) {
            decryptedToken = this.encryptDecrypt.get('123456$#@$^@1ERF', token);
        }

        let authReq = req.clone({ setHeaders: { Authorization: decryptedToken } })
        return next.handle(authReq).pipe(tap((response: any) => {
            if (response.headers && response.headers.get('authorization')) {
                let encryptedToken = this.encryptDecrypt.set('123456$#@$^@1ERF', response.headers.get('authorization'));
                localStorage.setItem('user', encryptedToken);
            }
        }),
            catchError((err: any, caught: any): any => {
                if (err.status === 401) {
                    this.router.navigate(['/login']);
                }
                else {
                    throwError(err);
                }
            })
        );
    }

    tokenAvailable(): boolean {
        return !!localStorage.getItem('user');
    }
}