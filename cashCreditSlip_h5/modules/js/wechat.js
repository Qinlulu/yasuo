define(["jquery","./headers","text!../str/wechat.html","css!../css/xiugaimima.css"],
  function($,header,html){
    function render(){
        $(".main").html(html);
        header.render("公众号")
    }
    return {
        render : render
    }
})
