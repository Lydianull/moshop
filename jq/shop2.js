


// 左侧楼层导航
$(function(){
	var floorNav=$(".floor-nav");
	var navItems=$(".floor-nav>.nav-li");
	var floors=$(".floor-item");
	var size=floors.size();
	var num=["1F","2F","3F","4F","5F"];
	var text=["服装","美妆","手机","家电","数码"];




	$(window).scroll(function(){
	// 当页面滚动至出现第二次楼层区时，左侧显示出楼层导航
	var scrollTop=$(window).scrollTop();
	var floor1Height=$("#floor1").offset().top-400;
	if(scrollTop>=floor1Height){
		floorNav.show();
	}else{
		floorNav.hide();
	}
	for(var j=0;j<size;j++){
		var floorHeight=floors.eq(j).offset().top-300;
		if(scrollTop>=floorHeight){
			changeText(j);
		}

	}
	
	
	
	// 滚动至对应的楼层
	}).on("move_to",function(event,index){
		var floorHeight=floors.eq(index).offset().top;
		$(window).scrollTop(floorHeight);
		// 导航项由数字变成文字
		changeText(index);
	})




// 左侧对应的楼层导航项由数字变成文字
function changeText(index){
	for(var i=0;i<size;i++){
		navItems.eq(i).html(num[i]);
	}

	navItems.css("color","black").eq(index).css("color","red").html(text[index]);

}
 // 单击楼层导航项时，页面也会滚动至对应的楼层
 navItems.on("click",function(){
             	var index=$(this).index();
             	$(window).triggerHandler("move_to",index);
             })

 // 楼层tab切换
 var headers1=$(".caption1>.item");
var arrows1=$(".floor-arrow1>.item");
var cons1=$(".content-tab1>.item");

var headers2=$(".caption2>.item");
var arrows2=$(".floor-arrow2>.item");
var cons2=$(".content-tab2>.item");

var headers3=$(".caption3>.item");
var arrows3=$(".floor-arrow3>.item");
var cons3=$(".content-tab3>.item");

var headers4=$(".caption4>.item");
var arrows4=$(".floor-arrow4>.item");
var cons4=$(".content-tab4>.item");

var headers5=$(".caption5>.item");
var arrows5=$(".floor-arrow5>.item");
var cons5=$(".content-tab5>.item");

// 楼层tab切换
function Tab(headers,arrows,cons){
	headers.click(function(){
		var index=$(this).index();
		headers.removeClass("item_focus").eq(index).addClass("item_focus");
		arrows.hide().eq(index).show();
		cons.hide().eq(index).show();


	})
}
Tab(headers1,arrows1,cons1);
Tab(headers2,arrows2,cons2);
Tab(headers3,arrows3,cons3);
Tab(headers4,arrows4,cons4);
Tab(headers5,arrows5,cons5);

// 右侧导航

$(".nav-li").hover(function(){
	var index=$(this).index();
	$(".right-nav >.nav-li").eq(index).css("background-color","#71777d");
	$(".sub-li").eq(index).animate({width:"55px","font-size":"10px"},500);
},function(){
	var index=$(this).index();
	$(".right-nav >.nav-li").eq(index).css("background-color","#b7bbbf");
	$(".sub-li").eq(index).animate({width:"0","font-size":"0"},500);
})

})

	




