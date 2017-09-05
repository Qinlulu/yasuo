define(["jquery","pageUrl", "touch", "public", "layer",
        "text!../str/yindao.html", "css!../css/yindao.css", "css!../css/layer.css"],
    function ($, pageUrl,touch, mc,layer, html) {
        function render() {
            $(".main").html(html);
            $ ( "#YSF-BTN-HOLDER" ).hide ();
            $ ( "#YSF-CUSTOM-ENTRY-3" ).hide ();
             var rule;
             if(window.location.href.indexOf("?")< 0){
                 rule = 3;
             }else{
                 rule=window.location.href.split("?")[1].split("road=")[1]
             }
            localStorage.setItem("rule",rule)
            

            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?2d3bbffec85b998796a37b2bb7224d9c";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
            $(".tiyan").on("click", function () {

                var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                getSwiperData()
                function getSwiperData() {
                    var r = ["loginStatus"];
                    var json = api.JsonpArr(r);
                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            layer.msg(rs.error.message, {time:2000});
                        } else {
                        
                            $(".donghua").hide()
                          if (rs.result.status == 0) {
                                window.location.href = "#zhucezhang"
                            }else{
                                window.location.href = "#jiekuanzhu"
                            }
                        }
                    })
                }

            })
        }

        return {
            render: render
        }
    })
