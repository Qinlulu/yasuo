define(["jquery", "pageUrl", "PublicHead", "public", "layer", "text!modules/str/BankCardSettings.html"],
    function ($, pageUrl, header, mc, layer, html) {
        function render() {
            $(".main").html(html);
            header.render("银行卡设置")
            /* $(".head i").css("display","block")
             //点击更多弹框提示
             $(".head i").on("click",function(){
                 $(".zhezhao1").show()
                 $(".cont1").show()


             })*/
            /* $(".cont1 .close").on("click",function(){
                      $(".zhezhao1").hide()
                     $(".cont1").hide()
                 })*/

            var api_url = pageUrl.render() + ".xinyongjinku.com/passport/index.php?c=first";
            getSwiperDatast()

            function getSwiperDatast() {
                var r = ["index", {}];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        layer.msg(rs.error.message, {time:1000});
                        $(".donghua").hide()
                    } else {
                        $(".donghua").hide()
                        var everydata = rs.result.data
                        if (everydata.credit_status == 0) {
                            if (everydata.information_step == 0) {
                                window.location.href = "#AuthenticationIdentityCard"
                            } else if (everydata.information_step == 1) {
                                window.location.href = "#AuthenticationInformation"
                            } else if (everydata.information_step == 2) {
                                window.location.href = "#AuthenticationPhoneNumber"
                            } else if (everydata.information_step == 3) {
                                window.location.href = "#AuthenticationSesameScore"
                            } else if (everydata.information_step == 4) {
                                if (everydata.credit_status != 1) {
                                    window.location.href = "#InAudit"
                                }
                            }
                        } else if (everydata.credit_status == 2) {
                            window.location.href = "#FailAudit"
                        } else {
                            var api_url = pageUrl.render() + ".xinyongjinku.com/passport/bank.php?c=account";
                            getSwiperDatas()

                            function getSwiperDatas() {
                                var r = ["bankCradList"];
                                var json = api.JsonpArr(r);
                                api.call(json, api_url).done(function (rs) {
                                    if (rs.error) {

                                        $(".dlst").html("")
                                        /*如果没有绑定银行卡，button按钮的文案是绑定银行卡*/
                                        $(".button button a").html("+绑定银行卡")

                                    } else {
                                        var str1 = rs.result.data[0].bank_card
                                        var names = str1.substring(0, 4) + "****" + str1.substring((str1.length - 4), str1.length)

                                        var str = `
                                             <dl>
                                                <dt>
                                                    <span></span>
                                                </dt>
                                                <dd>
                                                    <p>${rs.result.data[0].bank_name}</p>
                                                    <p>储蓄卡</p>
                                                    <p>${names}</p>
                                                </dd>
                                            </dl>
                                            `
                                        $(".dlst").html(str)
                                        //$(".button button a").html("+更换绑定银行卡")
                                        sessionStorage.setItem("hao", rs.result.data[0].bank_card)

                                    }
                                })

                            }
                        }


                    }
                })
            }


        }

        return {
            render: render
        }
    })
