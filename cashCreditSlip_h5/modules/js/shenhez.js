define(["jquery","pageUrl","./headers","public","layer","./tankuang",
        "text!../str/shenhez.html","css!../css/shenhez.css", "css!../css/layer.css"],
    function($,pageUrl,header,mc, layer,tankuang, html){
    function render(){
        $(".main").html(html);
        header.render("资料审核","remove")
        tankuang.render()
    }
    return {
        render : render
    }
})
