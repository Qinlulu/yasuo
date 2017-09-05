define(["jquery","pageUrl","./headers", "check","public","layer",
        "text!../str/renzhengzhima.html", "css!../css/renzhengzhima.css", "css!../css/layer.css"],
    function ($,pageUrl, header,check, mc, layer,html) {
    function render() {
        $(".main").html(html);
        header.render("认证芝麻")
        $(".back").on("click", function () {
            window.location.href="#jiekuanzhu"
        })
        check.render()
        $(".kaizhima").on("click", function () {
            $(".donghua").show()
            $(".tishi").html("")
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
            getSwiperDatasu()
            function getSwiperDatasu() {
                var r = ["profile"];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        $(".donghua").hide()
                        layer.msg(rs.error.message, {time:2000});

                    } else {
                        $.ajax({
                            url:pageUrl.render()+".xinyongjinku.com/wechat/modules/phpscript/getUrl.php",
                            type:"post",
                            data:{
                                name:rs.result.data.user_name,
                                idcard:rs.result.data.id_number
                            },
                            success:function(data){
                                $(".donghua").hide()
                                window.location.href=JSON.parse(data).url
                            }
                        })
                    }
                })
            }

        })
    }

    return {
        render: render
    }
})
