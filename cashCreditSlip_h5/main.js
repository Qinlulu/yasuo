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
        "pageUrl":"modules/js/pageUrl",
        "check":"modules/js/check",
        "layer":"./lib/layer",
    }
})

require(["backbone", "route"], function () {
    Backbone.history.start();
    var rule = window.location.hash;
    if ( rule != '#mineZH' &&
         rule != '#share' &&
         rule != '#zhimayin' &&
         rule != '#gengduo' &&
         rule.split('?')[0] != '#yindao' &&
         rule != '#shenhez'){
        location.hash = "yindao";
    }
})

