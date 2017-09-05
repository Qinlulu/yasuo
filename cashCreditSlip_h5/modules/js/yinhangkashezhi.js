define(["jquery","pageUrl", "./headers","public","layer",
        "text!../str/yinhangkashezhi.html", "css!../css/yinhangkashezhi.css", "css!../css/layer.css"],
    function ($,pageUrl,header, mc,layer,html) {
    function render() {
        $(".main").html(html);
        header.render("银行卡设置")
        $(".head i").css("display","block")
        //点击更多弹框提示
        $(".head i").on("click",function(){
        	$(".zhezhao1").show()
        	$(".cont1").show()
        })
        $(".cont1 .close").on("click",function(){
        	 	$(".zhezhao1").hide()
        	    $(".cont1").hide()
        	})
        
        var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first";
        getSwiperDatast()
        function getSwiperDatast() {
            var r = ["index", {}];
            var json = api.JsonpArr(r);
            api.call(json, api_url).done(function (rs) {
                if (rs.error) {
                    layer.msg(rs.error.message, {time:2000});
                    $(".donghua").hide()
                } else {
                    $(".donghua").hide()
                    var everydata = rs.result.data
                    if (everydata.credit_status == 0) {
                        if (everydata.information_step == 0) {
                            window.location.href = "#renzhengshiming?system=1"
                        } else if (everydata.information_step == 1) {
                            window.location.href = "#renzhenggeren?system=1"
                        } else if (everydata.information_step == 2) {
                            window.location.href = "#renzhengshouji?system=1"
                        } else if (everydata.information_step == 3) {
                            if (everydata.credit_status != 1) {
                                window.location.href = "#shenhez"
                            }
                        } /*else if (everydata.information_step == 4) {
                            if (everydata.credit_status != 1) {
                                window.location.href = "#shenhez"
                            }
                        }*/
                    } else if (everydata.credit_status == 2) {
                        window.location.href = "#shenhes"
                    } else {
                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";
                        getSwiperDatas()
                        function getSwiperDatas() {
                            var r = ["bankCradList"];
                            var json = api.JsonpArr(r);
                            api.call(json, api_url).done(function (rs) {
                                if (rs.error) {
                                    $(".dlst").html("")
                                                                
                                } else {
                                    var str1 = rs.result.data[0].bank_card
                                    var names=str1.substring(0, 4) + "****" + str1.substring((str1.length-4), str1.length)

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
                                    $(".button").hide()
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
