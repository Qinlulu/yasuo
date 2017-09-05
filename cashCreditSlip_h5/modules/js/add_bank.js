define(["jquery","check",'public',"text!../str/add_bank.html","css!../css/xieyi.css"],function($, check, mc, html) {
    function render() {
        $(".main").html(html);
    }
    return {
        render : render
    }
})
