define(function(require, exports, module) {
    $(".slide li").on("click", function () {
            $(this).parent().find("img").attr("src", "https://imagecdn.xinyongjinku.com/app/images/xia.png")
            $(this).parent().find("p").slideUp()
            if ($(this).hasClass("on")) {
                $(this).removeClass("on")
                $(this).find("p").slideUp(300)
                $(this).find("img").attr("src", "https://imagecdn.xinyongjinku.com/app/images/xia.png")
                $(this).parent().find("p").slideUp()
                return
            } else {
                $(this).addClass("on")
                $(this).find("img").attr("src", "https://imagecdn.xinyongjinku.com/app/images/sh.png")
                $(this).find("p").slideDown(300)
            }
        })
})
