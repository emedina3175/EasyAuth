/**
 * Created by HFGarcia on 2/11/16.
 */
export class RegisterViewModel {
    Id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    UserName: string;
    Password: string;
    ConfirmPassword: string;

    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public userName: string,
        public password: string,
        public confirmPassword: string
    ){
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.UserName = userName;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    };


}