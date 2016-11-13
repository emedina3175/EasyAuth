"use strict";
/**
 * Created by HFGarcia on 2/11/16.
 */
var RegisterViewModel = (function () {
    function RegisterViewModel(id, firstName, lastName, email, userName, password, confirmPassword) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.UserName = userName;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    }
    ;
    return RegisterViewModel;
}());
exports.RegisterViewModel = RegisterViewModel;
//# sourceMappingURL=register-view-model.js.map