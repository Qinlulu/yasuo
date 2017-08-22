define ( [ "jquery" ,"pageUrl", "PublicHead" , "public" , "text!modules/str/ImmediatePayment.html"] ,
    function ( $ ,pageUrl, header , mc , html ) {
        function render () {
            $ ( ".main" ).html ( html );
            $ ( ".donghua" ).show ()
            header.render ( "我要还款" , "remove" )
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";

            getSwiperDataste ()

            function getSwiperDataste () {
                var r = [
                    "repaymentDetails" ,
                    {
                        "borrow_id" : window.location.href.split ( "=" )[ 1 ]
                    }
                ]
                var json = api.JsonpArr ( r );
                api.call ( json , api_url ).done ( function ( rs ) {
                    if ( rs.error ) {
                        alert ( rs.error.message )
                        $ ( ".donghua" ).hide ()
                    } else {
                        var data = rs.result.data
                        if ( data.is_overdue == 0 ) {
                            var str = `
                    <div class="dlsts">
                        <div>
                            <p>待还金额(元)</p>
                            <span>${data.amount}</span>
                        </div>
                        <div>
                            <p>剩余还款期限（天）</p>
                            <span>${data.daysremaining}</span>
                        </div>
                    </div>
                    <ul class="ulss">
                        <li><span>到期还款时间</span><span></span><span>${data.plan_repay_time}</span></li>
                        <li><span>借款编号</span> <span></span><span>${data.order_id}</span></li>
                        <li onclick="window.location.href='#yinhangkashezhi'">
                            <span>还款账号</span>
                            <span></span>
                            <span>
                                <strong class="tiaoba">请选择银行 </strong>
                                <i><img src="https://imagecdn.xinyongjinku.com/wechat/modules/images/youji.png" alt=""></i>
                            </span>
                        </li>
                    </ul>
                    `
                        } else if ( data.is_overdue == 1 ) {
                            var str = `
                    <div class="dlsts">
                        <div>
                            <p>待还金额(元)</p>
                            <span>${data.amount}</span>
                        </div>
                        <div>
                            <p>逾期天数（天）</p>
                            <span>${data.late_day}</span>
                        </div>
                    </div>
                    <ul class="ulss">
                        <li class="liss"><span>逾期费用</span><span></span><span>${data.late_fee}</span></li>
                        <li><span>到期还款时间</span><span></span><span>${data.plan_repay_time}</span></li>
                        <li><span>借款编号</span> <span></span><span>${data.order_id}</span></li>
                        <li onclick="window.location.href='#yinhangkashezhi'" >
                            <span>还款账号</span>
                            <span></span>
                            <span>
                                <strong class="tiaoba">请选择银行 </strong>
                                <i><img src="https://imagecdn.xinyongjinku.com/wechat/modules/images/youji.png" alt=""></i>
                            </span>
                        </li>
                    </ul>
                    `
                        } else {
                            var str = ""
                        }
                        $ ( ".conts" ).html ( str )


                        sessionStorage.setItem ('amount',data.amount)

                        //获取还款金额
                        $ ( ".con .divs h2 strong" ).html ( data.amount )

                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/bank.php?c=account";

                        getSwiperDatas ()

                        function getSwiperDatas () {
                            var r = [ "bankCradList" ];
                            var json = api.JsonpArr ( r );
                            api.call ( json , api_url ).done ( function ( rs ) {
                                if ( rs.error ) {
                                    alert ( rs.error.message )
                                    $ ( ".donghua" ).hide ()
                                } else {
                                    $ ( ".donghua" ).hide ()
                                    //console.log(rs)
                                    $ ( ".tiaoba" ).html ( rs.result.data[ 0 ].bank_name )
                                    //获取手机号
                                    $ ( ".con .divs h3 strong" ).html ( rs.result.data[ 0 ].phone.substr ( rs.result.data[ 0 ].phone.length - 4 ) )
                                    //$ ( ".tiaoba" ).html ( rs.result.data[ 0 ].phone )

                                    $ ( ".tiaoba" ).parent ().parent ().on ( "click" , function () {
                                        window.location.href = "#yinhangkashezhi"
                                    } )

                                    $ ( ".lijihuan" ).on ( "click" , function () {
                                        $ ( ".donghua" ).show ()
                                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";

                                        getSwiperDatast ()
                                        sessionStorage.setItem ('card',rs.result.data[ 0 ].bank_card)
                                        sessionStorage.setItem ('owner',rs.result.data[ 0 ].owner)
                                        sessionStorage.setItem ('bank',$ ( ".ulss li" ).eq ( 1 ).find ( "span" ).eq ( 2 ).html () )
                                        function getSwiperDatast () {
                                            var r = [
                                                "prepaymentSendsms" ,
                                                {
                                                    "amount" : $ ( ".dlsts div" ).eq ( 0 ).find ( "span" ).html () , //还款金额
                                                    "orderid" : $ ( ".ulss li" ).eq ( 1 ).find ( "span" ).eq ( 2 ).html () ,//订单编号
                                                    "bankcard" : rs.result.data[ 0 ].bank_card ,//银行卡号
                                                    "bankcardowner" : rs.result.data[ 0 ].owner//银行卡所属者姓名
                                                }
                                            ];
                                            var json = api.JsonpArr ( r );
                                            console.log(json)
                                            api.call ( json , api_url ).done ( function ( rs ) {
                                                if ( rs.error ) {
                                                    alert ( rs.error.message )
                                                    $ ( ".donghua" ).hide ()
                                                } else {
                                                    $ ( ".donghua" ).hide ()
                                                    $ ( ".tankuang" ).css ( "display" , "block" )
                                                    var time;
                                                    var num = 60;
                                                    time = setInterval ( function () {
                                                        num--
                                                        $ ( ".daoji" ).html ( num + "s" )
                                                        $ ( ".daoji" ).css ( "color" , "#ccc" )
                                                        if ( num == 0 ) {
                                                            clearInterval ( time );
                                                            $ ( ".daoji" ).html ( "重新发送" )
                                                            $ ( ".daoji" ).css ( "color" , "#666" )
                                                        }
                                                    } , 1000 )

                                                    sessionStorage.setItem("orderid",rs.result.data.orderid)
                                                    $(".daoji").on("click", function() {
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

                                                            var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";

                                                            getSwiperData()
                                                            function getSwiperData() {
                                                                var r = ["prepaymentSendsms",

                                                                    {

                                                                        "amount":sessionStorage.getItem("amount"), //还款金额
                                                                        "orderid":sessionStorage.getItem("bank"),//订单编号
                                                                        "bankcard":sessionStorage.getItem("card"),//银行卡号
                                                                        "bankcardowner":sessionStorage.getItem("owner")//银行卡所属者姓名

                                                                    }
                                                                ];
                                                                var json = api.JsonpArr(r);
                                                                console.log(json)
                                                                api.call(json, api_url).done(function (rs) {
                                                                    if (rs.error) {
                                                                        alert(rs.error.message)
                                                                        clearInterval(time);
                                                                        $(".daoji").html("重新发送")
                                                                        $(".daoji").css("color", "#666")
                                                                    } else {
                                                                        sessionStorage.setItem("orderid",rs.result.data.orderid)

                                                                    }

                                                                });
                                                            }
                                                        }

                                                    })

                                                    $ ( ".quxiao" ).on ( "click" , function () {
                                                        $ ( ".tankuang" ).css ( "display" , "none" )
                                                    } )

                                                    $ ( ".queding" ).on ( "click" , function () {
                                                        $ ( ".donghua" ).show ()
                                                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";

                                                        getSwiperDatass ()

                                                        function getSwiperDatass () {
                                                            var r = [
                                                                "repaymentOfperfirmance" ,
                                                                {
                                                                    "validatecode" : $ ( ".yans" ).val () ,   //预还款验证码
                                                                    "orderid" : sessionStorage.getItem("orderid")  //订单编号
                                                                }
                                                            ];
                                                            var json = api.JsonpArr ( r );
                                                            api.call ( json , api_url ).done ( function ( rs ) {
                                                                if ( rs.error ) {
                                                                    alert ( rs.error.message )
                                                                    //如果银行卡余额不足强返回
                                                                    /*if(rs.){

                                                                     }*/
                                                                    /*
                                                                     $(".qiehuanka").show(0,function(){
                                                                     $(".qiehuanka .qiehuan").slideDown(300)
                                                                     })

                                                                     $(".qiehuanka .tittle .remo").on("click",function(){
                                                                     $(".qiehuanka .qiehuan").slideUp(300,function(){
                                                                     $(".qiehuanka").hide()
                                                                     })

                                                                     })
                                                                     */

                                                                    $ ( ".donghua" ).hide ()
                                                                } else {
                                                                    $ ( ".tankuang" ).css ( "display" , "none" )
                                                                    $ ( ".donghua" ).hide ()
                                                                    window.location.href = "#huankuanzhong"
                                                                }
                                                            } )
                                                        }

                                                    } )

                                                }
                                            } )
                                        }

                                    } )


                                }
                            } )
                        }
                    }
                } )
            }


        }

        return {
            render : render
        }
    } )
