define(["jquery","pageUrl", "./headers", "check", "public", "layer",
        "text!../str/renzhengshouji.html", "css!../css/renzhengshouji.css", "css!../css/layer.css","css!../css/page.css"],
    function ($, pageUrl,header, check, mc, layer,html) {
        function render() {
            $(".main").html(html);
            header.render("手机认证")
            check.render()
          
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
            getSwiperDatar()
            function getSwiperDatar() {
                var r = ["userBaseInfo"];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        $(".donghua").hide()
                        layer.msg(rs.error.message, {time:2000});
                    } else {
                        $(".yanshouji").html(rs.result.data.phone)
                    }
                  
                })
            }

            $(".yanmi").keyup(function () {
                if ($(this).val().length < 4) {
                    $(".tijiao").addClass("tiji")
                    $(".tijiao").attr('disabled', true)
                } else {
                    $(".tijiao").removeClass("tiji");
                    $(".tijiao").attr('disabled', false)
                }
            })

            $(".tijiao").on("click", function () {
                $(".donghua").show()
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                if ($(".yanmi").val() == "") {
                    layer.msg("请填写运营商密码", {time:2000});
                    $(".donghua").hide()
                    return
                }
                getSwiperData()
                function getSwiperData() {
                    var r = [
                        "createTask",
//                  "isMobileAuth",
                        {
                            "system": "web",
                            "token_id": localStorage.getItem("tokenId"),
                            "information_step": 3,              //步数
                            "mobile": $(".yanshouji").html(),              //手机号
                            "password": $(".yanmi").val()               //服务密码
                        }
                    ];
                    var json = api.JsonpArr(r);
                   
                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            $(".donghua").hide()
                            layer.msg(rs.error.message, {time:2000});
                            if (rs.error.message == "授信失败") {
                                layer.msg("授信失败 7天后重试", {time:2000});
                                window.location.href = "#shenhes"
                            }
                        } else {
                           
                            if (rs.result.data.code) {
                                $(".donghua").hide()
                                layer.msg(rs.result.data.message, {time:2000});
                                $(".renzhengshouji .tijiao").css("display", "none")
                                sessionStorage.setItem("ids", rs.result.data.task_id)
                                $(".tankuang").show()
                                var time;
                                var num = 60;
                                time = setInterval(function () {
                                    num--
                                    $(".daoji").html(num + "s")
                                    $(".daoji").css("color", "#ccc")
                                    if (num == 0) {
                                        clearInterval(time);
                                        $(".daoji").html("重新发送")
                                        $(".daoji").css("color", "#666")
                                    }
                                }, 1000)

                                $(".daoji").on("click", function () {
                                    if ($(".daoji").html() == "重新发送" || $(".daoji").html() == "获取验证码") {
                                        var num = 60;
                                        time = setInterval(function () {
                                            num--
                                            $(".daoji").html(num + "s")
                                            $(".daoji").css("color", "#ccc")
                                            if (num == 0) {
                                                clearInterval(time);
                                                $(".daoji").html("重新发送")
                                                $(".daoji").css("color", "#666")
                                            }
                                        }, 1000)

                                        $(".donghua").show()
                                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                                        getSwiperDatays()
                                        function getSwiperDatays() {
                                            var r = [
                                                "getVerificationCode",
//                                                    "getCheckCode",
                                                {
                                                    "system": "web",
                                                    "token_id": localStorage.getItem("tokenId"),
                                                    "mobile": $(".yanshouji").html(),              //手机号
                                                    "password": $(".yanmi").val(),
                                                    "task_id": sessionStorage.getItem("ids"),  //任务id
                                                }
                                            ];
                                            var json = api.JsonpArr(r);
                                            
                                            api.call(json, api_url).done(function (rs) {
                                                if (rs.error) {
                                                    $(".donghua").hide()
                                                    layer.msg(rs.error.message, {time:2000});

                                                    clearInterval(time);
                                                    $(".daoji").html("重新发送")
                                                    $(".daoji").css("color", "#666")
                                                } else {
                                                    $(".donghua").hide()
                                                    layer.msg(rs.result.data.message, {time:2000});
                                                }
                                            })
                                        }

                                    }

                                })

                                $(".tijiaos").on("click", function () {
                                    if ($(".yans").val() == " ") {
                                        layer.msg("请填写验证码", {time:2000});
                                        return
                                    } else {
                                        $(".donghua").show()
                                        $(".tishi").html("审核中，请耐心等待")
                                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                                        getSwiperDatas()
                                        function getSwiperDatas() {
                                            var r = [
                                                "checkVerificationCode",
//                                      "getCheckCode",
                                                {
                                                    "system": "web",
                                                    "token_id": localStorage.getItem("tokenId"),
                                                    "mobile": $(".yanshouji").html(),              //手机号
                                                    "password": $(".yanmi").val(),
                                                    "task_id": sessionStorage.getItem("ids"),  //任务id
                                                    "code": $(".yans").val()                                     //验证码
                                                }
                                            ];
                                            var json = api.JsonpArr(r);
                                            
                                            api.call(json, api_url).done(function (rs) {
                                              
                                                if (rs.error) {
                                                    $(".donghua").hide()
                                                    if (rs.error.code == "1812") {
                                                        layer.msg(rs.error.message, {time:2000});
                                                        $(".tankuang").hide()
                                                    } else {
                                                        layer.msg(rs.error.message, {time:2000});
                                                    }

                                                } else {
                                                    if (rs.result.data.code) {
                                                        layer.msg(rs.result.data.message, {time:2000});
                                                        $(".donghua").hide()
                                                        $(".yans").val(" ")
                                                    } else {
                                                        $(".donghua").show()
                                                        var api_url = pageUrl.render() +".xinyongjinku.com/passport/user.php?c=account";
                                                        getSwiperDatasnn()
                                                        function getSwiperDatasnn() {
                                                            var r = [
                                                                "newGetSesameCredit",
                                                                {
                                                                    "system":"web",
                                                                    "openId":"",
                                                                    "success":'flase'
                                                                }
                                                            ];
                                                            var json = api.JsonpArr(r);
                                                            api.call(json, api_url).done(function (rs) {
                                                                if (rs.error) {
                                                                    $(".donghua").hide()
                                                                    $(".tankuang").hide()
                                                                    layer.msg(rs.error.message, {time:2000});
                                                                }else{
                                                                    $(".donghua").hide()
                                                                    $(".tankuang").hide()
                                                                    window.location.href = "#shenhez"
                                                                }
                                                            })
                                                        }

                                                    }

                                                }
                                            })
                                        }

                                    }
                                })

                            } else {

                                var api_url = pageUrl.render() +".xinyongjinku.com/passport/user.php?c=account";
                                getSwiperDatasnn()
                                function getSwiperDatasnn() {
                                    var r = [
                                        "newGetSesameCredit",
                                        {
                                            "system":"web",
                                            "openId":"",
                                            "success":'flase'
                                        }
                                    ];
                                    var json = api.JsonpArr(r);
                                    api.call(json, api_url).done(function (rs) {
                                        $(".donghua").hide()
                                        if (rs.error) {
                                            layer.msg(rs.error.message, {time:2000});
                                        }else{
                                            window.location.href = "#shenhez"
                                        }
                                    })
                                }
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
