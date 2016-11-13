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
 * Created by HFGarcia on 2/11/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._headersLogin = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    ;
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error || error);
    };
    ///For create a new user
    UserService.prototype.createUser = function (model) {
        return this.http
            .post('http://localhost:7622/api/Account/Register', JSON.stringify(model), { headers: this._headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ///For login
    UserService.prototype.loginUser = function (model) {
        var body = 'username=' + model.username + '&password=' + model.password + '&grant_type=password';
        return this.http
            .post('http://localhost:7622/Token', body, this._headersLogin)
            .toPromise()
            .then(function (res) {
            localStorage.setItem('tokenId', res.json().access_token);
            localStorage.setItem('userName', res.json().userName);
            console.log(res.json());
        })
            .catch(this.handleError);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=login.service.js.map