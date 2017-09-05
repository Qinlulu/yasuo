define(["jquery","PublicHead","PublicAdvertis",
        "text!modules/str/FailAudit.html"],
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
