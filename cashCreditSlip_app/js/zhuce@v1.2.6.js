define(function (exports, module) {
    //点击切换 是否阅读注册协议
    $(".huijia  em").on("click", function () {
        if ($(this).parent().hasClass("huijia")) {
            $(this).parent().removeClass("huijia")
            $(this).css({
                "background": "url(https://imagecdn.xinyongjinku.com/app/images/dan.png) no-repeat center",
                "background-size": "cover"
            })
        } else {
            $(this).parent().addClass("huijia")
            $(this).css({
                "background": "url(https://imagecdn.xinyongjinku.com/app/images/danz@v1.2.6.png) no-repeat center",
                "background-size": "cover"
            })
        }
    })



    //验证手机号码
    $("#phone").keyup(function() {
        $(this).css("color", " rgba(255, 153, 6, 0.78)");
    });
    $("#yan").keyup(function() {
        $(this).css("color", " rgba(255, 153, 6, 0.78)");
    });

    $(".pass").keyup(function() {
        $(this).css("color", " rgba(255, 153, 6, 0.78)");
        $(".text").val($(this).val())
    });
    $(".text").keyup(function() {
        $(this).css("color", " rgba(255, 153, 6, 0.78)");
        $(".pass").val($(this).val())
    });


    $("#phone").blur(function () {
        var A = $(this).val()
        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

        if (A == "") {

        } else if (!reg.test(A)) {
            alert("请输入正确账号")
            return
        }
    });

    $("#mis").blur(function () {
        var A = $(this).val()
        var reg = /^[A-Za-z0-9]{8,16}$/
        if (A == "") {

        } else if (!reg.test(A)) {
            alert("请输入正确密码")
            return
        }
    });

    //切换眼睛状态
    $(".jianf img").on("click", function () {
        if ($(this).hasClass("ss")) {
            $(this).removeClass("ss")
            $(this).attr("src", "https://imagecdn.xinyongjinku.com/app/images/h@v1.2.5.png")
            $(".pass").val($(".text").val())
            $(".pass").show()
            $(".text").hide()

        } else {
            $(this).addClass("ss")
            $(this).attr("src", "https://imagecdn.xinyongjinku.com/app/images/k@v1.2.5.png")
            $(".text").val($(".pass").val())
            $(".text").show()
            $(".pass").hide()

        }
    })

    //获取验证码
    var time;
    $(".huoyan").on("click", function () {
        var A = $("#phone").val()
        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

        if (A == "") {
            alert("请输入账号")
            return
        } else if (!reg.test(A)) {
            alert("请输入正确账号")
            return
        }
        if ($(".huoyan").html() == "重新发送" || $(".huoyan").html() == "获取验证码") {
            var num = 60;
            time = setInterval(function () {
                num--
                $(".huoyan").html(num + "s")
                $(".huoyan").css("color", "#ccc")
                if (num == 0) {
                    clearInterval(time);
                    $(".huoyan").html("重新发送")
                    $(".huoyan").css("color", "#FF5E17")
                }
            }, 1000)

            var api_url = "https://www.xinyongjinku.com/passport/user.php?c=account";
            var that = $(this)
            getSwiperData(that)
            function getSwiperData(that) {
                var r = ["messageAuth",
                    {
                        "mobile": $("#phone").val(),
                        "node_name": "register"
                    }];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        alert(rs.error.message)
                        clearInterval(time);
                        $(".huoyan").html("重新发送")
                        $(".huoyan").css("color", "#FF5E17")
                    } else {
                        that.addClass("aaaaa")
                        $(".key").html(rs.result.data.key)
                    }

                });
            }
        }

    })
    var num = window.location.href.split("?")[1].split("channe=")[1]
    $(".luodishen").on("click", function () {
       $(".ccc").removeClass("ccc").addClass("cc")
        if ($("#phone").val() == "") {
            alert("手机号码不能为空")
            return
        }
        if ($("#yan").val() == "") {
            alert("验证码不能为空")
            return
        }
        if ($(".text").val() == "" && $(".pass").val() == "") {
            alert("密码不可以为空")
            return
        }

        if ($(".aaaaa").length == 0) {
            alert("请先获取验证码")
            return
        }

        if ($(".huijia").length == 0) {
            alert("是否阅读注册协议并同意")
            return
        }

        var api_url = "https://www.xinyongjinku.com/passport/user.php?c=account";
        getSwiperDatas()
        function getSwiperDatas() {
            var mima;
            mima = $(".pass").val() ? $(".pass").val() : $(".text").val();
            var r = ["signin", {
                "username": $("#phone").val(),
                "sms_key": $(".key").html(),
                "sms_code": $("#yan").val(), //验证码
                "password": mima, //密码
                "source_id": num
            }];
            var json = api.JsonpArr(r);
            api.call(json, api_url).done(function (rs) {
                if (rs.error) {
                    alert(rs.error.message)
                } else {
                    window.location.href = "https://www.xinyongjinku.com/app/zhuce/zjiayou.html"

                }
            });
        }

    })
})