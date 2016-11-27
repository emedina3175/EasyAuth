/**
 * Created by HFGarcia on 2/11/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'easy-auth',
    template: `
        <nav>
            <a routerLink="/login">Login</a>
            <a routerLink="/register">Register</a>
        </nav>
        <router-outlet></router-outlet>
   `
})
export class AppComponent {
    title = 'EasyAuth v1.0';
}