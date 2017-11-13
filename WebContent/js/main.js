$(function() {
	var headerOffsetTop = $("#menu").offset().top;
	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > headerOffsetTop) {
			$("#menu").addClass("page-header");
		} else {
			$("#menu").removeClass("page-header");
		}
	})

	$("#sliderImg li").mouseover(function() {
		$(this).find("div").stop();
		$(this).find("div").fadeIn(200);
	})
	$("#sliderImg li").mouseout(function() {
		$(this).find("div").stop();
		$(this).find("div").fadeOut(200);
	})

	$("#back_gray2 > div").mouseover(function() {
		$(this).stop();
		$(this).find("h1").stop();
		$(this).find("h3").stop();
		$(this).find("li").stop();
		$(this).find("p").stop();
		var src = $(this).find("img").attr("src").replace(".jpg", "1.jpg");
		$(this).find("img").attr("src", src);
		$(this).find("div").css("background", "white");
		$(this).find("div div").css("border", "4px solid #FFA400")
		$(this).animate({
			backgroundColor : "#FFA400"
		}, 200)
		$(this).find("h1").animate({
			color : "white"
		}, 200)
		$(this).find("p").animate({
			color : "white"
		}, 200)
		$(this).find("li").animate({
			color : "white"
		}, 200)
		$(this).find("h3").animate({
			color : "white"
		}, 200)
	})

	$("#back_gray2 > div").mouseout(function() {
		$(this).stop();
		$(this).find("h1").stop();
		$(this).find("h3").stop();
		$(this).find("li").stop();
		$(this).find("p").stop();
		var src = $(this).find("img").attr("src").replace("1.jpg", ".jpg");
		$(this).find("img").attr("src", src);
		$(this).find("div").css("background", "#FFA400");
		$(this).find("div div").css("border", "4px solid white")
		$(this).animate({
			backgroundColor : "white"
		}, 200)
		$(this).find("h1").animate({
			color : "rgb(81,90,95)"
		}, 200)
		$(this).find("p").animate({
			color : "rgb(81,90,95)"
		}, 200)
		$(this).find("li").animate({
			color : "rgb(81,90,95)"
		}, 200)
		$(this).find("h3").animate({
			color : "rgb(81,90,95)"
		}, 200)

	})

	$("#fast button").mouseover(function() {
		$(this).find("a").stop();
		$(this).find("a").animate({
			color : "rgb(81,90,95)"
		}, 200)
	})

	$("#fast button").mouseout(function() {
		$(this).find("a").stop();
		$(this).find("a").animate({
			color : "white"
		}, 200)
	})
	
	

		
	var scrollNum = $("#about_migo").offset().top-170;
	$(window).on("scroll",function() {
		var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollNum) {
				$("#num h1").eq(0).animateNumber({
					number:85
					},1500);
				$("#num h1").eq(1).animateNumber({
					number:61
					},1500);
				$("#num h1 span").animateNumber({
					number:15
					},1500);
				$("#num h1").eq(3).animateNumber({
					number:8
					},1500);
				scrollNum=999999;
			}
		})
			
	

	
	$("#fast button").click(function(){
		var helpScroll = $("#help").offset().top - 160;
		$("html, body").stop();
		$("html, body").animate({
			scrollTop : helpScroll
		}, 500)
	})
		
	
	var bx=$('#wrap_bx').bxSlider({
		controls : false,
		pager : false,
		speed : 400,
		pause : 2500,
		minSlides : 1
	});	
		
	$('.arrow').eq(0).click(function(){
		
		bx.goToPrevSlide();
		return false;
	})
	
	$('.arrow').eq(1).click(function(){
		
		bx.goToNextSlide();
		return false;
	})
	
	
	
	
	
	
});