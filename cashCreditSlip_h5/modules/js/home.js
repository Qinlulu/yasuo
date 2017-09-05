define(["jquery", "touch", "./footer", "public", "text!../str/home.css.html", "css!../css/home.css"],
    function ($, T, footer, mc, html) {

        function render() {
            $(".main").html(html);
            footer.render();
            //PC端的 滑块的 功能  jQuery
            $(".huakuai").mousedown(function (e) {
                var startL = e.pageX
                var startX = Math.round($(".huakuai").offset().left - $(".jindutiao").offset().left)
                $(".huakuai").mousemove(function (e) {
                    var moveL = e.pageX
                    var moveX = moveL - startL
                    var width = (startX * 1 + moveX * 1)
                    var position = width + 3 * 1
                    var xian = 500 * 1 + width * 1

                    if (xian < 500) {
                        xian = 500
                    } else if (xian > 1000) {
                        xian = 1000
                    } else {
                        $(".xian").html(xian)
                        $(".huakuai").css("left", width + "px")
                        $(".xian").css("left", width + "px")
                        $(".jindutiaos").css("width", position + "px")
                    }

                    $(".huakuai").mouseup(function () {
                        $(".huakuai").unbind('mousemove');
                    })
                })
            })
            $(".huakuais").mousedown(function (e) {
                var startL = e.pageX
                var startX = Math.round($(".huakuais").offset().left - $(".jindutiao").offset().left)
                $(".huakuais").mousemove(function (e) {
                    var moveL = e.pageX
                    var moveX = moveL - startL
                    var width = (startX * 1 + moveX * 1)
                    var position = width + 3 * 1

                    var xian = Math.round(7 * 1 + ((23 / 500) * (width * 1)))

                    if (xian < 7) {
                        xian = 7
                    } else if (xian > 30) {
                        xian = 30
                    } else {
                        $(".xians").html(xian)
                        $(".huakuais").css("left", width + "px")
                        $(".xians").css("left", width + "px")
                        $(".jindutiaoss").css("width", position + "px")
                    }

                    $(".huakuais").mouseup(function () {
                        $(".huakuais").unbind('mousemove');
                    })
                })
            })

            //移动端 滑块的 功能 touch
            $(".huakuai").on('touchstart',function(e){
                var touch = e.touches[0];
                var startL = touch.pageX
                var startX = Math.round($(".huakuai").offset().left - $(".jindutiao").offset().left)
                $(".huakuai").on("touchmove",function (e) {
                    var touch = e.touches[0];
                    var moveL = touch.pageX
                    var moveX = moveL - startL
                    var width = (startX * 1 + moveX * 1)
                    var position = width + 3 * 1
                    var xian = Math.round(500 * 1 + ((550 / ($(".jindutiao").width()*1)) * (width * 1)))

                    if (xian < 500) {
                        xian = 500
                        $(".xian").html(xian)
                    } else if (xian > 1000) {
                        xian = 1000
                        $(".xian").html(xian)
                    } else {
                        $(".xian").html(xian)
                        $(".huakuai").css("left", width + "px")
                        $(".xian").css("left", width + "px")
                        $(".jindutiaos").css("width", position + "px")
                    }

                    $(".huakuai").on("touchend",function () {
                        $(".huakuai").unbind('touchmove');
                    })
                })
            })
            $(".huakuais").on("touchstart",function (e) {
                var touch = e.touches[0];
                var startL = touch.pageX
                var startX = Math.round($(".huakuais").offset().left - $(".jindutiao").offset().left)
                $(".huakuais").on("touchmove",function (e) {
                    var touch = e.touches[0];
                    var moveL = touch.pageX
                    var moveX = moveL - startL
                    var width = (startX * 1 + moveX * 1)
                    var position = width + 3 * 1

                    var xian = Math.round(7 * 1 + ((26 / ($(".jindutiao").width()*1)) * (width * 1)))

                    if (xian < 7) {
                        xian = 7
                    } else if (xian > 30) {
                        xian = 30
                    } else {
                        $(".xians").html(xian)
                        $(".huakuais").css("left", width + "px")
                        $(".xians").css("left", width + "px")
                        $(".jindutiaoss").css("width", position + "px")
                    }

                    $(".huakuais").on("touchend",function () {
                        $(".huakuais").unbind('mousemove');
                    })
                })
            })

        }


        return {
            render: render
        }
    })
