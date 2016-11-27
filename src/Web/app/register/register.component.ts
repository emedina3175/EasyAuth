/**
 * Created by Hector on 9/22/2016.
 */
import { Component, OnInit } from '@angular/core';
import { RegisterViewModel } from '../view-models/register-view-model';
import { UserService } from '../services/login.service';

@Component({
    selector: 'register',
    templateUrl: './app/register/register.component.html',
    styleUrls: ['./app/login/login.component.css']
})

export class RegisterComponent implements OnInit {
    model = new RegisterViewModel('',
        'Hector',
        'Garcia',
        'hectorglara@outlook.com',
        'hfgarcia',
        'Abcd*1234',
        'Abcd*1234');

    constructor(private userService: UserService){ };

    ngOnInit(){ };

    addUser(){
        this.userService.createUser(this.model)
            .then(result => {
                console.log(result);
            });
    }
}