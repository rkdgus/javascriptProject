$(function() {
	$('#header-text').bxSlider({
		mode : 'vertical',
		controls : false,
		pager : true,
		auto : true,
		speed : 400,
		pause : 2500,
		minSlides : 1
	});

	$("#welcome").mouseover(function() {
		$(this).stop();
		$(this).animate({
			color : "rgb(250,250,250)",
			borderColor : "rgb(250,250,250)"
		}, 200)
	});

	$("#welcome").mouseout(function() {
		$(this).stop();
		$(this).animate({
			color : "rgb(0,0,0)",
			borderColor : "rgb(0,0,0)",
		}, 200)
	});

	var top1 = $("body").offset().top;
	var menuScroll = $("#menu").offset().top;
	


	$("#welcome").click(function() {
		$("html,body").stop();
		$("html,body").animate({
			scrollTop : menuScroll
		}, 800)
		return false;
	});

	$("#topBtn").mouseover(function() {
		$(this).stop();
		$(this).animate({
			backgroundColor : "rgb(0,0,0)"
		}, 200)
	})
	$("#topBtn").mouseout(function() {
		$(this).stop();
		$(this).animate({
			backgroundColor : "gray"
		}, 200)
	})
	$("#topBtn").click(function() {
		$("html, body").stop();
		$("html, body").animate({
			scrollTop : top1
		}, 500)
		return false;
	})


	$(".menu li a").eq(0).click(function() {
		$("html, body").stop();
		$("html, body").animate({
			scrollTop : top1
		}, 500)
		return false;
	})

	$(".menu li a").eq(1).click(function() {

		$("html, body").stop();
		$("html, body").animate({
			scrollTop : menuScroll
		}, 500)
		return false;
	})
	
	$(".menu li a").eq(2).click(function() {
		var about_migoScroll = $("#about_migo").offset().top - 160;
		
		$("html, body").stop();
		$("html, body").animate({
			scrollTop : about_migoScroll
		}, 500)
		return false;
	})

	$(".menu li a").eq(3).click(function() {
		var servicesScroll = $("#our_services").offset().top - 160;
		
		$("html, body").stop();
		$("html, body").animate({
			scrollTop : servicesScroll
		}, 500)
		return false;
	})

	$(".menu li a").eq(4).click(function() {
		var helpScroll = $("#help").offset().top - 160;
		$("html, body").stop();
		$("html, body").animate({
			scrollTop : helpScroll
		}, 500)
	})
	$("#topBtn").hide();
	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > top1) {
			$("#topBtn").show();
			
		} else {
			$("#topBtn").hide();
		}
	})
	
	
	
	$("#quick").hide();
	
	$(".menu li a").eq(5).click(function() {
		$("#quick").slideDown(300);
		return false;
	})
	$("#back").click(function(){
		$("#quick").slideUp(300);
		return false;
	})
	
	$("#quick button").click(function(){
		if($("#quick").find("input").eq(0).val()==""){
			alert("이름을 입력하세요");
		}else if($("#quick").find("input").eq(1).val()==""){
			alert("연락처를 입력하세요");
		}else{
			alert("잠시 후 연락드리겠습니다.");
		}
		return false;
	})
	
	
	
	
	
	$(window).on("scroll",function() {
			var scrollTop = $(window).scrollTop();
			var about_migoScroll = $("#about_migo").offset().top-160;
			var top1 = $("body").offset().top;
			var menuScroll = $("#menu").offset().top;
			
			var servicesScroll = $("#our_services").offset().top - 160;
			var helpScroll = $("#help").offset().top - 160;
			if (scrollTop >= top1&&scrollTop<menuScroll){
				$("#menu li").addClass("menu_li");
				$("#menu li").eq(0).removeClass();
				$("#menu li a").eq(0).css("color","#FFA400");
				$("#menu li").not($("#menu li").eq(0)).find("a").css("color","rgb(81,90,95)");
					
			}
			
			if (scrollTop+10 > menuScroll && scrollTop < about_migoScroll){
				$("#menu li").addClass("menu_li");
				$("#menu li").eq(1).removeClass();
				$("#menu li a").eq(1).css("color","#FFA400");
				$("#menu li").not($("#menu li").eq(1)).find("a").css("color","rgb(81,90,95)");
			}
			if (scrollTop >= about_migoScroll &&scrollTop < servicesScroll){
				$("#menu li").addClass("menu_li");
				$("#menu li").eq(2).removeClass();
				$("#menu li a").eq(2).css("color","#FFA400");
				$("#menu li").not($("#menu li").eq(2)).find("a").css("color","rgb(81,90,95)");
			}
			if (scrollTop >= servicesScroll&&scrollTop < helpScroll){
				$("#menu li").addClass("menu_li");
				$("#menu li").eq(3).removeClass();
				$("#menu li a").eq(3).css("color","#FFA400");
				$("#menu li").not($("#menu li").eq(3)).find("a").css("color","rgb(81,90,95)");
			}
			if (scrollTop >= helpScroll){
				$("#menu li").addClass("menu_li");
				$("#menu li").eq(4).removeClass();
				$("#menu li a").eq(4).css("color","#FFA400");
				$("#menu li").not($("#menu li").eq(4)).find("a").css("color","rgb(81,90,95)");
			}
		})
	
	
	
	
	
	$(document).on("mouseover",".menu_li>a",function(){
		$(this).stop();
		$(this).animate({
			color : "#FFA400"
		}, 200)
	})
		
	

	$(document).on("mouseout",".menu_li>a",function(){
		$(this).stop();
		$(this).animate({
			color : "rgb(81,90,95)"
		}, 200)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});