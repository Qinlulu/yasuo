define(["jquery","pageUrl", "./headers","./mima","public", "text!../str/zhucezhang.html", "css!../css/zhucezhang.css"],
    function ($,pageUrl, header,mima,mc, html) {
    function render() {
        $(".main").html(html);
        header.render("信用金库","remove")
        mima.render(".dengbtn",".zhanghao")
        $(".footers").hide()
        $(".dengbtn").on("click", function () {
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
            getSwiperData()
            function getSwiperData() {
                var r = ["registered", {username: $(".zhanghao").val()}];
                var json = api.JsonpArr(r);

                api.call(json, api_url).done(function (rs) {
                    sessionStorage.setItem("cunchuzhang",$(".zhanghao").val())
                    localStorage.setItem("phone",$(".zhanghao").val())
                    if (rs.result.code==1) {
                        //已经注册  登录
                        window.location.href="#denglumi"
                    }else{
                        //需要注册
                        window.location.href="#zhucemi"
                    }
                });
            }
        })
    }

    return {
        render: render
    }
})
