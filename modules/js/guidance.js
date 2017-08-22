define(["jquery","pageUrl","public","text!modules/str/guidance.html"],
    function($,pageUrl,mc,html){
    function render() {
        $(".main").html(html);
        console.log(pageUrl.render())
        $(".main").on("click",function () {
            window.location.href="#Loginphone"
        })
        $(".cash").on("click",function () {
            var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
            getSwiperData();
            function  getSwiperData() {
                var r = ["loginStatus"];
                var json = api.JsonpArr(r);
                api.call(json,api_url).done(function (rs) {
                    if(rs.error){
                        alert(rs.error.message)
                    }else {
                        $(".donghau").hide()
                        if(rs.result.status == 0){
                            window.location.href = "#LoginPhone"
                        }else {
                            window.location.href = "#HomePage"  //jiekuanzhu
                        }
                    }
                })
                
            }
            
        })

    }
    return {
        render: render
    }
})