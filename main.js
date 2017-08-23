require.config({
    paths: {
        "jquery": "https://imagecdn.xinyongjinku.com/wechat/lib/jquery-2.1.1.min",
        "underscore": "https://imagecdn.xinyongjinku.com/wechat/lib/underscore",
        "backbone": "https://imagecdn.xinyongjinku.com/wechat/lib/backbone",
        "text": "https://imagecdn.xinyongjinku.com/wechat/lib/text",
        "css": "https://imagecdn.xinyongjinku.com/wechat/lib/css",
        "touch": "https://imagecdn.xinyongjinku.com/wechat/lib/touch",
        "public": "https://imagecdn.xinyongjinku.com/wechat/lib/public",
        "ajaxsub":"https://imagecdn.xinyongjinku.com/wechat/lib/ajaxsub",
        'megapix':'https://imagecdn.xinyongjinku.com/wechat/lib/megapiximage',
        'JqueryQrcode':'./lib/jquery.qrcode',
        'qrcode':'./lib/qrcode',
        /*公用的部分*/
        "pageUrl":"modules/js/pageUrl",
        "check":"modules/js/PublicCheck",
        "PublicHead":"modules/js/PublicHead",
        "PublicFooter":"modules/js/PublicFooter",
        "PublicPassWord":"modules/js/PublicPassWord",
        "PublicAdvertis":"modules/js/PublicAdvertis",
        /*判断额度*/
        "JudgeLimit":"modules/js/JudgeLimit",

        "guidance":"modules/js/guidance",
        "Loginphone":"modules/js/Loginphone",
        "LoginPassword":"modules/js/LoginPassword",
        "RegistrationPage":"modules/js/RegistrationPage",
        "ModifyPassword":"modules/js/ModifyPassword",
        "HomePage":"modules/js/HomePage",
        "CoffersPage":"modules/js/CoffersPage",
        "MinePage":"modules/js/MinePage",
        "RepaymentPage":"modules/js/RepaymentPage",
        "UnPayment":"modules/js/UnPayment",
        "ImmediatePayment":"modules/js/ImmediatePayment",
        "BankCardSettings":"modules/js/BankCardSettings",
        "AuthenticationIdentityCard":"modules/js/AuthenticationIdentityCard",
        "paymenting":"modules/js/paymenting",
        "BorrowRecord":"modules/js/BorrowRecord",
        "BorrowDetails":"modules/js/BorrowDetails",
        "AddBankCard":"modules/js/AddBankCard",
        "share":"modules/js/share",
        "CreditCoffers":"modules/js/CreditCoffers",
        "HelpCenter":"modules/js/HelpCenter",
        "configuration":"modules/js/configuration",
        "InformList":"modules/js/InformList",

    }
})

require(["backbone", "route"], function () {
    Backbone.history.start();
    var rule = window.location.hash;
    //if ( rule.split('?')[0] != '#zhimayin' && rule.split('?')[0] != '#yindao' && rule.split('?')[0] != '#shenhez'){
        location.hash = "RepaymentPage";
    //}
})

