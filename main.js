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
        "layer":"./lib/layer",
        /*公用的部分*/
        "pageUrl":"modules/js/pageUrl",
        "check":"modules/js/PublicCheck",
        "PublicHead":"modules/js/PublicHead",
        "PublicFooter":"modules/js/PublicFooter",
        "PublicPassWord":"modules/js/PublicPassWord",
        "PublicAdvertis":"modules/js/PublicAdvertis",
        /*判断额度*/
        "JudgeLimit":"modules/js/JudgeLimit",
         /*引导页*/
        "guidance":"modules/js/guidance",
        /*登录，注册，修改密码*/
        "Loginphone":"modules/js/Loginphone",
        "LoginPassword":"modules/js/LoginPassword",
        "RegistrationPage":"modules/js/RegistrationPage",
        "ModifyPassword":"modules/js/ModifyPassword",
         /*footer导航*/
        "HomePage":"modules/js/HomePage",
        "CoffersPage":"modules/js/CoffersPage",
        "MinePage":"modules/js/MinePage",
        /*还款，未还款，还款中，立即还款*/
        "RepaymentPage":"modules/js/RepaymentPage",
        "UnPayment":"modules/js/UnPayment",
        "paymenting":"modules/js/paymenting",
        "ImmediatePayment":"modules/js/ImmediatePayment",
        /*借款记录，借款详情，开始借款，借款中*/
        "BorrowRecord":"modules/js/BorrowRecord",
        "BorrowDetails":"modules/js/BorrowDetails",
        "LoanPage":"modules/js/LoanPage",
        "InLoan":"modules/js/InLoan",
        /*银行卡设置，添加银行*/
        "BankCardSettings":"modules/js/BankCardSettings",
        "AddBankCard":"modules/js/AddBankCard",
         /*审核中，审核失败，审核成功*/
        "InAudit":"modules/js/InAudit",
        "FailAudit":"modules/js/FailAudit",
        "SuccessAudit":"modules/js/SuccessAudit",
        /*四步授信：认证实名,认证个人,认证手机，认证芝麻*/
        "AuthenticationIdentityCard":"modules/js/AuthenticationIdentityCard",
        "AuthenticationInformation":"modules/js/AuthenticationInformation",
        "AuthenticationPhoneNumber":"modules/js/AuthenticationPhoneNumber",
        "AuthenticationSesameScore":"AuthenticationSesameScore",
        /*联系人信息，工作信息*/
        "ContactInformation":"ContactInformation",
        "JobInformation":"JobInformation",
        /*运营商协议,注册协议，借款协议*/
        "OperatorAgreement":"OperatorAgreement",
        "RegistrationAgreement":"RegistrationAgreement",
        "LoanAgreement":"LoanAgreement",

        /*设置*/
        "configuration":"modules/js/configuration",
        /*通知，通知列表*/
        "InformList":"modules/js/InformList",
        "InformDetails":"modules/js/InformDetails",
        /*我的页面列表*/
        "share":"modules/js/share",
        "CreditCoffers":"modules/js/CreditCoffers",
        "HelpCenter":"modules/js/HelpCenter"


    }
})

require(["backbone", "route"], function () {
    Backbone.history.start();
    var rule = window.location.hash;
    //if ( rule.split('?')[0] != '#zhimayin' && rule.split('?')[0] != '#yindao' && rule.split('?')[0] != '#shenhez'){
        location.hash = "guidance";
    //}
})

