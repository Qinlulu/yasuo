define(["jquery","pageUrl","PublicHead","public","PublicAdvertis","text!modules/str/InAudit.html"],
    function($,pageUrl,header,mc, tankuang, html){
        function render(){
            $(".main").html(html);
            header.render("资料审核","remove")
            tankuang.render()
            var rule = window.location.hash;
            if(rule.split('?')[1] == ""){

            }else if(rule.split("?")[1].split("&")[4].split("=")[1]=="false") {
                var api_url = pageUrl.render() +".xinyongjinku.com/passport/user.php?c=account";
                getSwiperDatas()
                function getSwiperDatas() {
                    var r = [
                        "newGetSesameCredit",
                        {
                            "system":"web",
                            "openId":"",
                            "success":'flase'
                        }
                    ];
                    var json = api.JsonpArr(r);
                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            alert(rs.error.message)
                        }else{
                            window.location.href="#InAudit"
                        }
                    })
                }
                //window.location.href="#shenhez"
            }else if(rule.split("?")[1].split("&")[5].split("=")[1]!="true"){
                window.location.href="#FailAudit"
            }else{
                var api_url = pageUrl.render() +".xinyongjinku.com/passport/user.php?c=account";
                getSwiperData()
                function getSwiperData() {
                    var r = [
                        "newGetSesameCredit",
                        //"getSesameCredit",
                        {
                            "system":"web",
                            "openId": rule.split("?")[1].split("&")[0].split("=")[1],
                            "success":'true'
                        }
                    ];
                    var json = api.JsonpArr(r);
                    api.call(json, api_url).done(function (rs) {
                        if (rs.error) {
                            alert(rs.error.message)
                        }else{
                            window.location.href="#InAudit"
                        }
                    })
                }
            }
        }
        return {
            render : render
        }
    })
