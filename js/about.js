$(function(){
	//关于页面

//关于信息中心动画
	
	var $ourHig = $('.about_guanyu').offset().top;
	$(document).ready(function() {
		var $clientHig = $(document).scrollTop()+$(window).height();
		if($clientHig>=$ourHig) {
			$('.about_guanyu').animate({
				'opacity':0.2,
				'opacity':0.4,
				'opacity':0.6,
				'opacity':0.8,
				'opacity':1
			},2000);
			$('.right_buttom').animate({
				'margin-top':0,
				'opacity':0.2,
				'opacity':0.4,
				'opacity':0.6,
				'opacity':0.8,
				'opacity':1
			},3000);
		}
	});
	
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
	
	//底部动画
	var $lastdonghua = $('#about_footer').offset().top;
	$(document).scroll(function() {
		var $clientH = $(document).scrollTop()+$(window).height();
		if($clientH >= $lastdonghua) {
			$('.buttomm_one1').animate({'margin-top':0},1500);
			$('.buttomm_one2').animate({'margin-top':0},2500);
			$('.buttomm_one3').animate({'margin-top':0},3500);
		}
	})
	
	//回到顶部
	$(document).scroll(function() {
		if($(document).scrollTop() > 0) {
			$('#return_top').fadeIn(500);
		}else {
			$('#return_top').fadeOut(500);
		}
	});
	$('#return_top').on('click',function() {
		$('html,body').animate({scrollTop:0},1000);
	});
	
})