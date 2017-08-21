define(["jquery","text!modules/str/Loginphone.html"],
    function($,html){
        function render() {
            $(".main").html(html);
        }
        return {
            render: render
        }
    })