$(function() {
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
			per_pic()
		},3000);
	}
	//图片向左翻转
	function per_pic() {
		var perlingjiedian;
		if(parseInt(ul.style.left) === 0){
			perlingjiedian = -546;
		}else {
			perlingjiedian = parseInt(ul.style.left)+273;
		}
		ul.style.left = perlingjiedian+"px";
	}
	//图片向右翻转
	function next_pic() {
		var perlingjiedian;
		if(parseInt(ul.style.left) === -546){
			perlingjiedian = -273;
		}else {
			perlingjiedian =parseInt(ul.style.left)-273;
		}
		ul.style.left = perlingjiedian+"px";
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
	
	//学员信息部分
	//鼠标移入图片的动画事件
	//第一个动画
	var $img1 =$('#img1');
	var $data1 = $('.date1');
	donghua($img1,$data1);
	//第二个动画
	var $img2 =$('#img2');
	var $data2 = $('.date2');
	donghua($img2,$data2);
	//第一个动画
	var $img3 =$('#img3');
	var $data3 = $('.date3');
	donghua($img3,$data3);
	
	function donghua(obj1,Obj2){
		obj1.mouseover(function() {
			Obj2.addClass('date1_block');
		})
		obj1.mouseout(function() {
			Obj2.removeClass('date1_block');
		})
	}
	//滑动的效果
	var $ourHig1 = $('.trainer_bg').offset().top;
	$(document).scroll(function() {
		var $clientHig1 = $(document).scrollTop()+$(window).height();
		if($clientHig1>=$ourHig1) {
			$('.student_donghua1').animate({
				'left':0
			},1000);
			$('.student_donghua2').animate({
				'top':0
			},1000);
			$('.student_donghua3').animate({
				'left':0
			},1000);
		}
	});
	
	//我们的消息的动画效果
	var $ourHig = $('.one_shuffing').offset().top;
	$(document).scroll(function() {
		var $clientHig = $(document).scrollTop()+$(window).height();
		if($clientHig>=$ourHig) {
			$('.one_shuffing').addClass('one_shuffing_block');
		}
	});
	
	//底部动画
	var $lastdonghua1 = $('#buttomm_one').offset().top;
	$(document).scroll(function() {
		var $clientH1 = $(document).scrollTop()+$(window).height();
		if($clientH1 >= $lastdonghua1) {
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