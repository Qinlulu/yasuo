define(["jquery", "pageUrl", "public", "ajaxsub", "text!modules/str/AuthenticationIdentityCard.html"],
    function ($, pageUrl, mc, sub, html) {
        function render() {
            $(".main").html(html);
            $(".back").on("click", function () {
                window.location.href = "#HomePage"
            })
            $(".donghua").show()
            var api_url = pageUrl.render() + ".xinyongjinku.com/passport/files.php?c=index";
            getSwiperData()
            function getSwiperData() {
                var r = ["getUploadUrl",
                    {
                        "style": ""
                    }
                ];
                var json = api.JsonpArr(r);
                api.call(json, api_url).done(function (rs) {
                    $(".donghua").hide()
                    if (rs.error) {
                        if (rs.error.message == "用户未登录") {
                            window.location.href = "#RegistrationPage"
                        } else {
                            alert(rs.error.message)
                        }
                    } else {
                        var cunchuAjax = {}
                        cunchuAjax.url = rs.result.data.msg
                        if (!window.FileReader) {
                            alert("浏览器不支持文件获取");
                        } else {
                            $(".file1").on("change", function () {
                                $(".donghua").show()
                                var file = document.querySelector(".file1").files[0];
                                if (!/image\/\w+/.test(file.type)) {
                                    alert("需要的是图片");
                                    return false;
                                }
                                var canvas = document.createElement("canvas");
                                var ctx = canvas.getContext('2d');
                                var img = new Image();
                                var reader = new FileReader();//读取客户端上的文件
                                reader.readAsDataURL(file);
                                reader.onload = function () {
                                    var url = reader.result;//读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
                                    img.src = url;
                                };
                                img.onload = function () {
                                    var w = img.naturalWidth,
                                        h = img.naturalHeight;
                                    canvas.width = w;
                                    canvas.height = h;
                                    ctx.drawImage(img, 0, 0, w, h, 0, 0, w / 5, h / 5);
                                    ctx.rect(0, 0, w / 5, h / 5);
                                    var base64 = canvas.toDataURL();  // 这里的“1”是指的是处理图片的清晰度（0-1）之间，当然越小图片越模糊，处理后的图片大小也就越小
                                    function dataURLtoBlob(dataurl) {
                                        var arr = base64.split(','), mime = arr[0].match(/:(.*?);/)[1],
                                            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                                        while (n--) {
                                            u8arr[n] = bstr.charCodeAt(n);
                                        }
                                        return new Blob([u8arr], {type: mime});
                                    }

                                    var blob = dataURLtoBlob(base64)
                                    var fd = new FormData();
                                    fd.append('filename', blob, "image.png");//blob对象添加到formdata里面是要加入类型
                                    $.ajax({
                                        type: "POST",
                                        url: cunchuAjax.url,
                                        data: fd,
                                        processData: false,
                                        cache: false,
                                        async: false,
                                        contentType: false,
                                        success: function (data) {
                                            var data = JSON.parse(data)
                                            console.log(data)
                                            if (data.err_code == 0) {
                                                $(".right-img1").css("display", "block")
                                                cunchuAjax.renzheng = data.err_msg
                                                $(".donghua").hide()
                                            } else {
                                                alert("失败了")
                                                $(".donghua").hide()
                                            }
                                        }
                                    });
                                }
                            })
                            $(".file2").on("change", function () {
                                $(".donghua").show()
                                var file = document.querySelector(".file2").files[0];
                                if (!/image\/\w+/.test(file.type)) {
                                    alert("需要的是图片");
                                    return false;
                                }
                                var canvas = document.createElement("canvas");
                                var ctx = canvas.getContext('2d');
                                var img = new Image();
                                var reader = new FileReader();//读取客户端上的文件
                                reader.readAsDataURL(file);
                                reader.onload = function () {
                                    var url = reader.result;//读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
                                    img.src = url;
                                };
                                img.onload = function () {
                                    var w = img.naturalWidth,
                                        h = img.naturalHeight;
                                    canvas.width = w;
                                    canvas.height = h;
                                    ctx.drawImage(img, 0, 0, w, h, 0, 0, w / 5, h / 5);
                                    ctx.rect(0, 0, w / 5, h / 5);
                                    var base64 = canvas.toDataURL();  // 这里的“1”是指的是处理图片的清晰度（0-1）之间，当然越小图片越模糊，处理后的图片大小也就越小
                                    function dataURLtoBlob(dataurl) {
                                        var arr = base64.split(','), mime = arr[0].match(/:(.*?);/)[1],
                                            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                                        while (n--) {
                                            u8arr[n] = bstr.charCodeAt(n);
                                        }
                                        return new Blob([u8arr], {type: mime});
                                    }

                                    var blob = dataURLtoBlob(base64)
                                    var fd = new FormData();
                                    fd.append('filename', blob, "image.png");//blob对象添加到formdata里面是要加入类型
                                    $.ajax({
                                        type: "POST",
                                        url: cunchuAjax.url,
                                        data: fd,
                                        processData: false,
                                        cache: false,
                                        async: false,
                                        contentType: false,
                                        success: function (data) {
                                            var data = JSON.parse(data)
                                            console.log(data)
                                            if (data.err_code == 0) {
                                                $(".right-img2").css("display", "block")
                                                cunchuAjax.renfan = data.err_msg
                                                $(".donghua").hide()
                                            } else {
                                                alert("失败了")
                                                $(".donghua").hide()
                                            }
                                        }
                                    });
                                }
                            })
                            $(".file3").on("change", function () {
                                var file = document.querySelector(".file3").files[0];
                                if (!/image\/\w+/.test(file.type)) {
                                    alert("需要的是图片");
                                    return false;
                                }
                                $(".donghua").show()
                                var reader = new FileReader();
                                reader.readAsBinaryString(file);
                                reader.onload = function (f) {
                                    cunchuAjax.dataz = this.result
                                    $("#myForm2").attr("action", cunchuAjax.url)
                                    $('#myForm2').ajaxForm(function (data) {
                                        var data = JSON.parse(data)
                                        $(".right-img3").css("display", "block")
                                        cunchuAjax.renlian = data.err_msg
                                        $(".donghua").hide()
                                    });
                                    $(".text3").click()
                                }
                            })
                        }
                        $(".xingming").blur(function () {
                            var A = $(this).val().replace(/(^\s+)|(\s+$)/g, "");
                            var reg = /^[\u4e00-\u9fa5]{2,4}$/
                            if (A == "") {
                            } else if (!reg.test(A)) {
                                alert('ֻ姓名格式不正确')
                                $(this).val("");
                                return;
                            }
                        });
                        $(".shenfens").blur(function () {
                            var A = $(this).val();
                            var reg1 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
                            if (A == "") {
                            } else if (!reg1.test(A)) {
                                alert('ֻ身份证号码格式不正确')
                                $(this).val("");
                                return;
                            }
                        });
                        $(".gogeren").on("click", function () {
                            if ($(".xingming").val() == "" || $(".shenfens").val() == "") {
                                alert("完善数据")
                                return
                            }
                            if (!cunchuAjax.renzheng || !cunchuAjax.renfan || !cunchuAjax.renlian) {
                                alert("完善数据")
                                return
                            }
                            $(".donghua").show()
                            var api_url = pageUrl.render() + ".xinyongjinku.com/passport/user.php?c=account";
                            getSwiperDatas()
                            function getSwiperDatas() {
                                var str = JSON.parse(cunchuAjax.renzheng).filename.url.split("file")[1].substring(1)
                                var str1 = JSON.parse(cunchuAjax.renfan).filename.url.split("file")[1].substring(1)
                                var str2 = JSON.parse(cunchuAjax.renlian).filename.url.split("file")[1].substring(1)
                                var r = ["creditStepOne",
//                            "isIdentify",
                                    {
                                        "system": "web",
                                        "id_number": $(".shenfens").val(), //身份证号
                                        "user_name": $(".xingming").val(),     //姓名
                                        "information_step": 1,       //步数 1 2 3 4
                                        "id_number_image_1": str,   //身份证  正面
                                        "id_number_image_2": str1,   //身份证  反面
                                        "face_image": str2          //人脸识别 照片
                                    }
                                ]
                                var json = api.JsonpArr(r);
                                console.log(json)
                                api.call(json, api_url).done(function (rs) {
                                    if (rs.error) {
                                        alert(rs.error.message)
                                        $(".donghua").hide()
                                    } else {
                                        $(".donghua").hide()
                                        window.location.href = "#AuthenticationInformation"
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }

        return {
            render: render
        }
    })




