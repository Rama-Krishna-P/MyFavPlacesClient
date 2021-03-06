import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router"

@Injectable({ providedIn: 'root' })
export class RouterService {
    constructor(private router: RouterExtensions) {

    }

    navigate(commands: any[], clearHistory?: boolean) {
        this.router.navigate(commands, { clearHistory : clearHistory });
    }
}