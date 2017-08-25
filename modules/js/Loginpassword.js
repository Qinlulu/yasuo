define(["jquery", "pageUrl", "PublicHead", "PublicPassWord", "public","layer", "text!modules/str/LoginPassword.html"],
    function ($, pageUrl, header, password, mc,layer, html) {
        function render() {
            $(".main").html(html);
            header.render("登录密码");
            password.render(".btjsd", ".pass");
            //设置显示的账号
            $(".tit").html(sessionStorage.getItem("cunchuzhang"));
            //忘记密码
            $(".wangji").on("click", function () {
                window.location.href = "#ModifyPassword?name=" + $(".tit").html()
            })
            $(".btjsd").on("click", function () {
                var api_url = pageUrl.render() + ".xinyongjinku.com/passport/user.php?c=account";
                if ($(".pass").val() == "" && $(".text").val() == "") {
                    layer.msg("请输入密码", {time:2000});
                    return
                }
                getSwiperData()
                function getSwiperData() {
                    var mima;
                    mima = $(".pass").val() ? $(".pass").val() : $(".text").val();
                    var r = ["userLogin",
                        {
                            "username": $(".tit").html(),
                            "password": mima
                        }];
                    var json = api.JsonpArr(r);
                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            layer.msg(rs.error.message, {time:2000});
                        } else {
                            window.location.href = "#HomePage"; //jiekuanzhu
                            localStorage.setItem("phone", $(".tit").html());
                        }
                    });
                }
            })


        }

        return {
            render: render
        }
    })
