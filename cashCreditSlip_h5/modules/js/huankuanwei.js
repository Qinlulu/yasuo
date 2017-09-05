define(["jquery","./headers","text!../str/huankuanwei.html","css!../css/huoe.css"],
    function($,header, html){
    function render(){
        $(".main").html(html);
        header.render("还款记录","remove")
    }
    return {
        render : render
    }
})
