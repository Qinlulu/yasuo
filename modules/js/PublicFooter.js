define ( [ "jquery" ,"pageUrl", "public" , "text!modules/str/PublicFooter.html"] ,
    function ( $ ,pageUrl, mc , html ) {
        function render () {
            $ ( "footer" ).html ( html );
            $ ( "#YSF-BTN-HOLDER" ).hide ();
            $ ( ".layer-3" ).hide ();
            //定义所有背景图片的路径
            var aImagesSrc = [
                [ "https://imagecdn.xinyongjinku.com/wechat/modules/images/jiekuan_icon@v1.1.0.png" ,
                    "https://imagecdn.xinyongjinku.com/wechat/modules/images/jiekuan_icon1@v1.1.0.png"
                ] ,
                [ "https://imagecdn.xinyongjinku.com/wechat/modules/images/huankuan_icon@v1.1.0.png" ,
                    "https://imagecdn.xinyongjinku.com/wechat/modules/images/huankuan_icon1@v1.1.0.png"
                ] ,
                [ "https://imagecdn.xinyongjinku.com/wechat/modules/images/jinku_cion@v1.1.0.png" ,
                    "https://imagecdn.xinyongjinku.com/wechat/modules/images/jinku_cion1@v1.1.0.png"
                ] ,
                [ "https://imagecdn.xinyongjinku.com/wechat/modules/images/wode_icon@v1.1.0.png" ,
                    "https://imagecdn.xinyongjinku.com/wechat/modules/images/wode_icon1@v1.1.0.png"
                ]
            ]

            //设置背景图片
            function fnBackground () {
                for ( var i = 0 ; i < $ ( ".PublicFooter a" ).length ; i++ ) {
                    $ ( ".PublicFooter p" ).eq ( i ).css ( {
                        "background" : "url('" + aImagesSrc[i][0] + "')" ,
                        "background-size" : "cover"
                    } )
                    var INDEX = $ ( ".PublicFooter a.clicked" ).index ()
                    $ ( ".PublicFooter p" ).eq ( INDEX ).css ( {
                        "background" : "url('" + aImagesSrc[ INDEX ][ 1 ] + "')" ,
                        "background-size" : "cover"
                    } )

                }
            }
            fnBackground ()

            $ ( ".PublicFooter a" ).on ( "click" , function () {
                $(".main").css("height","100%")
                $ ( this ).addClass ( "clicked" ).siblings().removeClass ( "clicked" )
                fnBackground ()
            } )

            $ ( ".huans" ).on ( "click" , function () {
                $ ( ".donghua" ).show ()
                //判断是否登录
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                getSwiperData ()

                function getSwiperData () {
                    var r = [ "loginStatus" ];
                    var json = api.JsonpArr ( r );
                    api.call ( json , api_url ).done ( function ( rs ) {
                        if ( rs.error ) {

                        } else {
                            $ ( ".donghua" ).hide ()
                            if ( rs.result.status == 0 ) {
                                window.location.href = "#RegistrationPage"
                            } else {
                                $ ( ".donghua" ).show ()
                                var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first";
                                getSwiperDatas ()

                                function getSwiperDatas () {
                                    var r = [ "index" , {} ];
                                    var json = api.JsonpArr ( r );
                                    api.call ( json , api_url ).done ( function ( rs ) {
                                        if ( rs.error ) {
                                            alert ( rs.error.message )
                                            $ ( ".donghua" ).hide ()
                                        } else {
                                            $ ( ".donghua" ).hide ()
                                            var everydata = rs.result.data
                                            if ( everydata.credit_status == 0 ) {
                                                if ( everydata.information_step == 0 ) {
                                                    window.location.href = "#AuthenticationIdentityCard" //renzhengshiming
                                                } else if ( everydata.information_step == 1 ) {
                                                    window.location.href = "#AuthenticationInformation"  //renzhenggeren
                                                } else if ( everydata.information_step == 2 ) {
                                                    window.location.href = "#AuthenticationPhoneNumber"//renzhengshouji
                                                } else if ( everydata.information_step == 3 ) {
                                                    window.location.href = "#AuthenticationSesameScore"  //renzhengzhima
                                                } else if ( everydata.information_step == 4 ) {
                                                    if ( everydata.credit_status != 1 ) {
                                                        window.location.href = "#InAudit"   //shenhez
                                                    } else {
                                                        //判断是否有借款记录
                                                        var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";
                                                        getSwiperDatat ()

                                                        function getSwiperDatat () {
                                                            var r = [ "listofBorrowings" ];
                                                            var json = api.JsonpArr ( r );
                                                            api.call ( json , api_url ).done ( function ( rs ) {
                                                                $ ( ".contss" ).html ( "" )
                                                                if ( rs.error ) {
                                                                    alert ( rs.error.message )
                                                                    $ ( ".donghua" ).hide ()
                                                                } else {
                                                                    $ ( ".donghua" ).hide ()
                                                                    if ( rs.result.data.totalmoney.totalmoney == 0 ) {
                                                                        window.location.href = "#UnPayment"  //huankuanwei
                                                                    } else {
                                                                        window.location.href = "#RepaymentPage"   //woyaohuankuan
                                                                    }
                                                                }
                                                            } )
                                                        }
                                                    }
                                                }
                                            } else if ( everydata.credit_status == 2 ) {
                                                window.location.href = "#FailAudit"  //shenhes
                                            } else {
                                                var api_url = pageUrl.render()+".xinyongjinku.com/passport/order.php?c=index";
                                                getSwiperDatats ()

                                                function getSwiperDatats () {
                                                    var r = [ "listofBorrowings" ];
                                                    var json = api.JsonpArr ( r );
                                                    api.call ( json , api_url ).done ( function ( rs ) {
                                                        $ ( ".contss" ).html ( "" )
                                                        if ( rs.error ) {
                                                            alert ( rs.error.message )
                                                            $ ( ".donghua" ).hide ()
                                                        } else {
                                                            $ ( ".donghua" ).hide ()
                                                            if ( rs.result.data.totalmoney.totalmoney == 0 ) {
                                                                window.location.href = "#UnPayment"   //huankuanwei
                                                            } else {
                                                                window.location.href = "#RepaymentPage"   //woyaohuankuan
                                                            }
                                                        }
                                                    } )
                                                }
                                            }
                                        }
                                    } )
                                }
                            }
                        }
                    } )
                }

            } )

        }

        return {
            render : render
        }
    } )
