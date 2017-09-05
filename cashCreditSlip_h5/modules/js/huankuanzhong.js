define(["jquery","./headers","./tankuang",
        "text!../str/huankuanzhong.html","css!../css/huoe.css"],
    function($, header,tankuang, html){
        function render(){
            $(".main").html(html);
            header.render("还款提交中","remove")
            tankuang.render()
        }
        return {
            render : render
        }
    })
