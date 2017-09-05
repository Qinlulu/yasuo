define(["jquery","./headers","text!../str/huoe.html","css!../css/huoe.css"],
    function($,header, html){
    function render(){
        $(".main").html(html);
        header.render("获得额度","remove")
    }
    return {
        render : render
    }
})

''



