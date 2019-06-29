import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class RouterService {
    constructor(private router: Router) {

    }

    navigate(commands: any[], clearHistory?: boolean) {
        this.router.navigate(commands, { replaceUrl: clearHistory });
    }
}