define(["backbone","require"],function(){
    var Router = Backbone.Router.extend({
        routes: {
            "guidance":"guidance",
            "Loginphone":"Loginphone",
            "LoginPassword":"LoginPassword",
            "RegistrationPage":"RegistrationPage",
            "ModifyPassword":"ModifyPassword",
            "HomePage":"HomePage",
            "PublicAdvertis":"PublicAdvertis",
            "CoffersPage":"CoffersPage",
            "MinePage":"MinePage",
            "RepaymentPage":"RepaymentPage",
            "UnPayment":"UnPayment",
            "ImmediatePayment":"ImmediatePayment",
            "BankCardSettings":"BankCardSettings",
            "AuthenticationIdentityCard":"AuthenticationIdentityCard",
            "paymenting":"paymenting",
            "BorrowRecord":"BorrowRecord",
            "BorrowDetails":"BorrowDetails",
            "AddBankCard":"AddBankCard",
        },
        guidance:function () {
            require(["guidance"], function (guidance) {
                guidance.render();
            })
        },
        Loginphone:function () {
            require(["Loginphone"], function (Loginphone) {
                Loginphone.render();
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
        },
        BorrowRecord:function () {
            require(["BorrowRecord"], function (BorrowRecord) {
                BorrowRecord.render();
            })
        },
        BorrowDetails:function () {
            require(["BorrowDetails"], function (BorrowDetails) {
                BorrowDetails.render();
            })
        },
        AddBankCard:function () {
            require(["AddBankCard"], function (AddBankCard) {
                AddBankCard.render();
            })
        },

    });
    return new Router();
})
