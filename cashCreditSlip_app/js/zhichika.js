define(function(require, exports, module) {
    var $= require("jquery")
    $(".button").on("click",function(){
        window.location.href="http://www.zhidaola.com?params=test"
    })
})
