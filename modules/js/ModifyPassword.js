define(["jquery","pageUrl","PublicHead","check","PublicPassWord",'public',"text!modules/str/ModifyPassword.html"],
    function($, pageUrl,header,check,password, mc, html){
        function render(){
            $(".main").html(html);
            header.render("修改密码")
            password.render()
            check.render()

            //设置显示的账号
            $(".tit").html(sessionStorage.getItem("cunchuzhang"))

            $(".huoyan").html("获取验证码")
            $(".huoyan").on("click",function(){
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                getSwiperData()
                function getSwiperData() {
                    var r = ["messageAuth",
                        {
                            "mobile": $(".tit").html(),
                            "node_name" : "forgot_password"  //忘记密码时用这个
                        }];
                    var json = api.JsonpArr(r);

                    api.call(json, api_url).done(function (rs) {
                        if(rs.error){
                            alert(rs.error.message)
                        }else{
                            $(this).addClass("aaaaa")
                            if( $(".huoyan").html()=="重新发送" ||  $(".huoyan").html()=="获取验证码") {
                                $(this).attr('disabled', "")
                                var num = 60;
                                var time = setInterval(function () {
                                    num--
                                    $(".huoyan").html(num + "s")
                                    if (num == 0) {
                                        true
                                        clearInterval(time)
                                        $(".huoyan").html("重新发送")
                                        $(this).attr('disabled', "false")
                                    }
                                }, 1000)
                            }

                            $(".key").html(rs.result.data.key)
                        }

                    });
                }
            })

            $(".btjsd").on("click",function(){

                if($(".pass").val()=="" || $(".yans").val()=="" ){
                    alert("请输入信息")
                    return
                }
                var api_url = pageUrl.render()+".xinyongjinku.com/passport/user.php?c=account";
                getSwiperData()
                function getSwiperData() {
                    var r = ["savePassword",
                        {
                            "phone": $(".tit").html(),
                            "sms_key": $(".key").html(),
                            "sms_code": $(".yans").val(),
                            "password" : $(".pass").val()
                        }
                    ];
                    var json = api.JsonpArr(r);

                    api.call(json, api_url).done(function (rs) {

                        if(rs.error){
                            alert(rs.error.message)
                            $(".yans").val("")
                            $(".pass").val("")
                        }else{
                            window.location.href="#RegistrationPage"//zhucezhang
                        }

                    });
                }
            })

        }
        return {
            render : render
        }
    })
