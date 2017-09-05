define(["jquery","./headers","text!../str/women.html","css!../css/gengduo.css"],
  function($,header, html){
    function render(){
        $(".main").html(html);
      header.render("关于信用金库")
    }
    return {
        render : render
    }
})
