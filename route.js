define(["backbone","require"],function(){
    var Router = Backbone.Router.extend({
        routes: {
            "guidance":"guidance",
            "loginphone":"loginphone",
            "LoginPassword":"LoginPassword",
            "RegistrationPage":"RegistrationPage",
            "ModifyPassword":"ModifyPassword",
            "HomePage":"HomePage",
            "PublicFooter":"PublicFooter",
            "PublicAdvertis":"PublicAdvertis",
            "CoffersPage":"CoffersPage",
            "MinePage":"MinePage",
            "RepaymentPage":"RepaymentPage",
            "UnPayment":"UnPayment",
            "ImmediatePayment":"ImmediatePayment",
            "BankCardSettings":"BankCardSettings",
            "AuthenticationIdentityCard":"AuthenticationIdentityCard",
            "paymenting":"paymenting",

        },
        guidance:function () {
            require(["guidance"], function (guidance) {
                guidance.render();
            })
        },
        loginphone:function () {
            require(["loginphone"], function (LoginPhone) {
                LoginPhone.render();
            })
        },
        LoginPassword:function () {
            require(["LoginPassword"], function (LoginPassword) {
                LoginPassword.render();
            })
        },
        RegistrationPage:function () {
            require(["RegistrationPage"], function (RegistrationPage) {
                RegistrationPage.render();
            })
        },
        ModifyPassword:function () {
            require(["ModifyPassword"], function (ModifyPassword) {
                ModifyPassword.render();
            })
        },
        HomePage:function () {
            require(["HomePage"], function (HomePage) {
                HomePage.render();
            })
        },
        PublicFooter:function () {
            require(["PublicFooter"], function (PublicFooter) {
                PublicFooter.render();
            })
        },
        PublicAdvertis:function () {
            require(["PublicAdvertis"], function (PublicAdvertis) {
                PublicAdvertis.render();
            })
        },
        CoffersPage:function () {
            require(["CoffersPage"], function (CoffersPage) {
                CoffersPage.render();
            })
        },
        MinePage:function () {
            require(["MinePage"], function (MinePage) {
                MinePage.render();
            })
        },
        RepaymentPage:function () {
            require(["RepaymentPage"], function (RepaymentPage) {
                RepaymentPage.render();
            })
        },
        UnPayment:function () {
            require(["UnPayment"], function (UnPayment) {
                UnPayment.render();
            })
        },
        ImmediatePayment:function () {
            require(["ImmediatePayment"], function (ImmediatePayment) {
                ImmediatePayment.render();
            })
        },
        BankCardSettings:function () {
            require(["BankCardSettings"], function (BankCardSettings) {
                BankCardSettings.render();
            })
        },
        AuthenticationIdentityCard:function () {
            require(["AuthenticationIdentityCard"], function (AuthenticationIdentityCard) {
                AuthenticationIdentityCard.render();
            })
        },
        paymenting:function () {
            require(["paymenting"], function (paymenting) {
                paymenting.render();
            })
        }

    });
    return new Router();
})
