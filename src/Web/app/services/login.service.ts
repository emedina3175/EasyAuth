/**
 * Created by HFGarcia on 2/11/16.
 */
import { Injectable }     from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { RegisterViewModel } from '../view-models/register-view-model';
import { LoginViewModel } from '../view-models/login.view-model';

@Injectable()
export class UserService {
    private _headersLogin = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    private _headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    constructor(private http: Http){ };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error || error);
    }

    ///For create a new user
    public createUser(model: RegisterViewModel): Promise<RegisterViewModel> {
        return this.http
            .post('http://localhost:7622/api/Account/Register', JSON.stringify(model), {headers: this._headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    ///For login
    public loginUser(model: LoginViewModel): Promise<any> {
        let body = 'username=' + model.username + '&password=' + model.password + '&grant_type=password';

        return this.http
            .post('http://localhost:7622/Token', body, this._headersLogin)
            .toPromise()
            .then(res => {
                localStorage.setItem('tokenId', res.json().access_token);
                localStorage.setItem('userName', res.json().userName);

                console.log(res.json());
            })
            .catch(this.handleError);
    }

}