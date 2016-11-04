$(function() {
	if($.browser.msie && $.browser.version <= 8) {
		alert("您使用的IE浏览器版本过低，可能造成体验不佳，建议您更新至最新的浏览器版本或使用谷歌、火狐等现代浏览器！");
	}
	//禁止右键代码，单机鼠标右键时禁止它的默认事件
	var body = document.getElementsByTagName('body')[0];
	body.oncontextmenu = function() {
		return false;
	}
	if($(".banner").length > 0) {
		var head = $(".banner").css("backgroundImage").replace(' url(', '').replace(' )', '');
		var head1 = 'background-image:' + head;
		$(window).scroll(function() {
			if($(window).scrollTop() > 0) {
				$('.head').addClass('position');
			}
			if($(window).scrollTop() == 0) {
				$('.head').removeClass('position');
			}
		});
	}
	//textarea
	var textarea = $('.text5');
	var pre = $('.pre');

	textarea.oninput = function() {
		pre.text() = textarea.val();
		textarea.style.height = pre.offsetHeight + 'px';
	}

	//弹出框pattern.length > 6 && !isNaN(pattern)
	var lc = 0;
	$('.slider-x button').click(function() {
		var pattern = $('.slider-x input').val();		
		if(pattern.length < 6 || isNaN(pattern)) {
			$('.dow-w,.tan').show();
			return false;
		}else if(1>2){
			$('.chong').show();
			return false;
		}else{
			$('.dow-w,.dow').show();
			var dow1 = "预约成功";
			var dow2 = "我们的客服会尽快与您联系";
			var dow3 = $('.slider-x input').val();
			$('.dow1').text(dow1);
			$('.dow2').text(dow2);
			$('.dow4').text('');
			$('.dow5').text('');
			$('.dow3').text("您的手机号：" + dow3);
			lc++;
		}
		
	});
	$('.btn button').click(function() {
		var dow1 = "登记成功";
		var dow2 = "我们的客服会尽快与您联系";
		var dow3 = $('.text3').val();
		var name = $('.text2').val();
		var city = $('.text4').val();
		var dizhi = $('.text5').text();
		var pattern = $('.text3').val();
		if(pattern.length < 6 || isNaN(pattern) || name=="您的称呼" || dizhi=="您的地址" || city=="您所在的城市") {
			$('.dow-w,.tan').show();
			var tan1 = "请填写完整信息";
			$('.tan1').text(tan1);
			return false;
		}else if(pattern.length > 6 && !isNaN(pattern) && name!="您的称呼" && city!="您所在的城市" && dizhi!="您的地址"){
			$('.dow-w,.dow').show();
			$('.dow1').text(dow1);
			$('.dow2').text(dow2);
			$('.dow3').text('');
			$('.dow4').text(name + '  ' + dow3);
			$('.dow5').text(city + '  ' + dizhi);
		}
	});
	$('.dow-x').click(function() {
		$('.dow-w,.dow').hide();
		$('.slider-x input').val('请输入手机号码');
		$('.text2').val('您的称呼');
		$('.text3').val('您的手机号码');
		$('.text4').val('您所在的城市');
		$('.text5').text('您的地址');
	});
	$('.tan-x').click(function() {
		$('.dow-w,.tan').hide();
		
	});
	$('.chong-x').click(function() {
		$('.dow-w,.chong').hide();
	});
	//首页input

	$("input.text1").val("请输入手机号码");
	textFill($("input.text1"));
	$("input.text2").val("您的称呼");
	textFill($("input.text2"));
	$("input.text3").val("您的手机号码");
	textFill($("input.text3"));
	$("input.text4").val("您所在的城市");
	textFill($("input.text4"));
	$(".text5").text("您的地址");
	textFill1($(".text5"));

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
		var originalvalue = div.text();
		div.focus(function() {
			if($.trim(div.text()) == originalvalue) {
				div.text('');
			}
		}).blur(function() {
			if($.trim(div.text()) == '') {
				div.text(originalvalue);
			}
		});
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
		var object_str = '<object data="' + spUrl + '" style="width: 100%;height: 100%;display: block;" />';
		$('.video').html(object_str);
		$('.video-w').show();
		return false;

	});
	$('.sp').click(function() {
		$('.video-w').show();
		var spUrl = $(this).attr("href");
		$('.video-w object').attr("data", spUrl);
		var object_str = '<object data="' + spUrl + '" style="width: 100%;height: 100%;display: block;" />';
		$('.video').html(object_str);
		$('.video-w').show();
		return false;
	})

	$('.video-w').find('.x').click(function() {
			$('.video-w').hide();
			var object_str = '<object data=""/>';
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