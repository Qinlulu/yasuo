define(["jquery","pageUrl", "touch", "PublicFooter",
        "PublicAdvertis", "public", "JudgeLimit",
        "text!modules/str/HomePage.html"

    ],
    function($, pageUrl,touch, footer, tankuang, mc, rule, html) {
        function render() {

            $(".main").html(html);
            footer.render()
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first";
            getSwiperDatauu();
            function getSwiperDatauu() {
                var r = ["newNotice"];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function(rs) {
                    console.log(rs)
                    if(rs.error) {

                    } else {
                        if(!rs.result.data.notice_status) {
                            /*window.location.href = "#zhucezhang"*/
                        } else {
                            $(".header .inform img").attr("src", "https://imagecdn.xinyongjinku.com/wechat/modules/images/weidu@v1.1.1.png")
                        }
                    }

                })

            }
            //添加通知页面

            $(".inform").on("click", function() {
                window.location.href = "#"
            })

            if(localStorage.getItem("tankuang")) {} else {
                tankuang.render();
                localStorage.setItem("tankuang", "tankuang")
            }

            (function() {
                if(localStorage.getItem("tokenId")) {
                    $tokenId = localStorage.getItem("tokenId")
                } else {
                    var $tokenId = 'wanglibank' + "-" + new Date().getTime() + "-" + (Math.random() * 1000).toString(16).substr(2);
                    localStorage.setItem("tokenId", $tokenId)
                }

                _fmOpt = {
                    partner: 'wanglibank',
                    appName: 'wanglibank_web',
                    token: $tokenId
                };
                var cimg = new Image(1, 1);
                cimg.onload = function() {
                    _fmOpt.imgLoaded = true;
                };
                var tokenId = 'wanglibank' + "-" + new Date().getTime() + "-" + Math.random().toString(16).substr(2);
                cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=wanglibank&appName=wanglibank_web&tokenId=" + _fmOpt.token;
                var fm = document.createElement('script');
                fm.type = 'text/javascript';
                fm.async = true;
                fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/fm.js?ver=0.1&t=' + (new Date().getTime() / 3600000).toFixed(0);
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(fm, s);
            })();

            $(".donghua").show()
            //判断所有的基本信息
            //是否授信等 授信到哪里
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first";
            var everydata = {}
            getSwiperData()

            function getSwiperData() {
                var r = ["index", {}];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function(rs) {
                    if(rs.error) {

                    } else {
                        everydata = rs.result.data
                        if(everydata.credit_status == 2) {
                            $(".renzheng").html("认证失败")
                        } else if(everydata.information_step == 4 && everydata.credit_status == 1) {
                            $(".renzheng").html("立即借款")
                            $(".ka").css("background", "url('https://imagecdn.xinyongjinku.com/wechat/modules/images/zhu1.png') center")
                            $(".ka").css("background-size", "cover")
                        } else if(everydata.information_step == 4) {
                            $(".renzheng").html("审核中")
                        } else {
                            $(".renzheng i strong").html(everydata.information_step)
                        }

                        if(everydata.isLogin == 0) {
                            $(".div").css("display", "none")
                            var str = `
                                <span>500</span>
                                <span>借款金额/元</span>
                                <span class="r1">1000</span>
                              `
                            var strs = `
                                    <span>7</span>
                                    <span>借款天数/天</span>
                                    <span class="r2">30</span>
                            `
                            $(".ds").html(str)
                            $(".dss").html(strs)
                            $(".xian i").html(everydata.credit_amount)
                            $(".xian span").html("")
                            $(".xians span").html("")
                            $(".xians i").html("30")
                            $(".r1").html(everydata.credit_amount)

                        } else {
                            $(".div").css("display", "block")
                            $(".r1").html(everydata.credit_amount + "元")
                            $(".xian i").html(everydata.credit_amount)
                        }

                        $(".ka .ulsw .t").eq(0).html(everydata.remain_amount)
                        $(".ka .ulsw .t").eq(1).html(everydata.credit_amount)
                        $(".content .uls li").eq(1).find("i").html(everydata.credit_amount)
                        $(".donghua").hide()
                        if(everydata.remain_amount == "") {
                            everydata.remain_amount = 0
                        }

                        if(3000 <= everydata.credit_amount && 5000 > everydata.credit_amount) {
                            $(".ka").css("background", "url('https://imagecdn.xinyongjinku.com/wechat/modules/images/zhu2.png') center")
                            $(".ka").css("background-size", "cover")
                        }
                        if(5000 <= everydata.credit_amount) {
                            $(".ka").css("background", "url('https://imagecdn.xinyongjinku.com/wechat/modules/images/zhu3.png') center")
                            $(".ka").css("background-size", "cover")
                        }
                        //利息
                        var lixi = getInterect(($(".xian i ").html() * 1), ($(".xians i").html() * 1)) + "元"
                        $(".content .uls li").eq(0).find("span").eq(1).html(lixi)

                        function getInterect(money, day) {
                            return(money * (everydata.rate / 30) * day).toFixed(2);
                        }

                        if(everydata.credit_amount == 0) {
                            $(".xian i ").html('1000')
                            $(".r1").html('1000／元')
                            $(".content .uls li").eq(1).find("i").html("1000")
                            var lixi = getInterect(($(".xian i ").html() * 1), ($(".xians i").html() * 1)) + "元"
                            $(".content .uls li").eq(0).find("span").eq(1).html(lixi)
                        }

                        $(".huakuai").on('touchstart', function(e) {
                            var touch = e.originalEvent.changedTouches[0];
                            var startL = touch.pageX
                            var startX = Math.round($(".huakuai").offset().left - $(".jindutiao").offset().left)
                            $(".huakuai").on("touchmove", function(e) {
                                var touch = e.originalEvent.changedTouches[0];
                                var moveL = touch.pageX
                                var moveX = moveL - startL
                                var width = (startX * 1 + moveX * 1)
                                var position = width + 3 * 1
                                var xian;
                                if(everydata.credit_amount == 0) {
                                    xian = 1000
                                    return
                                } else {
                                    xian = Math.round(500 * 1 + (((everydata.credit_amount * 1 - 500) / ($(".jindutiao").width() * 1)) * (width * 1)))
                                }

                                if(xian < 490) {
                                    $(".huakuai").css("left", "-2px")
                                } else if(xian < (everydata.credit_amount * 1 - (((everydata.credit_amount * 1 - 500) / ($(".jindutiao").width() * 1)) * 15))) {
                                    $(".huakuai").css("left", width + "px")
                                    $(".xian").css("left", (width - 10) + "px")
                                    $(".jindutiaos").css("width", position + "px")
                                } else {

                                }

                                if(everydata.credit_amount == 0) {
                                    $(".xian i ").html('0')
                                } else {
                                    rule.render(xian, everydata)
                                }

                                //利息
                                var lixi = getInterect(($(".xian i ").html() * 1), ($(".xians i").html() * 1)) + "元"
                                $(".content .uls li").eq(0).find("span").eq(1).html(lixi)

                                function getInterect(money, day) {
                                    return(money * (everydata.rate / 30) * day).toFixed(2);
                                }

                                $(".huakuai").on("touchend", function() {
                                    $(".huakuai").unbind('mousemove');
                                })
                            })
                        })
                        //移动端 滑块的 功能 touch
                        $(".huakuais").on("touchstart", function(e) {
                            var touch = e.originalEvent.changedTouches[0];
                            var startL = touch.pageX
                            var startX = Math.round($(".huakuais").offset().left - $(".jindutiao").offset().left)
                            $(".huakuais").on("touchmove", function(e) {
                                var touch = e.originalEvent.changedTouches[0];
                                var moveL = touch.pageX
                                var moveX = moveL - startL
                                var width = (startX * 1 + moveX * 1)
                                var position = width + 3 * 1
                                var xian = Math.round(7 * 1 + ((26 / ($(".jindutiao").width() * 1)) * (width * 1)))
                                if(xian > 31 || xian < 7) {} else {
                                    $(".xians i").html(xian)
                                    $(".huakuais").css("left", width + "px")
                                    $(".xians").css("left", (width - 10) + "px")
                                    $(".jindutiaoss").css("width", position + "px")
                                }
                                if(xian < 7) {
                                    $(".xians i").html("7")
                                } else if(xian > 30) {
                                    $(".xians i").html("30")
                                }

                                //利息
                                var lixi = getInterect(($(".xian i ").html() * 1), ($(".xians i").html() * 1)) + "元"
                                $(".content .uls li").eq(0).find("span").eq(1).html(lixi)

                                function getInterect(money, day) {
                                    return(money * (everydata.rate / 30) * day).toFixed(2);
                                }

                                $(".huakuais").on("touchend", function() {
                                    $(".huakuais").unbind('mousemove');
                                })
                            })
                        })

                        $(".ka ol li").eq(0).html(everydata.card.number)
                        $(".ka ol li").eq(1).find("i").html(everydata.borrowSuccessNum)
                    }
                });
            }



            $(".ka").on("click", function() {
                renzheng()
            })

            $(".shenjie").on("click", function() {
                renzheng(this)
            })

            function renzheng(that) {
                if(everydata.credit_status == 1) {
                    var jiekuanxi = {
                        daozhang: $(".content .uls li").eq(1).find("span").eq(1).find("i").html(),
                        shijian: $(".xians i").html(),
                        lixi: $(".content .uls li").eq(0).find("span").eq(1).html()
                    }
                    sessionStorage.setItem("jiekuanxis", JSON.stringify(jiekuanxi))
                    sessionStorage.removeItem("chenggong")
                    window.location.href = "#LoanPage"  //jiekuanxinxi
                } else if(everydata.credit_status == 0) {
                    if(everydata.information_step == 0) {
                        if(that) {
                            $(".renzhengs").show()
                            $(".renzhengs .lists span").eq(0).on("click", function() {
                                $(".renzhengs").hide()
                            })
                            $(".renzhengs .lists span").eq(1).on("click", function() {
                                $(".renzhengs").hide()
                                window.location.href = "#AuthenticationIdentityCard"
                            })

                        } else {
                            window.location.href = "#AuthenticationIdentityCard"
                        }
                    } else if(everydata.information_step == 1) {
                        window.location.href = "#AuthenticationInformation"
                    } else if(everydata.information_step == 2) {
                        window.location.href = "#AuthenticationPhoneNumber"
                    } else if(everydata.information_step == 3) {
                        window.location.href = "#AuthenticationSesameScore"
                    } else if(everydata.information_step == 4) {
                        if(everydata.credit_status != 1) {
                            window.location.href = "#InAudit"  //shenhez
                        } else {
                            window.location.href = "#LoanPage" //jiekuanxinxi
                        }
                    }
                } else if(everydata.credit_status == 2) {
                    $(".renzheng").html("认证失败")
                    window.location.href = "#FailAudit"  //shenhes
                }
            }

        }

        return {
            render: render
        }
    })