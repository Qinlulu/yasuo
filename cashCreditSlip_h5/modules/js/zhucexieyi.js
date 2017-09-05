define(["jquery","check",'public',"text!../str/zhucexieyi.html","css!../css/xieyi.css"],function($, check, mc, html) {
    function render() {
        $(".main").html(html);
    }
    return {
        render : render
    }
})
