define(["jquery","pageUrl","./headers","public","layer","./tankuang",
        "text!../str/shenhez.html","css!../css/shenhez.css", "css!../css/layer.css"],
    function($,pageUrl,header,mc, layer,tankuang, html){
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
               layer.msg(rs.error.message, {time:2000});
              }else{
                window.location.href="#zhimayin"
              }
            })
          }
          //window.location.href="#shenhez"
        }else if(rule.split("?")[1].split("&")[5].split("=")[1]!="true"){
           window.location.href="#shenhes"
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
                       layer.msg(rs.error.message, {time:2000});
                    }else{
                      window.location.href="#shenhez"
                    }
                })
            }
        }
    }
    return {
        render : render
    }
})
