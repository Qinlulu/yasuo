define ( function ( exports , module ) {
    if (window.location.href.split("?")[1].split("&system=")[1]) {
        $(".head").show()
        $(".center2").css("height","18rem")
        $(".back").on("click", function () {
            window.history.back()
        })
    }

    var api_url;

    if (window.location.href.split("?")[1].split("&ios=")[1]) {
        window.onerror = function(err) {
            log('window.onerror: ' + err)
        }
        function setupWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
            if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
        }

        setupWebViewJavascriptBridge(function(bridge) {
            bridge.registerHandler('upUserInfo', function(data, responseCallback) {

                var cookie = {
                    set:function(key,val){
                        var date=new Date();
                        var expiresHours=9;
                        date.setTime(date.getTime()+expiresHours*3600);
                        console.log(date.toGMTString());
                        document.cookie=key + "=" + val +";expires="+date.toGMTString()+";path=/";
                    },
                    get:function(key){
                        var getCookie = document.cookie.replace(/[ ]/g,"");
                        var arrCookie = getCookie.split(";")
                        var tips;
                        for(var i=0;i<arrCookie.length;i++){
                            var arr=arrCookie[i].split("=");
                            if(key==arr[0]){
                                tips=arr[1];
                                break;
                            }
                        }
                        return tips;
                    }
                }
                cookie.set('XINYONGJINKU_TOKEN',data.XINYONGJINKU_TOKEN);

                api_url = "https://www.xinyongjinku.com/passport/index.php?c=first";
                getSwiperData()
            })
            document.body.appendChild(document.createElement('br'))
        })
    }else{
        api_url = "https://www.xinyongjinku.com/passport/index.php?c=first";
        getSwiperData()
    }

    function getSwiperData() {
                var r = ["shareList",{}];
                var json = api.JsonpArr(r);
                api.call(json, api_url)
                    .done(function (rs) {
                        if(rs.error){
                            alert(rs.error.message)
                        } else {
                            if(rs.result.is_invite) {
                                var locationHref = window.location.href.split("?")[1].split("&");
                                var phone = locationHref[0].split("=")[1];
                                var phones = phone.substring(0, 3) + "****" + phone.substring(7)
                                $(".telNum").text(phones)
                                $(".wap").show()
                                $(".details").css('background','url("https://imagecdn.xinyongjinku.com/wechat/modules/images/shareBg@v1.1.1.png")')
                                $(".noImg").hide();

                                var data = rs.result.data;
                                $(".lists p").eq(0).html(data.totalNums)
                                $(".lists p").eq(1).html(data.have_credit)
                                $(".lists p").eq(2).html(data.no_credit)

                                var list = rs.result.invite_list;
                                var str = `<li>
                            <span>用户账号</span>
                            <span>姓名</span>
                            <span>状态</span>
                        </li>`;

                                for (var i = 0; i < list.length; i++) {
                                    var phones = list[i].phone.substring(0, 3) + "****" + list[i].phone.substring(7)
                                    str += `<li>
                            <span>${phones}</span>
                            <span>${list[i].username}</span>
                            <span>${list[i].credit_status}</span>
                        </li>`
                                }
                                $(".liT").html(str)
                            }else{
                                $(".noImg").show();
                                $(".wap").hide();
                                $(".details").css("background","#F6F6F6");
                            }

                        }

                    })
            }
})


