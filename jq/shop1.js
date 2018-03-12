$(document).ready(function($){
	// 获取全局变量
          var loginHtml=$("#loginHtml").html();
          var regeHtml = $("#regeHtml").html();
         // 登陆链接事件
         $("#loginLink").click(function(){
         	          showLayer(loginHtml,325,310,closeCallback);
         	          $("#choose>.login").css({"color":"red","border-bottom": "2px solid #e40"}).siblings().css({"color":"black","border-bottom": "none"});
		// 登录表单校验
		checkLogin();
         	           $("#choose").children().click(function(event){
	          	        changeForm(event);
	      });

         })

         // 注册链接事件
	$("#regeLink").click(function(){
		// 获取注册窗体代码
		showLayer(regeHtml,300,305,closeCallback);
		$("#choose>.rege").css({"color":"red","border-bottom": "2px solid #e40"}).siblings().css({"color":"black","border-bottom": "none"});
		// 注册表单校验
		checkRege();
		// 单击登录与注册时，对应页面要能进行切换
		$("#choose").children().click(function(event){
	          	          changeForm(event);

	      });

	});
           
           // 登录与注册页面切换
	function changeForm(event){
		  var text=$(event.target).text();
		  $(event.target).css({"color":"red","border-bottom": "2px solid #e40"}).siblings().css({"color":"black","border-bottom": "none"});
	          	   if(text==="登陆"){
	          	   	showLayer(loginHtml,325,310,closeCallback);
	          	   	$("#regeHtml").css({"display":"none"});
	          	   	checkLogin();
	          	   }else if(text==="注册"){
	          	   	$("loginHtml").css({"display":"none"});
	          	   	showLayer(regeHtml,300,305,closeCallback);
	          	   	checkRege();

	          	   }

	}
           // 登陆表单校验
           function checkLogin(){
           	$("input[name='username']").blur(function(){
           		var username = $("input[name='username']").val();
			var password = $("input[name='password']").val();
			if(isNaN(username) || username.length !== 11){
				$(".error-msg").html("请输入正确的邮箱或手机号");
			}
           	})
           	
           }

           // 注册表单校验
           function checkRege(){
                     $("input[name='username']").blur(function(){
                     	var username = $("input[name='username']").val();
                     	if(isNaN(username) || username.length !== 11){
                     		$(".error-msg").html("请输入正确的邮箱或手机号");
                     	}

                     })
                     $("input[name='regepassword']").blur(function(){
                     	var regepassword = $("input[name='regepassword']").val();
                     	 if(regepassword!=="GYyd"){
                     	 	$(".error-msg2").html("验证码错误");
                     	 }
                     })

           }

         // 弹出层关闭回调函数
	function closeCallback(){
		$(".error-msg").html("");
		
	}	

         function showLayer(html,height,width,closeCallback){
         	           // 显示弹出层遮罩
		$("#layer-mask").show();
		// 显示弹出层窗体
		$("#layer-pop").show();
		//设置弹出层窗体样式
		$("#layer-pop").css({
			height:height,
			width:width
		});
		// 填充弹出层窗体内容
		$("#layer-content").html(html);
		// 弹出层关闭按钮绑定事件
		$("#layer-close").click(function(){
			// 弹出层关闭
			hideLayer();
			// 关闭的回调函数
			closeCallback();
		});

         }
         // 隐藏弹出层
	function hideLayer(){
		// 弹出层关闭
		$("#layer-mask").hide();
		$("#layer-pop").hide();
	}

	// 轮播图特效

      var index=0,
      timer=null,
      pic=$('.pic'),
      len=pic.length,
      dot=$('.dot');
function slideImg(){
	// 滑过清除定时器，离开继续
	var content=$('.banner-slider');
	content.mouseover(function(){
		if (timer) clearInterval(timer);
	})
	content.mouseout(function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			// 切换图片
			changeImg();
		},1000)
	})
	content.mouseout();
	// 下一张
             $('.next').click(function(){
             	index++;
		if(index>=len){
				index=0;
			}
			// 切换图片
			changeImg();
             })
             // 上一张
             $('.prev').click(function(){
             	index--;
		if(index<0){
				index=len-1;
			}
			// 切换图片
			changeImg();
             })
             dot.click(function(){
             	index=$(event.target).index();
             	changeImg();
             })

            // 导航菜单
            // 遍历主菜单切且绑定事件
           
            	// $(".menu-item").mouseover(function(){
            		


            	// 	$(".sub-menu").removeClass("hide");
            	// 	index=$(event.target).index();
            	// 	$(".inner-box").eq(index).addClass("active").siblings().removeClass("active");
            	// })
            	// banner区子菜单展开与收起
	var menuItems=$(".sub-menu-content>.menu-item");
	var innerBoxes=$(".sub-menu>.inner-box");

	menuItems.on("mouseover",function(){
		$(".sub-menu").removeClass("hide");
		var index=$(this).index();
		innerBoxes.hide().eq(index).show();
		
	}).on("mouseout",function(){
		$(".sub-menu").addClass("hide")
	})

	innerBoxes.on("mouseover",function(){
		$(".sub-menu").removeClass("hide");
	})
	.on("mouseout",function(){
		$(".sub-menu").addClass("hide")
	})



}
// --slideImg

// 切换图片
function changeImg(){
            pic.eq(index).addClass("active").siblings().removeClass("active");
            dot.eq(index).addClass("dot-active").siblings().removeClass("dot-active");
}
slideImg();





})