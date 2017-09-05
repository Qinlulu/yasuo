define(["jquery","./headers","text!../str/zhichika.html","css!../css/zhichika.css"]
    ,function($, headers,html){
    function render(){
        $(".main").html(html);
        headers.render("支持银行卡")
        $(".button").on("click",function(){
          window.history.back()
        })
    }
    return {
        render : render
    }
})
