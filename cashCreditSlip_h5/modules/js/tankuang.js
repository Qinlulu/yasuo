define(["jquery","text!../str/tankuang.html","css!../css/tankuang.css"],function($, html){
    function render(){
        $(".tankuang").html(html);
        $(".remove").click(function(event){
            $(".tankuang").fadeOut(10);
            event.stopPropagation();
        })
       var rule = window.location.hash;
        if ( rule.split('?')[0] == '#jiekuanzhong' ) {
            $(".Advertisement").css({
                "background": "url('https://imagecdn.xinyongjinku.com/wechat/modules/images/tie@v1.1.0.png') center",
                "background-size": "cover"
            })
            $(".Advertisement").show()
            $(".boxs").hide()
            $("#Advertisement").on("click", function () {
                _hmt.push(['_trackEvent', 'guanggao', 'jiekuanzhong', 'haha']);
                window.location.href = "https://jie.yihuangjin.com/wechat/#qudao?terminal=6&source_id=2"
            })
        }
        if ( rule.split('?')[0] == '#huankuanzhong' ){
            $(".Advertisement").css({
                "background": "url('https://imagecdn.xinyongjinku.com/wechat/modules/images/chakan@v1.1.0.png') center",
                "background-size": "cover"
            })
            $(".boxs").hide()
           $(".Advertisement").show()
            $("#Advertisement").on("click",function(){
                _hmt.push(['_trackEvent', 'guanggao', 'huankuanzhong', 'haha']);
                window.location.href="https://jie.yihuangjin.com/wechat/#qudao?terminal=7&source_id=2"
            })
        }
        if ( rule.split('?')[0] == '#shenhes' ){
            $(".Advertisement").css({
                "background": "url('https://imagecdn.xinyongjinku.com/wechat/modules/images/shouxin@v1.1.0.png') center",
                "background-size": "cover"
            })
            $(".boxs").hide()
           $(".Advertisement").show()
            $("#Advertisement").on("click",function(){
                _hmt.push(['_trackEvent', 'guanggao', 'shnehes', 'haha']);
                window.location.href="https://jie.yihuangjin.com/wechat/#qudao?terminal=5&source_id=2"
            })
        }
        $(".boxs").click(function(){
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                sessionStorage.setItem("ji",1)
            } else if (/android/.test(ua)) {
                sessionStorage.setItem("ji",2)
            }

            var browser = {
                versions: function() {
                    var u = navigator.userAgent, app = navigator.appVersion;
                    return {//移动终端浏览器版本信息
                        trident: u.indexOf('Trident') > -1, //IE内核
                        presto: u.indexOf('Presto') > -1, //opera内核
                        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1, //是否iPad
                        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                    };
                }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            }

            if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
                sessionStorage.setItem("ji",1)
            }
            else if (browser.versions.android) {
                sessionStorage.setItem("ji",2)
            }
            if(sessionStorage.getItem("ji")==1){
                window.location.href="https://itunes.apple.com/us/app/xin-yong-jin-ku/id1241617822?l=zh&ls=1&mt=8"

            }else if(sessionStorage.getItem("ji")==2){
                window.location.href="http://app.qq.com/#id=detail&appid=1106223920"

            }else{
                window.location.href="http://app.qq.com/#id=detail&appid=1106223920"
            }
        })

    }
    return {
        render : render
    }
})
