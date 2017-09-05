define(["jquery", "pageUrl", "./headers", "check", "layer","./mima",
        'public', "text!../str/zhucemi.html", "css!../css/zhucemi.css", "css!../css/layer.css"],
    function ($, pageUrl, header, check, layer,mima, mc, html) {
        function render() {
            $(".main").html(html);
            header.render("注册")
            mima.render()
            check.render()
            //设置显示的账号
            $(".tit").html(sessionStorage.getItem("cunchuzhang"))
            $(".huoyan").html("获取验证码")
            $(".pass").blur(function () {
                var A = $(this).val().replace(/(^\s+)|(\s+$)/g, "");
                var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/;
                if (A == "") {

                } else if (!reg.test(A)) {
                    layer.msg("ֻ密码格式不正确", {time:2000});
                    $(this).val("");
                    return;
                }
            });
            var time;
            $(".huoyan").on("click", function () {
                if ($(".huoyan").html() == "重新发送" || $(".huoyan").html() == "获取验证码") {
                    var num = 60;
                    time = setInterval(function () {
                        num--
                        $(".huoyan").html(num + "s")
                        $(".huoyan").css("color", "#ccc")
                        if (num == 0) {
                            clearInterval(time);
                            $(".huoyan").html("重新发送")
                            $(".huoyan").css("color", "#D8AA5A")
                        }
                    }, 1000)
                    var api_url = pageUrl.render() + ".xinyongjinku.com/passport/user.php?c=account";
                    getSwiperData()
                    function getSwiperData() {
                        var r = ["messageAuth",
                            {
                                "mobile": $(".tit").html(),
                                "node_name": "register"
                            }];
                        var json = api.JsonpArr(r);
                        api.call(json, api_url).done(function (rs) {
                            if (rs.error) {
                                layer.msg(rs.error.message, {time:2000});
                                clearInterval(time);
                                $(".huoyan").html("重新发送")
                                $(".huoyan").css("color", "#D8AA5A")
                            } else {
                                $(".huoyan").addClass("aaaaa")
                                $(".key").html(rs.result.data.key)
                            }
                        });
                    }
                }
            })
            $(".btjsd").on("click", function () {
                if ($(".yans").val() == "") {
                    layer.msg("请输入验证码", {time:2000});
                    return
                }
                if ($(".pass").val() == "" && $(".text").val() == "") {
                    layer.msg("请输入密码", {time:2000});
                    return
                }
                if ($(".aaaaa").length == 0) {
                    layer.msg("请先获取验证码", {time:2000});
                    return
                }
                if ($(".check").length == 0) {
                    layer.msg("是否阅读注册协议并同意", {time:2000});
                    return
                }
                $(".huoyan").html("获取验证码")
                $(".huoyan").css("color", "#D8AA5A")
                clearInterval(time)
                var api_url = pageUrl.render() + ".xinyongjinku.com/passport/user.php?c=account";
                getSwiperData()
                function getSwiperData() {
                    var mima;
                    mima = $(".pass").val() ? $(".pass").val() : $(".text").val();
                    var r = [
                        "signin",
                        {
                            "username": $(".tit").html(),
                            "sms_key": $(".key").html(),
                            "sms_code": $(".yans").val(),//验证码
                            "password": mima,//密码
                            "source_id": localStorage.getItem("rule") //用户来源渠道ID
                        }
                    ];
                    var json = api.JsonpArr(r);
                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            layer.msg(rs.error.message, {time:2000});
                        } else {
                            localStorage.setItem("phone", $(".tit").html());
                            window.location.href = "#jiekuanzhu"
                        }
                    });
                }
            })
        }

        return {
            render: render
        }
    })
