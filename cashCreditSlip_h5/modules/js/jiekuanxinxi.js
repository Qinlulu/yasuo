define(["jquery","pageUrl","./headers", "check","public","layer",
        "text!../str/jiekuanxinxi.html", "css!../css/jiekuanxinxi.css", "css!../css/layer.css"],
    function ($,pageUrl,header ,check,mc, layer,html) {
    function render() {
        $(".main").html(html);
        header.render("确认借款信息")
        check.render()
        $(".donghua").show()
        var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";
        getSwiperData()
        function getSwiperData() {
            var money = JSON.parse(sessionStorage.getItem("jiekuanxis"))
            $(".ullist li").eq(0).find("span").eq(1).html(money.daozhang + "元")
            $(".ullist li").eq(1).find("span").eq(1).html(money.shijian + "天")
            $(".ullist li").eq(3).find("span").eq(1).html(money.daozhang + "元")
            var r = [
                "tollRate",
                {
                    "amount": money.daozhang,
                    "borrow_cycle": money.shijian
                }
            ];
            var json = api.JsonpArr(r);
            api.call(json, api_url).done(function (rs) {
                if (rs.error) {
                    layer.msg(rs.error.message, {time:2000});
                    $(".donghua").hide()
                } else {
                    $(".donghua").hide()
                    $(".conts h2").find("i").html(rs.result.data.monthly)
                    $(".conts h3").find("i").html()
                    $(".zong").find("i").html(rs.result.data.sumfee)
                    $(".conts ol li").eq(0).find("span").eq(1).html(Number(rs.result.data.riskservicefee).toFixed(2) + "元")
                    $(".conts ol li").eq(1).find("span").eq(1).html(Number(rs.result.data.platfee).toFixed(2) + "元")
                    $(".conts ol li").eq(4).find("span").eq(1).html(Number(rs.result.data.capitalfee).toFixed(2) + "元")
                    $(".conts ol li").eq(2).find("span").eq(1).html(Number(rs.result.data.collectionfee).toFixed(2) + "元")
                    $(".conts ol li").eq(3).find("span").eq(1).html(Number(rs.result.data.riskreserve).toFixed(2) + "元")
                }
            })
        }

        $(".donghua").show()
        var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";
        getSwiperDatas()
        function getSwiperDatas() {
            var r = ["bankCradList"];
            var json = api.JsonpArr(r);
            api.call(json, api_url).done(function (rs) {
                if (rs.error) {
                    layer.msg(rs.error.message, {time:2000});
                    $(".donghua").hide()

                    $(".ullist  li").eq(2).on("click", function () {
                        window.location.href = "#yinhangkashezhi"
                    })

                } else {
                    $(".donghua").hide()
                    var len=rs.result.data[0].bank_card
                    var lens=len.substring((len.length-4),len.length)
                    var str=rs.result.data[0].bank_name+"("+lens+")"
                    $(".ullist  li").eq(2).find("span").eq(1).html(str)


                   /* $(".ullist  li").eq(2).on("click", function () {
                        window.location.href = "#yinhangkashezhi"
                    })*/
                    sessionStorage.setItem("hao", rs.result.data[0].bank_card)
                }
            })
        }


        $(".jieba").on("click", function () {
            if (!sessionStorage.getItem("hao")) {
                layer.msg("请绑定银行卡", {time:2000});
            } else {
                $(".donghua").show()
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";
                getSwiperDatass()
                function getSwiperDatass() {
                    var money = JSON.parse(sessionStorage.getItem("jiekuanxis"))
                    var r = [
                        "makeOrder",
                        {
                            "amount":money.daozhang,             //借款金额
                            "borrow_cycle":money.shijian,       //借款周期
                            "bank_card":sessionStorage.getItem("hao"),    //银行卡号
                            "longitude":"0",//经度
			                "latitude":"0",//纬度
			                "accuracy":"0",//精度
			                "altitude":"0"//海拔高度
                        }
                    ];
                    var json = api.JsonpArr(r);

                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            layer.msg(rs.error.message, {time:2000});
                            $(".donghua").hide()
                        } else {
                            var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";
                            getSwiperDatat()
                            function getSwiperDatat() {
                                var r = [
                                    "particularsofBorrowing",
                                    {
                                        "borrow_id":rs.result.data.borrow_id           //借款Id
                                    }
                                ];

                                var json = api.JsonpArr(r);
                                api.call(json, api_url).done(function (rs) {
                                    if (rs.error) {
                                        layer.msg(rs.error.message, {time:2000});
                                        $(".donghua").hide()
                                    } else {
                                        $(".donghua").hide()
                                        window.location.href = "#jiekuanzhong"
                                    }
                                })
                            }
                        }
                    })
                }

                }
            })

    }

    return {
        render: render
    }
})
