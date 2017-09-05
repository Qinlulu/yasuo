define(function (exports, module) {
    $(".center").on("click", function () {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            window.location.href ="https://itunes.apple.com/us/app/xin-yong-jin-ku/id1241617822?l=zh&ls=1&mt=8"
        } else if (/(Android)/i.test(navigator.userAgent)) {
            window.location.href ="http://app.qq.com/#id=detail&appid=1106223920";
        } else {
            window.location.href ="http://app.qq.com/#id=detail&appid=1106223920";
        }
    })
})