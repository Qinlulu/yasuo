define(["jquery","pageUrl", "PublicHead", "public","layer","JqueryQrcode", "qrcode", "text!modules/str/share.html"],
    function($,pageUrl, header,mc,layer, jqrcode, qrcode, html) {
        function render() {
            $(".main").html(html);
            header.render("分享邀请")
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first"
            getSwiperDatauu();
            function getSwiperDatauu() {
                $(".donghua").show()
                var r = ["index", {}];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function(rs) {
                    if(rs.error) {
                        layer.msg(rs.error.message, {time:2000});
                    } else {
                        var data = rs.result.data;
                        $(".donghua").hide()
                        sessionStorage.setItem("data",JSON.stringify(data))

                        var data = JSON.parse(sessionStorage.getItem("data"))
                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account"
                        getSwiperDatauus();
                        function getSwiperDatauus(){
                            $(".donghua").show()
                            var r = ["userBaseInfo"];
                            var json = api.JsonpArr(r);
                            api.call(json,api_url).done(function(rs){
                                if(rs.error){
                                    layer.msg(rs.error.message, {time:2000});
                                    $(".donghua").hide()
                                }else{
                                    var data2 = rs.result.data;
                                    if(data2.id){
                                        $(".donghua").hide()
                                        var url = pageUrl.render()+".xinyongjinku.com/app/share/landing.html?channe=157&username=" + data.user_name + "&phone=" + data.phone+"&userid="+data2.id+"&Route=code";
                                        $('.erweima').qrcode({
                                            text: url, //二维码代表的字符串（本页面的URL）
                                            width: 155, //二维码宽度
                                            height: 155 //二维码高度
                                        });
                                    }else{
                                        getSwiperDatauus();
                                    }
                                }
                            })

                        }

                        $(".yq").on("click", function() {
                            var str = pageUrl.render()+".xinyongjinku.com/app/share/details.html?phone=" + data.phone+"&system=web";
                            window.location.href = str;
                        })
                    }
                })

            }



        }
        return {

            render: render
        }
    })