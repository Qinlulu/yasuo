define(["jquery","./headers","./tankuang",
        "text!../str/shenhes.html","css!../css/shenhes.css"],
    function($, header,tankuang, html){
        function render(){
            $(".main").html(html);
            header.render("审核失败","remove")
            tankuang.render()
        }
        return {
            render : render
        }
    })
