//var $ = require("jquery");


//import Vue from 'vue';
new Vue({
	el: '#example',
	data: {
		carouselControls: true,
		slideWidth: 500,
		autoplayTimeout: 3000,
		slideHeight: 750,
		slideBorder: 1,
		slideSpace: 420,
		slidePerspective: 10,
		slideScaling: 300,
		animationSpeed: 500,
		startIndex: 0,
		autoplayEnabled: true,
		visible: 7,
		direction: 'rtl',
		infinite: true,
		disable3d: false,
		controlsPrevHtml: '&#10092;',
		controlsNextHtml: '&#10093;',
		controlsWidth: 30,
		controlsHeight: 60,
		slides: [
			{
				src: 'img/icons/3d-slider/3d/index0.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index1.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index2.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index4.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index3.jpg' //
            },
			{
				src: 'img/icons/3d-slider/3d/index5.jpg' //
            },
			{
				src: 'img/icons/3d-slider/3d/index6.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index7.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index8.jpg'
            },
			{
				src: 'img/icons/3d-slider/3d/index9.jpg'
            }
        ]
	},
	components: {
		'carousel-3d': Carousel3d.Carousel3d,
		'slide': Carousel3d.Slide
	}
})

//$('#unique_design').slickLightbox({
//     src: 'src',
//   itemSelector: 'img'
//});



// hover effect of button in section#examples
$(".btn_look").on("mouseenter", function () {
	$(".inner_capcha").addClass("hover_btn_examples");
});
$(".btn_look").on("mouseleave", function () {
	$(".inner_capcha").removeClass("hover_btn_examples");
});

var clock;

