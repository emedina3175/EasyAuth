/**
 * Created by Hector on 9/22/2016.
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/login.service';
import { LoginViewModel } from '../view-models/login.view-model';
import { InputMaskModule } from 'primeng/primeng';

@Component({
    selector: 'login',
    templateUrl: './app/login/login.component.html',
    styleUrls: ['./app/login/login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private userService: UserService){ }

    ngOnInit(){ }

    model = new LoginViewModel();

    login(){
        this.userService.loginUser(this.model)
            .then(res => {
                //console.log(res);
            });
    }
}