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
        "check":"modules/js/PublicCheck",
        "PublicHead":"modules/js/PublicHead",
        "PublicPassWord":"modules/js/PublicPassWord",
        "PublicFooter":"modules/js/PublicFooter",
        "PublicAdvertis":"modules/js/PublicAdvertis",
        "JudgeLimit":"modules/js/JudgeLimit",
        "guidance":"modules/js/guidance",
        "loginphone":"modules/js/LoginPhone",
        "pageUrl":"modules/js/pageUrl",
        "LoginPassword":"modules/js/LoginPassword",
        "RegistrationPage":"modules/js/RegistrationPage",
        "ModifyPassword":"modules/js/ModifyPassword",
        "HomePage":"modules/js/HomePage",
        "CoffersPage":"modules/js/HomePage",
        "MinePage":"modules/js/MinePage",
        "RepaymentPage":"modules/js/RepaymentPage",
        "UnPayment":"modules/js/UnPayment",
        "ImmediatePayment":"modules/js/ImmediatePayment",

    }
})

require(["backbone", "route"], function () {
    Backbone.history.start();
    var rule = window.location.hash;
    if ( rule.split('?')[0] != '#zhimayin' && rule.split('?')[0] != '#yindao' && rule.split('?')[0] != '#shenhez'){
        location.hash = "PublicFooter";
    }
})

