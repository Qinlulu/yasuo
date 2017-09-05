define(["jquery","./headers","./tankuang","text!../str/shenhec.html","css!../css/shenhec.css"],
    function($, header,tankuang, html){
    function render(){
        $(".main").html(html);
        header.render("审核成功","remove")
        tankuang.render()
    }
    return {
        render : render
    }
})
