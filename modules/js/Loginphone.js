define(["jquery","pageUrl","text!modules/str/Loginphone.html"],
    function($,pageUrl,html){
        function render() {
            $(".main").html(html);
            console.log(pageUrl.render())
            $(".main").on("click",function () {
                window.location.href="#Loginpassword"
            })
        }
        return {
            render: render
        }
    })