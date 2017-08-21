define(["jquery","text!modules/str/guidance.html"],
    function($,html){
    function render() {
        $(".main").html(html);
        console.log($)
        $(".main").on("click",function () {
            window.location.href="#Loginphone"
        })
    }
    return {
        render: render
    }
})