$(function() {
	//禁止右键代码，单机鼠标右键时禁止它的默认事件
	/*var body = document.getElementsByTagName('body')[0];
	body.oncontextmenu = function() {
		return false;
	}*/

	//banner
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
	//二级菜单隐藏
	$('#videoA').click(function() {
			$('#video').show();
			return false;
		})
	$('#video').find('.x').click(function() {
			$('#video').hide();
		})
	//左右滚动
	$(".gd_main div span").mouseover(function(){
		$(this).addClass("gd_main_span1").siblings("span").removeClass("gd_main_span1");
	}).mouseout(function(){
		$(this).removeClass("gd_main_span1").siblings("span");
	})	
	
	var 
		 index = 0 ;
		Swidth = 1000 ;
		 timer = null ;
		   len = $(".gd_title span a").length ; 
		
		function NextPage()
		{	
			if(index>2)
			{
				index = 0 ;
			}
			$(".gd_title span a").removeClass("gd_title_a1").eq(index).addClass("gd_title_a1");
			$(".gd_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		function PrevPage()
		{	
			if(index<0)
			{
				index = 2 ;
			}
			$(".gd_title span a").removeClass("gd_title_a1").eq(index).addClass("gd_title_a1");
			$(".gd_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		$(".gd_title span a").each(function(a){
            $(this).mouseover(function(){
				index = a ;
				NextPage();
			});
        });
		//下一页
		$(".gd_next").click(function(){
			 index++ ;
			 NextPage();
		});
		//上一页
		$(".gd_prev").click(function(){
			 index-- ;
			 PrevPage();
		});
     //首页tab1
	

	var $tabList = $('#tablist1 ul li');
	var $tab = $('#tab1');
	$tabList.hover(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $tabList.index(this);
		$tab.find('>div').eq(index).show().siblings().hide();
	})
	$tabList.click(function() {
			$(this).addClass('this').siblings().removeClass('this');
			var index = $tabList.index(this);
			$tab.find('>div').eq(index).show().siblings().hide();
			return false;
		})
		//返回顶部
	$top = $('#top');
	$top.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});	
})