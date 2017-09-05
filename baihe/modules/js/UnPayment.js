define(["jquery","PublicHead","text!modules/str/UnPayment.html"],
    function($,header, html){
        function render(){
            $(".main").html(html);
            header.render("我要还款","remove")
        }
        return {
            render : render
        }
    })