$(document).ready(function () {




	//parallax tests


	$(window).on("scroll", function () {

		//background parallax  of section #start
		var sstart = $("#start"),
			overlay = $(".overlay1"),
			sheight = sstart.height(),
			winST = $(this).scrollTop();
		sstart.css("background-position", " 50% " + (-winST / 20 + 50) + "%");
		overlay.css("opacity", winST / sheight + 0.08);


		if ($(window).width() > 1045) {

			if (winST > $('#opportunities .fl_opp').offset().top - $(window).height()) {

				var offset = Math.min(0, winST - $('#opportunities .fl_opp').offset().top + $(window).height() / 2.5);

				console.log(Math.abs(1 - offset));

				$('#opportunities .fl_opp .item:first-child').css({
					'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.4) + 'px)'
				});

				$('#opportunities .fl_opp .item2').css({
					//'transform': 'scale('+ (Math.abs(offset)) +')'
				});

				$('#opportunities .fl_opp .item:last-child').css({
					'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.4) + 'px)'
				});

			}

		}

	});




	//behaviour of header by scrolling 
	function headerBehaviour1() {

		$.scrollDetection = function (options) {
			var settings = $.extend({
				scrollDown: function () {},
				scrollUp: function () {}
			}, options);

			var scrollPosition = 0;
			$(window).scroll(function () {
				var cursorPosition = $(this).scrollTop();
				if (cursorPosition > scrollPosition) {
					settings.scrollDown();
				} else if (cursorPosition < scrollPosition) {
					settings.scrollUp();
				}
				scrollPosition = cursorPosition;
			});
		};


		var $header = $("header");
		$.scrollDetection({
			scrollDown: function () {
				$header.addClass("header_hidden");
			},
			scrollUp: function () {
				$header.removeClass("header_hidden");
			}
		});
	}

	headerBehaviour1();

	// behaviour of header by scrolling (second solution)

	function headerBehaviour2() {

		$("header").headroom({
			"offset": 205,
			"tolerance": 15,
			"classes": {
				"initial": "animated",
				"pinned": "swingInX",
				"unpinned": "swingOutX"
			}
		});

		// to destroy
		$("#header").headroom("destroy");

	}

	//headerBehaviour2();




	$('.unique_slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		slidesToScroll: 1,

	});
	$('.unique_slider, .examples_slide').slickLightbox({
		src: 'src',
		itemSelector: '.wrap_img_slider img'
	});

	$('#arrayOfImages').slickLightbox({
		images: [
			  'img/icons/3d-slider/3d/index0.jpg',
			  'img/icons/3d-slider/3d/index2.jpg',
			  'img/icons/3d-slider/3d/index3.jpg'
		  ]
	});

	$('.examples_slide').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '50px',
				}
    },
			{
				breakpoint: 900,
				settings: {
					centerPadding: '0',
				}
    },
			{
				breakpoint: 520,
				settings: {
					centerPadding: '50px',
					slidesToShow: 1
				}
    }
  ]

	});


	//clock counter

	var clock;

	var date = new Date(2017, 8, 1);
	var now = new Date();
	var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

	var clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});



	//			clock = $('.clock').FlipClock({
	//		        clockFace: 'DailyCounter',
	//		        autoStart: false,
	//		        callbacks: {
	//		        	stop: function() {
	//		        		$('.message').html('Время акции вышло (')
	//		        	}
	//		        }
	//		    });
	//				    
	//		    clock.setTime(200000);
	//		    clock.setCountdown(true);
	//		    clock.start();

	//WOW init
	new WOW().init();

	// slide and swipe menu init
	$('nav').slideAndSwipe();

	$(".ssm-toggle-nav").on("click", function () {
		$("body").toggleClass("body_OH");
	});

	document.addEventListener("keydown", keyDownTextField, false);

	function keyDownTextField(e) {
		var keyCode = e.keyCode;
		if (keyCode == 27) {


		}
	}




	//Form VAlidation 

	$("#js_register_form").validate({
		rules: {
			form_name: {
				required: true
			},
			form_email: {
				required: true,
				email: true
			},
			form_phone: {
				required: true,
				minlenhth: 10,
				digits: true
			},
		},
		messages: {
			form_name: {
				required: "Обязательное поле"
			},
			form_email: {
				required: "Обязательное поле",
				email: "Введите корректный Email"
			},
			form_phone: {
				required: "Обязательное поле"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});
	$("#js_register_form2").validate({
		rules: {
			form_name: {
				required: true
			},
			form_email: {
				required: true,
				email: true
			},
			form_phone: {
				required: true,
				minlenhth: 10,
				digits: true
			},
		},
		messages: {
			form_name: {
				required: "Обязательное поле"
			},
			form_email: {
				required: "Обязательное поле",
				email: "Введите корректный Email"
			},
			form_phone: {
				required: "Обязательное поле"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});

	//phone input mask
	$("#form_phone, #form_phone2").mask("(999) 999-99-99");


	//    $(".button-collapse").sideNav();




	// section#start overlay opacity by scrolling 
	$(window).on("scroll", function () {
		var sstart = $("#start"),
			overlay = $(".overlay"),
			overlayIMG = $(".overlay_img"),
			sheight = sstart.height(),
			winST = $(window).scrollTop();
		overlay.css("opacity", winST / sheight);
		overlayIMG.css("opacity", winST / sheight);
	});

	// random overlay color at section#start
	var arrColors = [
            "img/bg_start_big_overlay_paren_orangeP.png",
            "img/bg_start_big_overlay_paren_orange.png",
            "img/bg_start_big_overlay_paren_darkBlue.png",
            "img/bg_start_big_overlay_paren_coral.png",
            "img/bg_start_big_overlay_paren_grey.png"
        ];

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
	$(".overlay_img").attr("src", arrColors[randomInteger(0, 4)]);


	// hover effect of button in section#start 
	$(".getCons").on("mouseenter", function () {
		$("#start .containerr").addClass("hoverButton");
	});
	$(".getCons").on("mouseleave", function () {
		$("#start .containerr").removeClass("hoverButton");
	});

	// header appearing after start-section is scrolled
	/*if ($(window).scrollTop() + 200 > $("#underStart").offset().top) {
	    $("header").css("top", "0");
	}
	$(window).on("scroll", function () {
	    if ($("#underStart").offset().top - $(window).scrollTop() - 200 < 0) {
	        $("header").css("top", "0");
	        $("header nav").css("top", "60px");
	        $(" header .ssm-overlay").css("top", "60px");
	    } else {
	        $("header").css("top", "");
	        $("header nav").css("top", "");
	        $(" header .ssm-overlay").css("top", "");
	    }
	});*/


	// parallax init
	$('.parallax').parallax();

	//add preloader of scrolling
	$("<div id='contPreloader'><div id='scrollPreload'></div></div>").prependTo($("body"));
	$(window).scroll(function () {
		var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
		$("#scrollPreload").width(ratio + "%");
	});



	// change header style by scrolling 
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 77) {
			$("header .logo").css("margin", "0px");
		} else {
			$("header .logo").css("margin", "");
		}
	});


	// inner anchor-links
	$('a[data-target^="anchor"], [data-target^="anchor"] ').on("click.smoothscroll", function () {
		var target = $(this).attr("href"),
			bl_top = $(target).offset().top - 56;
		$('body, html').animate({
			scrollTop: bl_top
		}, 700);
		return false;
	});


	// buttton UP
	// button arrow to UP

	$("body").append("<button class='btn_up'/>");

	$(window).scroll(function () {
		var windscroll = $(window).scrollTop();
		if ($(window).scrollTop() > 50) {
			$(".btn_up").addClass("activeB");
		} else {
			$(".btn_up").removeClass("activeB");
		}

	});

	$(".btn_up").on("click", function (e) {
		e.preventDefault();
		$(this).removeClass("activeB");
		$("body").animate({
			'scrollTop': 0
		}, 800);
		$("html").animate({
			'scrollTop': 0
		}, 800);

	});


	// heightlite nav links by scrolling
	$(document).scroll(function () {

		navigationAnchors(1);
		navigationAnchors(2);
		navigationAnchors(3);
		navigationAnchors(4);
		navigationAnchors(5);
		navigationAnchors(7);
		navigationAnchors(6);
		navigationAnchors(7);



		function navigationAnchors(n) {
			if (($(`[data-pos='pos-${n}']`).offset().top - $(window).scrollTop()) - 300 < 0) {
				if (!$(`[data-pos='pos-${n}']`).next().offset().top - $(window).scrollTop() - 300 < 0) {
					$(`.main-navigation a.link-${n}`).parent().siblings().children().removeClass('activeNavLink');
					//                    console.dir($(`.nav a.link-${n}`).parent().siblings());
					$(`.main-navigation a.link-${n}`).addClass('activeNavLink');
				} else {
					$(`.main-navigation a.link-${n}`).removeClass('activeNavLink');
				}
			} else {
				$(`.main-navigation a.link-${n}`).removeClass('activeNavLink');
			}
		}
	});






});
