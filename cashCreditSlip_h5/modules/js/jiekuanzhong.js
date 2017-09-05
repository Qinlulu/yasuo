define(["jquery","./headers","./tankuang",
        "text!../str/jiekuanzhong.html","css!../css/huoe.css"],
    function($, header,tankuang, html){
        function render(){
            $(".main").html(html);
            header.render("借款中","remove")
            tankuang.render()


        }
        return {
            render : render
        }
    })
