define(["jquery","PublicHead","text!modules/str/CoffersPage.html"],
    function($,header, html){
        function render(){
            $(".main").html(html);
            header.render("金库")
            $("#Advertisement").on("click",function(){
                _hmt.push(['_trackEvent', 'guanggao', 'faxian', 'haha']);
                window.location.href="https://jie.yihuangjin.com/wechat/#qudao?terminal=8&source_id=2"
            })
        }
        return {
            render : render
        }
    })
