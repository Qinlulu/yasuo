define(["jquery","pageUrl","./headers","check",'public',"layer",
        "text!../str/xiugaimima.html","css!../css/xiugaimima.css", "css!../css/layer.css"],
  function($,pageUrl,header,check, mc,layer, html){
    function render(){
        $(".main").html(html);
        header.render("设置")
        $(".tuichu").on("click", function () {
            $(".donghua").show()
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
            getSwiperData()
            function getSwiperData() {
                var r = ["signout"];
                var json = api.JsonpArr(r);

                api.call(json, api_url).done(function (rs) {
                    if (rs.error) {
                        layer.msg(rs.error.message, {time:2000});
                    } else {
                        sessionStorage.clear();
                        localStorage.clear();
                        window.location.href = "#jiekuanzhu"
                        $(".donghua").hide()

                    }
                });
            }
        })
    }
    return {
        render : render
    }
})
