$(function(){
	
	//处理选中的导航栏
	$('#navTarget>ul>li>a').on('click',function() {
		 $('#navTarget>ul>li>a').removeClass("active");
		$(this).addClass('active');
	});
	
	//头部轮播图
	var index = 0;
	$('.icon_right').click(function(){
		index++;
		if(index == $('#slider>ul>li').length) {
			index = 0;
		}
	$('#slider>ul>li').eq(index).fadeIn(2000).siblings().fadeOut(2000);
	});
	$('.icon_left').click(function(){
		index--;
		if(index == -1) {
			index = $('#slider>ul>li').length-1;
		}
		$('#slider>ul>li').eq(index).fadeIn(2000).siblings().fadeOut(2000);
	});
	
	//中间第一段文字部分动画
	//获取滑块到顶部的距离
	var $navHeight = $('#fonts_top').offset().top;
	$(document).scroll(function() {
		if(($(document).scrollTop()+$(window).height())>=$navHeight) {
//			$('#fonts_top').addClass('dynamic_fonts');
			$('#fonts_top').animate({
				'opacity':0.1,
				'opacity':0.2,
				'opacity':0.3,
				'opacity':0.4,
				'opacity':0.5,
				'opacity':0.6,
				'opacity':0.7,
				'opacity':0.8,
				'opacity':0.9,
				'opacity':1,
			},3000);
		}
	});
	
	//教练轮播图
	var ul = document.querySelector("#lunbo_ul");
	var aLeft = document.querySelector(".shuffling_left");
	var aRight = document.querySelector(".shuffling_right");
	var span = document.querySelectorAll("#clickSpan span");
	var timr,index=0;
	//点击左边箭头切换监听
	aLeft.onclick = function() {
		per_pic();
	};
	//点击右边箭头切换监听
	aRight.onclick = function() {
		next_pic();
	};
	//开启定时器
	interval();
	function interval(){
		timr = setInterval(function() {
			per_pic();
		},2000);
	}
	//图片向左翻转
	function per_pic() {
		var perlingjiedian;
		if(parseInt(ul.style.left) === 0){
			perlingjiedian = -546;
		}else {
			perlingjiedian = parseInt(ul.style.left)+273;
		}
		ul.style.left = perlingjiedian + "px";
//		ul.animate({'left':''+perlingjiedian+'+px+'},1000);
	}
	//图片向右翻转
	function next_pic() {
		var perlingjiedian;
		if(parseInt(ul.style.left) === -546){
			perlingjiedian = 0;
		}else {
			perlingjiedian =parseInt(ul.style.left)-273;
		}
		ul.style.left = perlingjiedian + "px";

	}
	//点击按钮切换对应的图片
	for(var i=0; i<span.length; i++){
		(function(i){
			span[i].onclick = function() {
				index = i;
				var dy = i+1;
				ul.style.left = -273*dy + "px";
			}
		})(i);
	}
	
	//课程部分
	
	//第一排左边部分
	var $slider_oneHeight = $('#slider_one').offset().top;
	var $obj1 = $('#slider_one>.one_left');
	slider($slider_oneHeight,$obj1);
	
	//第一排右边部分
	var $obj2 = $('#slider_one>.one_right');
	slider($slider_oneHeight,$obj2);
	
	//第二排左边部分
	var $slider_oneHeight2 = $('#slider_two').offset().top;
	var $obj3 = $('#slider_two>.two_left');
	slider($slider_oneHeight2,$obj3);
	
	//第二排右边部分
	var $obj4 = $('#slider_two>.two_right');
	slider($slider_oneHeight2,$obj4);
	
	function slider(obj1,obj3) {
		$(document).scroll(function() {
			var clientHig = $(document).scrollTop()+$(window).height();
			if(clientHig>=obj1) {
				obj3.animate({
					opacity:0.2,
					opacity:0.4,
					opacity:0.6,
					opacity:0.8,
					opacity:1,
					left:0
				},1500)
			}
		});
	}
	
	
	//我们的消息的动画效果
	var $ourHig = $('.one_shuffing').offset().top+400;
	$(document).scroll(function() {
		var $clientHig = $(document).scrollTop()+$(window).height();
		
		if($clientHig >= $ourHig) {
			$('.one_shuffing').addClass('one_shuffing_block');
		}
	});
	
	//底部动画
	var $lastdonghua = $('#footer_bottom').offset().top;
	$(document).scroll(function() {
		var $clientH = $(document).scrollTop()+$(window).height();
		if($clientH >= $lastdonghua) {
			$('.buttomm_one1').animate({'margin-top':0},1500);
			$('.buttomm_one2').animate({'margin-top':0},2500);
			$('.buttomm_one3').animate({'margin-top':0},3500);
		}
	})
	
	
	//回到顶部
	$(document).on('scroll',function() {
		if($(document).scrollTop() > 0) {
			$('#return_top').fadeIn(500);
		}else {
			$('#return_top').fadeOut(500);
		}
	});
	$('#return_top').on('click',function() {
		$('html,body').stop().animate({scrollTop:0},1000);
	});
})