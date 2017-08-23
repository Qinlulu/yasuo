define(["jquery","PublicHead","PublicAdvertis","text!modules/str/SuccessAudit.html"],
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
