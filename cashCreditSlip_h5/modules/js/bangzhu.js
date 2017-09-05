define(["jquery","./headers","text!../str/bangzhu.html", "css!../css/bangzhu.css"],
    function ($,headers, html) {
    function render() {
        $(".main").html(html);
        headers.render("帮助中心");
        $(".slide li").on("click", function () {
            $(this).parent().find("img").attr("src", "https://imagecdn.xinyongjinku.com/wechat/modules/images/xia.png")
            $(this).parent().find("p").slideUp()
            if ($(this).hasClass("on")) {
                $(this).removeClass("on")
                $(this).find("p").slideUp(300)
                $(this).find("img").attr("src", "https://imagecdn.xinyongjinku.com/wechat/modules/images/xia.png")
                $(this).parent().find("p").slideUp()
                return
            } else {
                $(this).addClass("on")
                $(this).find("img").attr("src", "https://imagecdn.xinyongjinku.com/wechat/modules/images/sh.png")
                $(this).find("p").slideDown(300)
            }
        })
    }

    return {
        render: render
    }
})
