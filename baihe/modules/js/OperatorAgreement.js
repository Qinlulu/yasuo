define(["jquery","check",'public',"text!modules/str/OperatorAgreement.html"],
    function($, check, mc, html) {
    function render() {
        $(".main").html(html);
    }
    return {
        render : render
    }
})
