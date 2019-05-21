$(function() {
	
//中间404字体动画
 var navoffeset=$(".for").offset().top;
 $(window).ready(function(){
	var scrollpos = $(document).scrollTop()+$(window).height(); 
	if(scrollpos >=navoffeset){
		$(".pos").animate({
			'margin-top':0,
			'opacity':0.2,
			'opacity':0.4,
			'opacity':0.6,
			'opacity':0.8,
			'opacity':1
		},2000);
		$('.btn').animate({
			'margin-top':'2em',
			'opacity':0.2,
			'opacity':0.4,
			'opacity':0.6,
			'opacity':0.8,
			'opacity':1
		},2000)
	}
 });
 
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