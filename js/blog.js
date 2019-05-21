$(function() {
	//标题动画
	var $icon = $('.iconAnimation').offset().top;
	$(document).ready(function() {
		var $judgeHight = $(document).scrollTop()+$(window).height();
		if($judgeHight >= $icon) {
			$('.blog_dongheader').addClass('blog_dongheaderBlock');
			$('.blog_rightheader').addClass('blog_rightheaderBlock');
			$('.blog_rightheader').animate({
				opacity: 0.2,
				opacity: 0.4,
				opacity: 0.6,
				opacity: 0.8,
				opacity: 1
			},1500)
			
		}
	})
	
	var $icon1 = $('.martop_lost').offset().top;
	$(document).scroll(function() {
		var $judgeHight1 = $(document).scrollTop()+$(window).height();
		if($judgeHight1 >=$icon1) {
			$('.blog_rightheaderlast').addClass('blog_rightheaderBlock');
			$('.blog_rightheaderlast').animate({
				opacity: 0.2,
				opacity: 0.4,
				opacity: 0.6,
				opacity: 0.8,
				opacity: 1
			},1500)
		}
	});
	
	var $icon1 = $('.martop3').offset().top;
	$(document).scroll(function() {
		var $judgeHight1 = $(document).scrollTop()+$(window).height();
		if($judgeHight1 >=$icon1) {
			$('.header_two').addClass('blog_dongheaderBlock');
			$('.blog_right>h3').addClass('blog_rightheaderBlock');
			$('.blog_right>h3').animate({
				opacity: 0.2,
				opacity: 0.4,
				opacity: 0.6,
				opacity: 0.8,
				opacity: 1
			},1500)
		}
	});
	
	var $icon2 = $('.martoplast').offset().top;
	$(document).scroll(function() {
		var $judgeHight2 = $(document).scrollTop()+$(window).height();
		if($judgeHight2 >= $icon2) {
			$('.blog_last').addClass('blog_dongheaderBlock');
		}
	});
	
	//问题：时间只能触发一次
	//小字体的动画
	/*$('.span_icon').hover(
		function() {
			$(this).addClass('span_iconAdd');
		},
		function(){
			$(this).addClass('span_iconRemove');
	})*/
	
	
	$('.span_icon').mouseover(function() {
		$(this).removeClass('span_iconRemove');
		$(this).addClass('span_iconAdd');
	})
	$('.span_icon').mouseout(function() {
		$(this).removeClass('span_iconAdd');
		$(this).addClass('span_iconRemove');
	})
	
	//页码动画
	var $lastdonghua1 = $('.page_number').offset().top+550;
	$(document).scroll(function() {
		var $clientH1 = $(document).scrollTop()+$(window).height();
		if($clientH1 >= $lastdonghua1) {
			$('.page_number').animate({'opacity':1},50);
			$('.page_number').addClass('page_number_block');
		}
	})
	
	//底部动画
	var $lastdonghua = $('#buttomm_one').offset().top;
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