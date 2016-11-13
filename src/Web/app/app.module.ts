/**
 * Created by Hector on 9/22/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//Services
import { UserService } from './services/login.service';

//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { InputMaskModule } from 'primeng/primeng';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InputMaskModule
    ],
    declarations:
        [
            LoginComponent,
            RegisterComponent,
            AppComponent
        ],
    bootstrap: [AppComponent],
    providers: [
        UserService
    ]
})

export class AppModule {
}
