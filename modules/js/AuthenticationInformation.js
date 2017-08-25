define(["jquery", "pageUrl", "public","layer", "text!modules/str/AuthenticationInformation.html"],
    function ($, pageUrl, mc,layer, html) {
    function render() {
        $(".main").html(html);
        $(".back").on("click", function () {
            window.location.href = "#HomePage"
        })
        $(".cont ul li").eq(2).on("click", function () {
            $(this).find("span").eq(2).addClass("dianjile")
            tanchu([
                {"text": "1-6个月<mark style='display:none'>1</mark>"},
                {"text": "6-12个月<mark style='display:none'>2</mark>"},
                {"text": "1-2年<mark style='display:none'>3</mark>"},
                {"text": "3年及以上<mark style='display:none'>4</mark>"}
            ])
        })
        $(".cont ul li").eq(3).on("click", function () {
            $(this).find("span").eq(2).addClass("dianjile")
            tanchu([
                {"text": "初中及以下<mark style='display:none'>1</mark>"},
                {"text": "高中<mark style='display:none'>2</mark>"},
                {"text": "专科<mark style='display:none'>3</mark>"},
                {"text": "本科<mark style='display:none'>4</mark>"},
                {"text": "硕士及以上<mark style='display:none'>5</mark>"}
            ])
        })
        $(".cont ul li").eq(4).on("click", function () {
            $(this).find("span").eq(2).addClass("dianjile")
            tanchu([
                {"text": "未婚<mark style='display:none'>1</mark>"},
                {"text": "已婚<mark style='display:none'>2</mark>"},
                {"text": "离婚<mark style='display:none'>3</mark>"},
                {"text": "丧偶<mark style='display:none'>4</mark>"}
            ])
        })
        $(".cont ul li").eq(5).on("click", function () {
            $(this).find("span").eq(2).addClass("dianjile")
            tanchu([
                {"text": "1000元以下<mark style='display:none'>1</mark>"},
                {"text": "1000-3000元<mark style='display:none'>2</mark>"},
                {"text": "3000-5000元<mark style='display:none'>3</mark>"},
                {"text": "5000-7000元<mark style='display:none'>4</mark>"},
                {"text": "7000-10000元<mark style='display:none'>5</mark>"},
                {"text": "10000元以上<mark style='display:none'>6</mark>"}
            ])
        })
        function tanchu(data) {
            var str = ""
            str += '<div class="zhezhao"><div class="pop"><div class="tittle"><span class="remove">取消</span><span></span><span class="true">确定</span></div><ul class="popslid">'
            for (var i = 0; i < data.length; i++) {
                str += '<li>' + data[i].text + '</li>'
            }
            str += '</ul></div></div>'
            $('body').append($(str))
            function remove() {
                $(".zhezhao").remove()
                $(".dianjile").removeClass("dianjile")
            }

            $(".remove").on("click", function () {
                remove()
            })
            $(".true").on("click", function () {
                $(".dianjile").prev().html($(".ost").html())
                remove()
            })
            $(".popslid li").on("click", function () {
                $(this).addClass("ost").siblings().removeClass("ost")
            })
        }

        //详细居住地经纬度
        $(".cont ul li").eq(0).find("input").blur(function () {
            var geocoder = new AMap.Geocoder({});
            geocoder.getLocation($(this).val(), function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    var geocode = result.geocodes;
                    var lnglatXY = [geocode[0].location.getLng(), geocode[0].location.getLat()]
                    geocoder.getAddress(lnglatXY, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            //根据经纬度获取位置信息
                            var address = result.regeocode; //返回地址描述
                            console.log(address)
                            var juzhudiwet = {
                                shi: address.addressComponent.city,
                                xian: address.addressComponent.district,
                                sheng: address.addressComponent.province,
                                levels: address.level,
                                label: address.formattedAddress,
                                weidu: geocode[0].location.getLat(),
                                jingdu: geocode[0].location.getLng()
                            }
                            sessionStorage.setItem("juzhudiweiit", JSON.stringify(juzhudiwet))
                        }
                    });
                }
            });
        })
        //详细详细地经纬度
        $(".cont ul li").eq(1).find("input").blur(function () {
            var atrs = "";
            atrs = $(".cont ul li").eq(0).find("input").val() + $(this).val()
            var geocoder = new AMap.Geocoder({});
            geocoder.getLocation(atrs, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    var geocode = result.geocodes;
                    var lnglatXY = [geocode[0].location.getLng(), geocode[0].location.getLat()]
                    geocoder.getAddress(lnglatXY, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            //根据经纬度获取位置信息
                            var address = result.regeocode; //返回地址描述
                            var juzhudiwe = {
                                shi: address.addressComponent.city,
                                xian: address.addressComponent.district,
                                sheng: address.addressComponent.province,
                                levels: address.level,
                                label: address.formattedAddress,
                                weidu: geocode[0].location.getLat(),
                                jingdu: geocode[0].location.getLng()
                            }
                            sessionStorage.setItem("juzhudiweii", JSON.stringify(juzhudiwe))
                        }
                    });
                }
            });
        })
        var yemm = JSON.parse(sessionStorage.getItem("yem"))
        if (yemm) {
            $(".cont ul li").eq(0).find("input").val(yemm.juzhu)       //详细地址
            $(".cont ul li").eq(1).find("input").val(yemm.currentaddressdetail)       //详细地址
            $(".cont ul li").eq(2).find("span").eq(1).html(yemm.dwelltime)              //居住时长
            $(".cont ul li").eq(3).find("span").eq(1).html(yemm.education)               //教育程度
            $(".cont ul li").eq(4).find("span").eq(1).html(yemm.marriage)                //婚姻状况
            $(".cont ul li").eq(5).find("span").eq(1).html(yemm.income)
        }
        function yemian() {
            var yem = {
                juzhu: $(".cont ul li").eq(0).find("input").val(),
                currentaddressdetail: $(".cont ul li").eq(1).find("input").val(),  //详细地址
                dwelltime: $(".cont ul li").eq(2).find("span").eq(1).html(),              //居住时长
                education: $(".cont ul li").eq(3).find("span").eq(1).html(),               //教育程度
                marriage: $(".cont ul li").eq(4).find("span").eq(1).html(),                //婚姻状况
                income: $(".cont ul li").eq(5).find("span").eq(1).html()                //
            }
            sessionStorage.setItem("yem", JSON.stringify(yem))
        }

        $(".golianxiren").on("click", function () {
            yemian()
            window.location.href = "#ContactInformation"
        })
        $(".gogongzuo").on("click", function () {
            yemian()
            window.location.href = "#JobInformation"
        })
        var lianxirens = JSON.parse(sessionStorage.getItem("lianxiren"))
        //获取的工作信息
        var gongzuos = JSON.parse(sessionStorage.getItem("gongzuo"))
        if (!lianxirens) {
            $(".golianxiren a span").eq(1).html("未填写")
        } else {
            $(".golianxiren a span").eq(1).html("已填写")
        }
        if (!gongzuos) {
            $(".gogongzuo a span").eq(1).html("未填写")
        } else {
            $(".gogongzuo a span").eq(1).html("已填写")
        }
        $(".goshouji").on("click", function () {
            if ($(".cont ul li").eq(0).find("input").val() == "") {
                layer.msg("将填写居住地址", {time:2000});
                return
            }
            if ($(".cont ul li").eq(1).find("input").val() == "") {
                layer.msg("将填写详细居住地址", {time:2000});
                return
            }
            if ($(".cont ul li").eq(2).find("span").eq(1).html() == "") {
                layer.msg("请填写居住时长", {time:2000});
                return
            }
            if ($(".cont ul li").eq(3).find("span").eq(1).html() == "") {
                layer.msg("请填写教育程度", {time:2000});
                return
            }
            if ($(".cont ul li").eq(4).find("span").eq(1).html() == "") {
                layer.msg("请填写婚姻状况", {time:2000});
                return
            }
            if ($(".cont ul li").eq(5).find("span").eq(1).html() == "") {
                layer.msg("请填写收入情况", {time:2000});
                return
            }
            //获取的联系人信息
            var lianxiren = JSON.parse(sessionStorage.getItem("lianxiren"))
            //获取的工作信息
            var gongzuo = JSON.parse(sessionStorage.getItem("gongzuo"))
            if (!lianxiren) {
                layer.msg("请填写联系人信息", {time:2000});
                return
            }
            if (!gongzuo) {
                layer.msg("请填写工作信息", {time:2000});
                return
            }
            var geocoder = new AMap.Geocoder({});
            //工作位置经纬度
            geocoder.getLocation(gongzuo.companyaddress, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    var geocode = result.geocodes;
                    var lnglatXY = [geocode[0].location.getLng(), geocode[0].location.getLat()]
                    geocoder.getAddress(lnglatXY, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            //根据经纬度获取位置信息
                            var address = result.regeocode; //返回地址描述
                            var gongsidingwei = {
                                shi: address.addressComponent.city,
                                xian: address.addressComponent.district,
                                sheng: address.addressComponent.province,
                                levels: address.level,
                                label: address.formattedAddress,
                                weidu: geocode[0].location.getLat(),
                                jingdu: geocode[0].location.getLng()
                            }
                            sessionStorage.setItem("gongsidingweii", JSON.stringify(gongsidingwei))
                        }
                    });
                }
            });
            //获取的工作位置的定位
            var gongsidingweis = JSON.parse(sessionStorage.getItem("gongsidingweii"))
            //获取的详细位置的定位
            var juzhudiweis = JSON.parse(sessionStorage.getItem("juzhudiweii"))
            //获取的居住位置的定位
            var juzhudiweist = JSON.parse(sessionStorage.getItem("juzhudiweiit"))
            if (!gongsidingweis) {
                layer.msg("正在解析公司位置", {time:2000});
                return
            }
            if (!juzhudiweis) {
                layer.msg("正在解析居住地位置", {time:2000});
                return
            }
            var api_url = pageUrl.render() + ".xinyongjinku.com/passport/user.php?c=account";
            getSwiperData()
            function getSwiperData() {
                var r = ["creditStepOne",
//                "isIdentify",
                    {
                        "information_step": 2,
                        "current_address": $(".cont ul li").eq(0).find("input").val()/* shoujiding.label*/,         //现居地址
                        "current_address_detail": $(".cont ul li").eq(1).find("input").val(),  //详细地址
                        "dwell_time": $(".cont ul li").eq(2).find("span").eq(1).find("mark").html(),              //居住时长
                        "education": $(".cont ul li").eq(3).find("span").eq(1).find("mark").html(),               //教育程度
                        "marriage": $(".cont ul li").eq(4).find("span").eq(1).find("mark").html(),                //婚姻状况
                        "income": $(".cont ul li").eq(5).find("span").eq(1).find("mark").html(),                  //收入情况
                        "company_industry": gongzuo.companyindustry,        //从事行业
                        "company_title": gongzuo.companytitle,           //工作岗位
                        "company_name": gongzuo.companyname,            //单位名称
                        "company_address": gongzuo.companyaddress,         //单位所在地
                        "company_phone": gongzuo.companyphone,           //单位电话
                        "user_relation": [
                            {
                                "level": 1,             //优先级
                                "relation": lianxiren.data.relation,          //与本人关系
                                "name": lianxiren.data.names,   //姓名
                                "mobile": lianxiren.data.mobile         //手机号
                            },
                            {
                                "level": 2,
                                "relation": lianxiren.data1.relation1,
                                "name": lianxiren.data1.name1,
                                "mobile": lianxiren.data1.mobile1
                            }
                        ],
                        "user_location": [
                            {
                                "type": 1,      //1手机当前定位 2工作公司定位  3居住地定位
                                "latitude": juzhudiweist.weidu,       //纬度  decimal(10,7)
                                "longitude": juzhudiweist.jingdu,      //经度 decimal(10,7)
                                "accuracy": 111111,   //精度
                                "altitude": "110",              //海拔高度
                                "province": juzhudiweist.sheng,             //省
                                "city": juzhudiweist.shi,                  //市
                                "county": juzhudiweist.xian,                //县
                                "label": juzhudiweist.label              //地点名称
                            },
                            {
                                "type": 2,      //1手机当前定位 2工作公司定位  3居住地定位
                                "latitude": gongsidingweis.weidu,       //纬度  decimal(10,7)
                                "longitude": gongsidingweis.jingdu,      //经度 decimal(10,7)
                                "accuracy": 111111,   //精度
                                "altitude": "110",              //海拔高度
                                "province": gongsidingweis.sheng,             //省
                                "city": gongsidingweis.shi,                  //市
                                "county": gongsidingweis.xian,                //县
                                "label": gongsidingweis.label              //地点名称
                            },
                            {
                                "type": 3,      //1手机当前定位 2工作公司定位  3居住地定位
                                "latitude": juzhudiweis.weidu,       //纬度  decimal(10,7)
                                "longitude": juzhudiweis.jingdu,      //经度 decimal(10,7)
                                "accuracy": 111111,   //精度
                                "altitude": "110",              //海拔高度
                                "province": juzhudiweis.sheng,             //省
                                "city": juzhudiweis.shi,                  //市
                                "county": juzhudiweis.xian,                //县
                                "label": juzhudiweis.label              //地点名称
                            }
                        ]
                    }];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        layer.msg(rs.error.message, {time:2000});
                    } else {
                        window.location.href = "#AuthenticationPhoneNumber"
                    }
                });
            }
        })
    }

    return {
        render: render
    }
})
