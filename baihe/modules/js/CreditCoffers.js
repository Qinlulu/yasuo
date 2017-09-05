define(["jquery","PublicHead","text!modules/str/CreditCoffers.html"],
    function($,header, html){
        function render(){
            $(".main").html(html);
            header.render("关于信用金库")
        }
        return {
            render : render
        }
    })
