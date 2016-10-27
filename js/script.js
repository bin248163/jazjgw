$(function() {
	if ($.browser.msie && $.browser.version <= 8 ){
    alert("您使用的IE浏览器版本过低，可能造成体验不佳，建议您更新至最新的浏览器版本或使用谷歌、火狐等现代浏览器！");
}
	//禁止右键代码，单机鼠标右键时禁止它的默认事件
	var body = document.getElementsByTagName('body')[0];
	body.oncontextmenu = function() {
		return false;
	}
	//首页input

	$("input.text1").val("请输入手机号码");
	textFill($("input.text1"));
	$("input.text2").val("您的称呼");
	textFill($("input.text2"));
	$("input.text3").val("您的手机号码");
	textFill($("input.text3"));
	$("input.text4").val("您所在的城市");
	textFill($("input.text4"));
	$("textarea.text5").val("您的地址");
	textFill1($("textarea.text5"));

	function textFill(input) {
		var originalvalue = input.val();
		input.focus(function() {
			if($.trim(input.val()) == originalvalue) {
				input.val('');
			}
		}).blur(function() {
			if($.trim(input.val()) == '') {
				input.val(originalvalue);
			}
		});
	}
	function textFill1(div) {
		var originalvalue = div.val();
		div.focus(function() {
			if($.trim(div.val()) == originalvalue) {
				div.val('');
			}
		}).blur(function() {
			if($.trim(div.val()) == '') {
				div.val(originalvalue);
			}
		});
	}
	function BodyOnLoad()
{
var textarea= document.getElementById("textarea");
textarea.style.posHeight=textarea.scrollHeight;
} 
	//team	
	var $teamList1 = $('.policy-list div');
	var $teamN1 = $('.policy-con');
	$teamList1.hover(function() {
		var index = $teamList1.index(this);
		$teamN1.find('div').eq(index).addClass('qg').siblings().removeClass('qg');
		return false;
	})

	//team	
	var $teamList = $('.teamList a');
	var $teamN = $('.team-con');
	$teamList.click(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $teamList.index(this);
		$teamN.find('.team-n').eq(index).show().siblings().hide();
		return false;
	})

   $('.videoA').click(function() {
		var spUrl = $(this).attr("href");
		var object_str='<object data="'+spUrl+'" style="width: 100%;height: 100%;display: block;" />';
		$('.video').html(object_str);
		$('.video-w').show();
		return false;
		
	});
	$('.sp').click(function() {
		$('.video-w').show();
		var spUrl = $(this).attr("href");
		$('.video-w object').attr("data", spUrl);
		var object_str='<object data="'+spUrl+'" style="width: 100%;height: 100%;display: block;" />';
		$('.video').html(object_str);
		$('.video-w').show();
		return false;
	})
	
	$('.video-w').find('.x').click(function() {
			$('.video-w').hide();
			var object_str='<object data=""/>';
		    $('.video').html(object_str);
		})
		//左右滚动
	$(".gd_main div span").mouseover(function() {
		$(this).addClass("gd_main_span1").siblings("span").removeClass("gd_main_span1");
	}).mouseout(function() {
		$(this).removeClass("gd_main_span1").siblings("span");
	})

	var index = 0,
	Swidth = 1200,
	timer = null,
	len = $(".gd_main-div").length;

	function NextPage() {
		if(index > len - 1) {
			index = 0;
		}
		$(".gd_main").stop(true, false).animate({
			left: -index * Swidth + "px"
		}, 600)
	}

	function PrevPage() {
		if(index < 0) {
			index = len - 1;
		}
		$(".gd_main").stop(true, false).animate({
			left: -index * Swidth + "px"
		}, 600)
	}

	$(".gd_title span a").each(function(a) {
		$(this).mouseover(function() {
			index = a;
			NextPage();
		});
	});
	//下一页
	$(".gd_next").click(function() {
		index++;
		NextPage();
	});
	//上一页
	$(".gd_prev").click(function() {
		index--;
		PrevPage();
	});
	//自动滚动
	var timer = setInterval(function() {
		index++;
		NextPage();
	}, 4000);

	$(".gd_next, .gd , .gd_prev").mouseover(function() {
		clearInterval(timer);
	});
	$(".gd_next, .gd , .gd_prev").mouseleave(function() {
		timer = setInterval(function() {
			index++;
			NextPage();
		}, 4000);
	});
	//首页tab1

	var $tabList = $('#tablist1 .market-l');
	var $tab = $('#tab1');
	$tabList.hover(function() {
			$(this).addClass('this').siblings().removeClass('this');
			var index = $tabList.index(this);
			$tab.find('.market-x').eq(index).show().siblings().hide();
		})
		//招商加盟
	$('#join').click(function() {
		var scroll_offset = $("#joinx").offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});
	//返回顶部
	$top = $('#top');
	$top.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});

	//首页tab1
	var $ysList = $('#ysList >div');
	var $ys = $('#ys');
	$ysList.hover(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $ysList.index(this);
		$ys.find('.min').eq(index).show().siblings().hide();
	})
})