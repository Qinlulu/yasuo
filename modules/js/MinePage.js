define(["jquery","pageUrl", "public","text!modules/str/MinePage.html"],
    function($,pageUrl, mc,html){
        function render(){
            $(".main").html(html);
            $(".donghua").show()
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first";
            getSwiperData()
            function getSwiperData() {
                var r = ["index", {}];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                    } else {
                        if(rs.result.data.isLogin==0){
                            window.location.href = "#RegistrationPage"
                        }else{
                            var name = rs.result.data.user_name.substring(0, 1) + "**"
                            $(".headers dl dd").find("p").eq(0).html(name)
                            var phone = rs.result.data.phone.substring(0, 3) + "****" + rs.result.data.phone.substring(7)
                            $(".headers dl dd").find("p").eq(1).html(phone);
                        }
                        $(".donghua").hide()
                    }
                })
            }

            $(".wechats").on("click",function(){
                alert("公众号已复制，去微信搜索添加")

            })
            $(".wechats").find("span").eq(2).css("color","#CC9F68")

            var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";
            getSwiperDatas()
            function getSwiperDatas() {
                var r = ["bankCradList"];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {

                        $(".donghua").hide()

                    } else {
                        $(".donghua").hide()
                        var len=rs.result.data[0].bank_card
                        var lens=len.substring((len.length-4),len.length)
                        var str=rs.result.data[0].bank_name+"("+lens+")"
                        $(".ullist  li").eq(1).find("span").eq(2).css("color","#CC9F68")
                        $(".ullist  li").eq(1).find("span").eq(2).html(str)
                        sessionStorage.setItem("hao", rs.result.data[0].bank_card)
                    }
                })
            }


        }
        return {
            render : render
        }
    })
