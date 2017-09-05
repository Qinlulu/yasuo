define(["jquery","pageUrl","./headers", "public","layer",
        "text!../str/huankuanjilu.html", "css!../css/huankuanjilu.css", "css!../css/layer.css"],
    function ($,pageUrl,header,mc,layer, html) {
    function render() {
        $(".main").html(html);
        header.render("借款详情")
        $(".donghua").show()
        var api_url = pageUrl.render()+ ".xinyongjinku.com/passport/order.php?c=index";
        getSwiperDatatt()
        function getSwiperDatatt() {
            var r = [
                "particularsofBorrowing",
                {
                    "borrow_id": window.location.href.split("=")[1]       //借款Id
                }
            ];
            var json = api.JsonpArr(r);
            api.call(json, api_url).done(function (rs) {
                if (rs.error) {
                    layer.msg(rs.error.message, {time:2000});
                    $(".donghua").hide()
                } else {
                    var data=rs.result.data
                    var hes="<h1>"+data.amount+"</h1><h2>"+data.order_status_name+"</h2>"
                    var cot = `<ul>
                            <li><span>借款金额</span><i>${data.amount}</i></li>
                            <li><span>到账金额</span><i>${data.arrivalamount}</i></li>
                        </ul>
                        <ul>
                            <li><span>到期时间</span><i>${data.plan_repay_time}</i></li>
                            <li><span>还款时间</span><i>${data.real_repay_time}</i></li>
                        </ul>
                        <ul>
                            <li><span>银行卡号</span><i>${data.embodimentcard}</i></li>
                            <li><span>借款时间</span><i>${data.create_time}</i></li>
                        </ul>`

                    $(".tittle").html(hes)
                    $(".conts").html(cot)
                    $(".donghua").hide()
                }
            })
        }
    }
    return {
        render: render
    }
})
