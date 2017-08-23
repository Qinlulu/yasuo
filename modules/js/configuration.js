define(["jquery","pageUrl","PublicHead","check",'public',"text!modules/str/configuration.html"],
    function($,pageUrl,header,check, mc, html){
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
                            alert(rs.error.message)
                        } else {
                            sessionStorage.clear();
                            localStorage.clear();
                            window.location.href = "#HomePage"
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
