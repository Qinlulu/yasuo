define(["jquery","pageUrl", "PublicHead","public","layer", "text!modules/str/AddBankCard.html"],
    function ($,pageUrl, header,mc,layer, html) {
        function render() {
            $(".main").html(html);
            header.render("添加银行卡")
            //验证手机号码
            $("#yph").blur(function () {
                var A = $(this).val()
                var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
                if(A ==""){

                }else if (!reg.test(A)) {
                    layer.msg('请输入正确手机号码', {time:1000});
                    return
                }

            });
            //验证银行卡
            $("#kahao").blur(function () {
                    var A = $(this).val()
                    var reg = /^(\d{16}|\d{19})$/

                    if(A==""){

                    }else if (!reg.test(A)) {
                        layer.msg('请输入正确银行卡', {time:1000});

                        return
                    } else {
                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";
                        getSwiperData()
                        function getSwiperData() {
                            var r = ["cardInfo",
                                {
                                    "cardno": $("#kahao").val()
                                }
                            ];
                            var json = api.JsonpArr(r);
                            api.call(json, api_url).done(function (rs) {
                                if (rs.error) {
                                    layer.msg(rs.error.message, {time:1000});

                                } else {
                                    var yinhangka = {
                                        kaying: rs.result.data.bankcode,
                                        kaming: rs.result.data.bankname,
                                        kahao: rs.result.data.cardno,
                                        kalogo: rs.result.data.bank_logo
                                    }

                                    $(".conts ul li").eq(1).find("input").val(rs.result.data.bankname)
                                    sessionStorage.setItem("yinhangkas", JSON.stringify(yinhangka))
                                }
                            })
                        }
                    }
                }
            );

            var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
            getSwiperDatastt()
            function getSwiperDatastt() {
                var r = ["profile"];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        window.location.href = "#Loginphone"
                    } else {
                        var yonghu = {
                            id: rs.result.data.id,
                            username: rs.result.data.user_name, //用户姓名
                            idnumber: rs.result.data.id_number,   //身份证号
                            phone: localStorage.getItem("userName")
                        }
                        sessionStorage.setItem("yonghus", JSON.stringify(yonghu))
                    }
                })
            }

            $(".huoyan").on("click", function () {
                $(".donghua").show()
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";
                getSwiperData()
                function getSwiperData() {
                    if ($("#yph").val() == "") {
                        layer.msg('请输入预留手机号码', {time:1000});
                        $(".donghua").hide()
                        return
                    }
                    var yonghu = JSON.parse(sessionStorage.getItem("yonghus"))
                    var yinhangkass = JSON.parse(sessionStorage.getItem("yinhangkas"))
                    if (!yinhangkass) {
                        layer.msg('确认银行卡信息', {time:1000});
                        $(".donghua").hide()
                        return
                    }
                    var r = ["bindBankCard",
                        {
                            "user_name": yonghu.username,
                            "id_number": yonghu.idnumber,
                            "cardno": yinhangkass.kahao,
                            "phone": $("#yph").val(),
                            "bankcode": yinhangkass.kaying,        //银行代码
                            "bankname": yinhangkass.kaming         //银行名称
                        }];
                    var json = api.JsonpArr(r);

                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            layer.msg(rs.error.message, {time:1000});
                            console.log(rs)
                            $(".donghua").hide()
                        } else {
                            $(this).addClass("aaaaa")
                            $(this).attr('disabled', false)
                            $(".donghua").hide()
                            if ($(".huoyan").html() == "重新发送" || $(".huoyan").html() == "获取验证码") {
                                var num = 60;
                                var time = setInterval(function () {
                                    num--
                                    $(".huoyan").html(num + "s后重试")
                                    if (num == 0) {
                                        clearInterval(time)
                                        $(".huoyan").html("重新发送")
                                    }
                                }, 1000)
                            }
                            sessionStorage.setItem("requestid", rs.result.requestid)
                        }

                    });
                }
            })


            $(".jiaka").on("click", function () {

                if (!$(".aaaaa")) {
                    layer.msg('请获取验证码', {time:1000});
                    return
                }
                if ($("#kahao").val() == "") {
                    layer.msg('请输入银行卡号码', {time:1000});
                    return
                }
                if ($(".yanzhengs").val() == "") {
                    layer.msg('请输入预留手机号码验证码', {time:1000});
                    return
                }
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";
                getSwiperDatas()
                function getSwiperDatas() {
                    var r = [
                        "confirmBandCard",
                        {
                            "requestid"  : sessionStorage.getItem("requestid"),
                            "validCode": $(".yanzhengs").val()
                        }
                    ];
                    var json = api.JsonpArr(r);

                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            layer.msg(rs.error.message, {time:1000});
                        } else {
                            window.location.href="#HomePage"
                        }
                    })
                }
            })
        }
        return {
            render: render
        }
    })
