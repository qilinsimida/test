$(function() {
	//填写信息框动画
	var $box = $('.box').offset().top;
	$(document).ready(function(){
		var $visibleHight = $(document).scrollTop()+$(window).height();
		if($visibleHight >= $box) {
			$('.contact_oneleft').animate({'left':0},2000);
			$('.contact_oneright').animate({'left':0},2000);
		}
	})
	
	
	
	//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(106.558437,29.568996);//定义一个中心点坐标
        map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    initMap();//创建和初始化地图
    
    
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