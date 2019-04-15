$(document).ready(function() {
	   
	/******Top Menu Buttons******/
	$( "#roulette" ).click(function() {
		if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( this ).addClass( "on" );
			$( this ).siblings().removeClass( "on" );
			$( "#header" ).removeClass( "off" );
			$( "#maps, #settings, #credits" ).hide();
			$( "#contract" ).show();
			$( "html" ).removeClass( "hide" );
		};	
	});
	$( "#missions" ).click(function() {
		$( this ).addClass( "on" );
		$( this ).siblings().removeClass( "on" );
		$( "#header" ).addClass( "off" );
		$( "#contract, #settings, #credits" ).hide();
		$( "#maps" ).show();
		$( "html" ).addClass( "hide" );
	});
	$( "#options" ).click(function() {
		$( this ).addClass( "on" );
		$( this ).siblings().removeClass( "on" );
		$( "#header" ).addClass( "off" );
		$( "#contract, #maps, #credits" ).hide();
		$( "#settings" ).show();
		$( "html" ).addClass( "hide" );
	});
	$( "#about" ).click(function() {
		$( this ).addClass( "on" );
		$( this ).siblings().removeClass( "on" );
		$( "#header" ).addClass( "off" );
		$( "#contract, #maps, #settings" ).hide();
		$( "#credits" ).show();
		$( "html" ).addClass( "hide" );
	});
	
	/******Roulette Submenu Buttons******/
	$( "#submenu_obj" ).click(function() {
		$( this ).addClass( "on" );
		$( "#travel, div[id^='target'], div[id^='objective']" ).show();
		$( "div[id^='complication'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_comp" ).click(function() {
		$( this ).addClass( "on" );
		$( "div[id^='complication']" ).show();
		$( "#travel, div[id^='target'], div[id^='objective'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_chal" ).click(function() {
		$( this ).addClass( "on" );
		$( "#restriction, #timelimit, #ratingget, #diffget, #challengesi" ).show();
		$( "#travel, div[id^='target'], div[id^='objective'], div[id^='complication']" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_issue" ).click(function() {
		$( "#map" ).addClass( "on" );
		$( "#submenu_obj" ).addClass( "on" );
		$( "#travel, div[id^='target'], div[id^='objective']" ).show();
		$( "div[id^='complication'], div[id^='restriction'], #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( "#submenu_obj" ).siblings().removeClass( "on" );
	});	
	
	/******Map Select Submenu Buttons******/
	$( "#submenu_random" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='rand'], #rand-h1h2" ).show();
		$( "div#h1, div#h1dlc, div#h2" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h1" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h1" ).show();
		$( "label[id^='rand'], #rand-h1h2, div#h1dlc, div#h2" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h1dlc" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h1dlc" ).show();
		$( "label[id^='rand'], #rand-h1h2, div#h1, div#h2" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h2" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h2" ).show();
		$( "label[id^='rand'], #rand-h1h2, div#h1, div#h1dlc" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
		
	/******Map Select Checkbox Logic******/
	//Style nameplate if checkbox "on"
	$("#maps input:checked").parent().addClass("on");
	
	$("#maps input:checkbox").change(function(){
		//Toggle nameplate style "on" when location selected
		if($(this).is(":checked")) {
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		};
		
		//Toggle Random All if every level is selected or not
		if($(this).is("#RANDOM:checked")) {
			$( "input[id^='RANDOM'], input.h1, input.h1bm, input.h1pz, input.h2, input.h2dlc" ).prop('checked', true).parent().addClass("on");
		}
		else if($(this).is("#RANDOM:not(:checked)")) {
			$( "input[id^='RANDOM'], input.h1, input.h1bm, input.h1pz, input.h2, input.h2dlc" ).prop('checked', false).parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1:checked")) {
			$( "input.h1" ).prop('checked', true).parent().addClass("on");
			if($(".lvl:checked").length == $(".lvl").length) {
				$("input#RANDOM").prop('checked', true).parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1:not(:checked)")) {
			$( "input.h1, input#RANDOM" ).prop('checked', false).parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1BM:checked")) {
			$( "input.h1bm" ).prop('checked', true).parent().addClass("on");
			if($(".lvl:checked").length == $(".lvl").length) {
				$("input#RANDOM").prop('checked', true).parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1BM:not(:checked)")) {
			$( "input.h1bm, input#RANDOM" ).prop('checked', false).parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1PZ:checked")) {
			$( "input.h1pz" ).prop('checked', true).parent().addClass("on");
			if($(".lvl:checked").length == $(".lvl").length) {
				$("input#RANDOM").prop('checked', true).parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1PZ:not(:checked)")) {
			$( "input.h1pz, input#RANDOM" ).prop('checked', false).parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2:checked")) {
			$( "input.h2" ).prop('checked', true).parent().addClass("on");
			if($(".lvl:checked").length == $(".lvl").length) {
				$("input#RANDOM").prop('checked', true).parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH2:not(:checked)")) {
			$( "input.h2, input#RANDOM" ).prop('checked', false).parent().removeClass("on");
		}
		else if($(".lvl:checked").length == $(".lvl").length) {
			$("input#RANDOM").prop('checked', true).parent().addClass("on");
		} else {
			$("input#RANDOM").prop('checked', false).parent().removeClass("on");
		};
	});

	/******Options Select Submenu Buttons******/
	$( "#submenu_roulette" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='mode_']" ).show();
		$( "label[id^='kill_'], label[id^='extra_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_kills" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='kill_']" ).show();
		$( "label[id^='mode_'], label[id^='extra_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
		$( "#submenu_extras" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='extra_']" ).show();
		$( "label[id^='mode_'], label[id^='kill_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
		$( "#submenu_challenges" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='game_']" ).show();
		$( "label[id^='mode_'], label[id^='extra_'], label[id^='kill_']" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	
	/******Range Values Displayed******/
	/*$(document).on('input', '#etslider', function() {
		$('#etamount').html( $(this).val() );
	});*/
	$(document).on('input', '#compslider', function() {
		$('#compamount').html( $(this).val() );
	});
	
	/******Options Select Submenu Descriptions******/
	$( "#settings_subsubmenu label" ).hover(function() {
		var title = $(this).children("b").text();
		var desc =  $(this).attr("data-hover");
		$( "#settings_descriptions h1" ).text(title);
		$( "#settings_descriptions p" ).html(desc);
	}, function() {
		$( "#settings_descriptions h1" ).text("");
		$( "#settings_descriptions p" ).html("");
	});
	
	/******Options Select Submenu Logic******/
	function makeItMain() {
		$("#mode_mission").addClass("on").find("span").text("[On]");
		$("#modeselect").val("MAIN");
	};
	function stopItMain() {
		$("#mode_mission").removeClass("on").find("span").text("[Off]");
	};
	function stopItContracts() {
		$("#mode_con").removeClass("intel hunt").find("span").text("[Off]");
	}
	function stopItElusive() {
		$("#etslider").val(0);
		$("#etamount").html("0");		
	}
	
	$("#mode_mission").click(function() {
		if( !$(this).hasClass("on") ) {
			makeItMain();
			stopItContracts();
			stopItElusive();
		}
	});
	
	$("#mode_con").click(function() {
		if( $(this).hasClass("intel") ) {
			$(this).removeClass("intel").addClass("hunt").find("span").text("[Hunt]");
			$("#modeselect").val("CONHARD");
		}
		else if( $(this).hasClass("hunt") ) {
			$(this).removeClass("hunt").find("span").text("[Off]");
			makeItMain();
		}
		else {
			$(this).addClass("intel").find("span").text("[Intel]");
			$("#modeselect").val("CONEASY");
			stopItMain();
			stopItElusive();
		}
	});
	
	$('#etamount').html( $('#etslider').val() );
	$('#etslider').on('input', function () {
		$('#etamount').html( $(this).val() );
		if( $(this).val() > 0 ) {
			$("#modeselect").val("ELUSIVE");
			stopItMain();
			stopItContracts();
		}
		else {
			makeItMain();
		}
	});
	
	if($("#modeselect").val() == "CONEASY") {
		$("#mode_con").addClass("intel").find("span").text("[Intel]");
		stopItMain();
		stopItElusive();
	} else if ($("#modeselect").val() == "CONHARD") {
		$("#mode_con").removeClass("intel").addClass("hunt").find("span").text("[Hunt]");
		stopItMain();
		stopItElusive();
	} else if ($("#modeselect").val() == "ELUSIVE") {
		stopItMain();
		stopItContracts();
	};
	
	$("#settings input:checkbox:not(:checked)").parent().find("span").text("[Off]")
	$("#settings input:checkbox").change(function(){
		if($(this).is(":checked")) {
			$(this).parent().find("span").text("[On]");
		} else {
			$(this).parent().find("span").text("[Off]");
		};
	});
	
	$("#extra_starex").click(function() {
		if( $(this).hasClass("on") ) {
			$(this).removeClass("on").addClass("secret").find("span").text("[Secret]");
			$("#startexit").val("SECRET");
		}
		else if( $(this).hasClass("secret") ) {
			$(this).removeClass("secret").addClass("off").find("span").text("[Off]");
			$("#startexit").val("OFF");
		}
		else if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("on").find("span").text("[On]");
			$("#startexit").val("ON");
		}
	});
	
	if($("#startexit").val() == "OFF") {
		$("#extra_starex").removeClass("on").addClass("off").find("span").text("[Off]");
	} else if ($("#startexit").val() == "SECRET") {
		$("#extra_starex").removeClass("on").addClass("secret").find("span").text("[Secret]");
	} else if ($("#startexit").val() == "ON") {
		
	};
	
	/******Scrollbar******/
	$(document).ready(function(){
		$('#contract').scrollbar({
			"scrollx": $('.external-scroll_x1')
		});
		$('#maps').scrollbar({
			"scrollx": $('.external-scroll_x2')
		});
		$('.credits_scroll').scrollbar({
			"scrolly": $('.external-scroll_y')
		});	
	});
	
	/******Scroll wheel for horizontal bar******/
	//
	function scrollHorizontally(e) {
		e = window.event || e;
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
		document.getElementById("contract").scrollLeft -= (delta*40); // Multiplied by 40
		document.getElementById("maps").scrollLeft -= (delta*40); // Multiplied by 40	
		//e.preventDefault();
	};
	if (window.addEventListener) {
		// IE9, Chrome, Safari, Opera
		window.addEventListener("mousewheel", scrollHorizontally, false);
		// Firefox
		window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
	} else {
		// IE 6/7/8
		window.attachEvent("onmousewheel", scrollHorizontally);
	};
	
});