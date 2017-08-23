define(["jquery","PublicHead","text!modules/str/WechatService.html"],
    function($,header,html){
        function render(){
            $(".main").html(html);
            header.render("公众号")
        }
        return {
            render : render
        }
    })
