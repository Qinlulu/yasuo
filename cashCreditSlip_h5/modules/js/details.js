define(["jquery","pageUrl", "./headers", "public","layer",
		"text!../str/details.html", "css!../css/details.css", "css!../css/layer.css"],
	function($, pageUrl,header, mc,layer, html) {
		function render() {
			$(".main").html(html);
			header.render("通知详情")
            $(".main").css("height","100%")
			var userId = window.location.href.split("?")[1].split("userId=")[1];
			
			var api_url = pageUrl.render()+".xinyongjinku.com/passport/index.php?c=first";
			getSwiperData()
			function getSwiperData() {
				var r = ["noticeDetail", {
					"notice_user_id": userId
				}];
				var json = api.JsonpArr(r);
				
				api.call(json, api_url)
					.done(function(rs) {
						if(rs.error) {
                            layer.msg(rs.error.message, {time:2000});
                        } else {
                           
							var str = rs.result.data.content;
							var c = function escape2Html(str) {
								var arrEntities = {
									'lt': '<',
									'gt': '>',
									'nbsp': ' ',
									'amp': '&',
									'quot': '"'
								};
								return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, i) {
									return arrEntities[i];
								});
							};

							var data = rs.result.data;
							$(".details h3").html(data.title)
							$(".details .time").html(data.create_time)
							$(".details .content").html(c(str))

						}

					});
			}

		}
		return {
			render: render
		}
	})