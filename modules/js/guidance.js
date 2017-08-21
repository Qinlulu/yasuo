define(["jquery","pageUrl","text!modules/str/guidance.html"],
    function($,pageUrl,html){
    function render() {
        $(".main").html(html);
        console.log(pageUrl.render())
        $(".main").on("click",function () {
            window.location.href="#Loginphone"
        })
    }
    return {
        render: render
    }
})