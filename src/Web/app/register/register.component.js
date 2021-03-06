"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Hector on 9/22/2016.
 */
var core_1 = require('@angular/core');
var register_view_model_1 = require('../view-models/register-view-model');
var login_service_1 = require('../services/login.service');
var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.model = new register_view_model_1.RegisterViewModel('', 'Hector', 'Garcia', 'hectorglara@outlook.com', 'hfgarcia', 'Abcd*1234', 'Abcd*1234');
    }
    ;
    RegisterComponent.prototype.ngOnInit = function () { };
    ;
    RegisterComponent.prototype.addUser = function () {
        this.userService.createUser(this.model)
            .then(function (result) {
            console.log(result);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './app/register/register.component.html',
            styleUrls: ['./app/login/login.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map