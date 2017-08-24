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
            "share":"share",
            "CreditCoffers":"CreditCoffers",
            "HelpCenter":"HelpCenter",
            "configuration":"configuration",
            "InformList":"InformList",
            "InAudit":"InAudit",
            "FailAudit":"FailAudit",
            "SuccessAudit":"SuccessAudit",
            "InformDetails":"InformDetails",
            "LoanPage":"LoanPage",
            "InLoan":"InLoan",
            "AuthenticationInformation":"AuthenticationInformation",
            "AuthenticationPhoneNumber":"AuthenticationPhoneNumber",
            "AuthenticationSesameScore":"AuthenticationSesameScore",
            "ContactInformation":"ContactInformation",
            "JobInformation":"JobInformation",
            "OperatorAgreement":"OperatorAgreement",
            "RegistrationAgreement":"RegistrationAgreement",
            "LoanAgreement":"LoanAgreement",


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
        share:function () {
            require(["share"], function (share) {
                share.render();
            })
        },
        CreditCoffers:function () {
            require(["CreditCoffers"], function (CreditCoffers) {
                CreditCoffers.render();
            })
        },
        HelpCenter:function () {
            require(["HelpCenter"], function (HelpCenter) {
                HelpCenter.render();
            })
        },
        configuration:function () {
            require(["configuration"], function (configuration) {
                configuration.render();
            })
        },
        InformList:function () {
            require(["InformList"], function (InformList) {
                InformList.render();
            })
        },
        InAudit:function () {
            require(["InAudit"], function (InAudit) {
                InAudit.render();
            })
        },
        FailAudit:function () {
            require(["FailAudit"], function (FailAudit) {
                FailAudit.render();
            })
        },
        SuccessAudit:function () {
            require(["SuccessAudit"], function (SuccessAudit) {
                SuccessAudit.render();
            })
        },
        InformDetails:function () {
            require(["InformDetails"], function (InformDetails) {
                InformDetails.render();
            })
        },
        LoanPage:function () {
            require(["LoanPage"], function (LoanPage) {
                LoanPage.render();
            })
        },
        InLoan:function () {
            require(["InLoan"], function (InLoan) {
                InLoan.render();
            })
        },
        AuthenticationInformation:function () {
            require(["AuthenticationInformation"], function (AuthenticationInformation) {
                AuthenticationInformation.render();
            })
        },
        AuthenticationPhoneNumber:function () {
            require(["AuthenticationPhoneNumber"], function (AuthenticationPhoneNumber) {
                AuthenticationPhoneNumber.render();
            })
        },
        AuthenticationSesameScore:function () {
            require(["AuthenticationSesameScore"], function (AuthenticationSesameScore) {
                AuthenticationSesameScore.render();
            })
        },
        ContactInformation:function () {
            require(["ContactInformation"], function (ContactInformation) {
                ContactInformation.render();
            })
        },
        JobInformation:function () {
            require(["JobInformation"], function (JobInformation) {
                JobInformation.render();
            })
        },
        OperatorAgreement:function () {
            require(["OperatorAgreement"], function (OperatorAgreement) {
                OperatorAgreement.render();
            })
        },
        RegistrationAgreement:function () {
            require(["RegistrationAgreement"], function (RegistrationAgreement) {
                RegistrationAgreement.render();
            })
        },
        LoanAgreement:function () {
            require(["LoanAgreement"], function (LoanAgreement) {
                LoanAgreement.render();
            })
        }

    });
    return new Router();
})
