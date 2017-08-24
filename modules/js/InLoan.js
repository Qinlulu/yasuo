define(["jquery","PublicHead","PublicAdvertis",
        "text!modules/str/InLoan.html"],
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
