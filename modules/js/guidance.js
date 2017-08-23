define(["jquery","pageUrl","public","layer","text!modules/str/guidance.html"],
    function($,pageUrl,mc,layer,html){
    function render() {
        $(".main").html(html);
        layer.msg('信用金库欢迎您', {time:1500});
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