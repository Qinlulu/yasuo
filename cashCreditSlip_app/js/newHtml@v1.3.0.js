define ( function ( exports , module ) {
  var userId = window.location.href.split ( "?" )[ 1 ].split ( "userId=" )[1];

  $(".newHtml").css("height","100%");

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
    var r = ["noticeDetail",{
      "notice_user_id":userId
    }];
    var json = api.JsonpArr(r);
    api.call(json, api_url)
      .done(function (rs) {
      if(rs.error){
        alert(rs.error.message)
      } else {

        var str= rs.result.data.content;
        var c =function escape2Html(str) {
          var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
          return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,i){return arrEntities[i];});
        };

        var data=rs.result.data;
        $(".newHtml h3").html(data.title)
        $(".newHtml .time").html(data.create_time)
        $(".newHtml .content").html(c(str))

      }

    })
  }


} )