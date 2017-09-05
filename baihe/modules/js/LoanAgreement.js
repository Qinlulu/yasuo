define(["jquery","check",'public',"text!modules/str/LoanAgreement.html"],
    function($, check, mc, html) {
    function render() {
        $(".main").html(html);
    }
    return {
        render : render
    }
})
