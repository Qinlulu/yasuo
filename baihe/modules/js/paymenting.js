define(["jquery","PublicHead","PublicAdvertis",
        "text!modules/str/paymenting.html"],
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
