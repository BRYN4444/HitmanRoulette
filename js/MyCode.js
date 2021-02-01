//Enjoy looking at the ametuer code work I've done.
$(document).ready(function() {
	
	/******Theme Cookie******/
	if(document.cookie == "theme=H1") {
		document.documentElement.className = "h1theme";
		$("#theme_h1old span").text("[On]");
		$("#theme_h1goty, #theme_h2, #theme_h3").find("span").text("[Off]");
    }
	else if(document.cookie == "theme=H1goty") {
		document.documentElement.className = "h1gotytheme";
		$("#theme_h1goty span").text("[On]");
		$("#theme_h1old, #theme_h2, #theme_h3").find("span").text("[Off]");
	}
	else if(document.cookie == "theme=H2") {
		document.documentElement.className = "h2theme";
		$("#theme_h2 span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h3").find("span").text("[Off]");
	}
	else if(document.cookie == "theme=H3") {
		document.documentElement.className = "h3theme";
		$("#theme_h3 span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h2").find("span").text("[Off]");
	}
	else {
		document.documentElement.className = "h3theme";
		$("#theme_h3 span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h2").find("span").text("[Off]");
	};
	
	/******Height Calc on Mobile******/
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	
	/******Scrollbar******/
	$('#contract').scrollbar({
		"scrollx": $('.external-scroll_x1')
	});
	$('#maps').scrollbar({
		"scrollx": $('.external-scroll_x2')
	});
	$('#credits_submenu').scrollbar({
		"scrolly": $('.external-scroll_y')
	});

	/******Hide History & Contract Save Buttons on Refresh******/
	$( ".historybtn, #submenu_obj, #submenu_comp, #submenu_chal, #subsubmenu_obj, #subsubmenu_comp, #subsubmenu_chal, #saveroulette, #subsaveroulette" ).prop('disabled', true);
	$( ".clearme" ).val("");
	
	/******Roulette Greeting******/
	var currenttime = new Date().getHours();
	var greeting;
	var morning = ('Good morning, 47.');
	var afternoon = ('Good afternoon, 47.');
	var evening = ('Good evening, 47.');

	if (currenttime >= 5 && currenttime < 12) {	greeting = morning; }
	else if (currenttime >= 12 && currenttime < 17) { greeting = afternoon;	}
	else { greeting = evening; }

	$('.welcome #title').text(greeting);	   
	   
	/******Top Menu Buttons******/
	$( "#roulette" ).click(function() {
		if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( this ).addClass( "on" );
			$( this ).siblings().removeClass( "on" );
			$( "#header, #headermobile, #submenumobile" ).removeClass( "off" );
			$( "#content" ).removeClass( "tall" );
			$( "#content" ).removeClass( "med" );
			$( "#maps, #settings, #credits, .submenumobile_map" ).hide();
			$( "#contract, .submenumobile_mission" ).show();
			if($("#background").hasClass()) { $( "body" ).addClass( "hide" ); };
			$( "#background" ).removeClass( "hide" );
			$( "#saveroulette" ).show('slide',{ direction: 'right' }, 500);
		};
	});
	$( "#missions" ).click(function() {
		$( this ).addClass( "on" );
		$( this ).siblings().removeClass( "on" );
		$( "#header, #headermobile" ).addClass( "off" );
		$( "#submenumobile" ).removeClass( "off" );
		$( "#content" ).removeClass( "tall" );
		$( "#content" ).addClass( "med" );
		$( "#contract, #settings, #credits, .submenumobile_mission" ).hide();
		$( "#maps, .submenumobile_map" ).show();
		$( "body" ).removeClass( "hide" );
		$( "#background" ).addClass( "hide" );
		$( "#saveroulette" ).hide('slide',{ direction: 'right' }, 500);
		
		if($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) {
			$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().parent().addClass("lock");
			$("span.noncon").hide();
			$("b.noncon").show();
		};
	});
	$( "#options" ).click(function() {
		$( this ).addClass( "on" );
		$( this ).siblings().removeClass( "on" );
		$( "#header, #headermobile, #submenumobile" ).addClass( "off" );
		$( "#content" ).addClass( "tall" );
		$( "#content" ).removeClass( "med" );
		$( "#contract, #maps, #credits" ).hide();
		$( "#settings" ).show();
		$( "body" ).removeClass( "hide" );
		$( "#background" ).addClass( "hide" );
		$( "#saveroulette" ).hide('slide',{ direction: 'right' }, 500);
	});
	$( "#about" ).click(function() {
		$( this ).addClass( "on" );
		$( this ).siblings().removeClass( "on" );
		$( "#header, #headermobile, #submenumobile" ).addClass( "off" );
		$( "#content" ).addClass( "tall" );
		$( "#content" ).removeClass( "med" );
		$( "#contract, #maps, #settings" ).hide();
		$( "#credits" ).show();
		$( "body" ).removeClass( "hide" );
		$( "#background" ).addClass( "hide" );
		$( "#saveroulette" ).hide('slide',{ direction: 'right' }, 500);
	});
	
	/******Roulette Submenu Buttons******/
	$( "#submenu_obj" ).click(function() {
		$( this ).addClass( "on" );
		$( "#subsubmenu_obj" ).addClass( "on" );
		$( "#travel, div[id^='target'], div[id^='objective']" ).show();
		$( "div[id^='complication'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_comp, #subsubmenu_chal" ).removeClass( "on" );
	});
	$( "#submenu_comp" ).click(function() {
		$( this ).addClass( "on" );
		$( "#subsubmenu_comp" ).addClass( "on" );
		$( "div[id^='complication']" ).show();
		$( "#travel, div[id^='target'], div[id^='objective'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_obj, #subsubmenu_chal" ).removeClass( "on" );
	});
	$( "#submenu_chal" ).click(function() {
		$( this ).addClass( "on" );
		$( "#subsubmenu_chal" ).addClass( "on" );
		$( "#restriction, #timelimit, #ratingget, #diffget, #challengesi" ).show();
		$( "#travel, div[id^='target'], div[id^='objective'], div[id^='complication']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_obj, #subsubmenu_comp" ).removeClass( "on" );
	});
	$( "#submenu_issue" ).click(function() {
		$( "#map" ).addClass( "on" );
		$( "#submenu_obj, #subsubmenu_obj" ).addClass( "on" ).prop('disabled', false);
		$( "#travel, div[id^='target'], div[id^='objective']" ).show();
		$( "div[id^='complication'], div[id^='restriction'], #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( "#submenu_obj" ).siblings().removeClass( "on" );
		$( "#subsubmenu_comp, #subsubmenu_chal" ).removeClass( "on" );
	});
	
	/******Roulette Submenu Submenu Buttons******/
	$( "#subsubmenu_obj" ).click(function() {
		$( this ).addClass( "on" );
		$( "#submenu_obj" ).addClass( "on" ).siblings().removeClass( "on" );
		$( "#travel, div[id^='target'], div[id^='objective']" ).show();
		$( "div[id^='complication'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( "#subsubmenu_comp, #subsubmenu_chal, #subsubmenu_issue" ).removeClass( "on" );
	});
	$( "#subsubmenu_comp" ).click(function() {
		$( this ).addClass( "on" );
		$( "#submenu_comp" ).addClass( "on" ).siblings().removeClass( "on" );
		$( "div[id^='complication']" ).show();
		$( "#travel, div[id^='target'], div[id^='objective'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( "#subsubmenu_obj, #subsubmenu_chal, #subsubmenu_issue" ).removeClass( "on" );
	});
	$( "#subsubmenu_chal" ).click(function() {
		$( this ).addClass( "on" );
		$( "#submenu_chal" ).addClass( "on" ).siblings().removeClass( "on" );
		$( "#restriction, #timelimit, #ratingget, #diffget, #challengesi" ).show();
		$( "#travel, div[id^='target'], div[id^='objective'], div[id^='complication']" ).hide();
		$( "#subsubmenu_comp, #subsubmenu_obj, #subsubmenu_issue" ).removeClass( "on" );
	});
	$( "#subsubmenu_issue" ).click(function() {
		$( "#map" ).addClass( "on" );
		$( "#subsubmenu_obj, #submenu_obj" ).addClass( "on" ).prop('disabled', false);
		$( "#travel, div[id^='target'], div[id^='objective']" ).show();
		$( "div[id^='complication'], div[id^='restriction'], #timelimit, #ratingget, #diffget, #challengesi" ).hide();
		$( "#subsubmenu_comp, #subsubmenu_chal, #subsubmenu_issue" ).removeClass( "on" );
		$( "#submenu_obj" ).siblings().removeClass( "on" );
	});	
	
	/******Map Select Submenu Buttons******/
	$( "#submenu_random" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='rand'], div[id^='rand']" ).show();
		$( "div#h1, div#h1dlc, div#h2, div#h2dlc, div#h3" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h1" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h1" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1dlc, div#h2, div#h2dlc, div#h3" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h1dlc" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h1dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#h2dlc, div#h3" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h2" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h2" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2dlc, div#h3" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h2dlc" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h2dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h3" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	$( "#submenu_h3" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h3" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h2dlc" ).hide();
		$( this ).siblings().removeClass( "on" );
	});
	
	/******Map Select Subsmenu Submenu Buttons******/
	$( "#subsubmenu_random" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='rand'], div[id^='rand']" ).show();
		$( "div#h1, div#h1dlc, div#h2, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#subsubmenu_h1, #subsubmenu_h1dlc, #subsubmenu_h2, #subsubmenu_h2dlc, #subsubmenu_h3, #subsubmenu_h3dlc" ).removeClass( "on" );
	});
	$( "#subsubmenu_h1" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h1" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1dlc, div#h2, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#subsubmenu_random, #subsubmenu_h1dlc, #subsubmenu_h2, #subsubmenu_h2dlc, #subsubmenu_h3, #subsubmenu_h3dlc" ).removeClass( "on" );
	});
	$( "#subsubmenu_h1dlc" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h1dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#subsubmenu_random, #subsubmenu_h1, #subsubmenu_h2, #subsubmenu_h2dlc, #subsubmenu_h3, #subsubmenu_h3dlc" ).removeClass( "on" );
	});
	$( "#subsubmenu_h2" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h2" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#subsubmenu_random, #subsubmenu_h1, #subsubmenu_h1dlc, #subsubmenu_h2dlc, #subsubmenu_h3, #subsubmenu_h3dlc" ).removeClass( "on" );
	});
	$( "#subsubmenu_h2dlc" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h2dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h3, div#h3dlc" ).hide();
		$( "#subsubmenu_random, #subsubmenu_h1, #subsubmenu_h1dlc, #subsubmenu_h2, #subsubmenu_h3, #subsubmenu_h3dlc" ).removeClass( "on" );
	});
	$( "#subsubmenu_h3" ).click(function() {
		$( this ).addClass( "on" );
		$( "div#h3" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h2dlc, div#h3dlc" ).hide();
		$( "#subsubmenu_random, #subsubmenu_h1, #subsubmenu_h1dlc, #subsubmenu_h2, #subsubmenu_h2dlc, #subsubmenu_h3dlc" ).removeClass( "on" );
	});
	
	/******Map Select Checkbox Logic******/
	//Style nameplate if checkbox "on"
	$("#maps input:checked").parent().parent().addClass("on");
	
	$("#maps input:checkbox").change(function(){
		//Toggle nameplate style "on" when location selected
		if($(this).is(":checked")) {
			$(this).parent().parent().addClass("on");
		} else {
			$(this).parent().parent().removeClass("on");
		};
		
		//Toggle Random All if every level is selected or not
		if($(this).is("#RANDOM:checked") && ($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) {
			$( "input[id^='RANDOM'], input.h1, input.h1bm, input#TS, input.h2, input.h2ex, input.h3" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOM:checked") && !($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) {
			$( "input[id^='RANDOM'], input.h1, input.h1bm, input.h1pz, input.h1sc, input.h2, input.h2ex, input.h2sa, input.h3" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOM:not(:checked)")) {
			$( "input[id^='RANDOM'], input.h1, input.h1bm, input.h1pz, input.h1sc, input.h2, input.h2ex, input.h2sa, input.h3" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1:checked")) {
			$( "input.h1" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1:not(:checked)")) {
			$( "input.h1, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1BM:checked")) {
			$( "input.h1bm" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1BM:not(:checked)")) {
			$( "input.h1bm, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1PZ:checked")) {
			$( "input.h1pz" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1PZ:not(:checked)")) {
			$( "input.h1pz, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1SC:checked")) {
			$( "input.h1sc" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH1SC:not(:checked)")) {
			$( "input.h1sc, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1S6:checked")) { //Sarajevo Six Omitted from Random All
			$( "input.h1s6" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH1S6:not(:checked)")) { //Sarajevo Six Omitted from Random All
			$( "input.h1s6" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2:checked")) {
			$( "input.h2" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH2:not(:checked)")) {
			$( "input.h2, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2EX:checked")) {
			$( "input.h2ex" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH2EX:not(:checked)")) {
			$( "input.h2ex, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2SA:checked")) {
			$( "input.h2sa" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH2SA:not(:checked)")) {
			$( "input.h2sa, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH3:checked")) {
			$( "input.h3" ).prop('checked', true).parent().parent().addClass("on");
			if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
				$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
			};
		}
		else if($(this).is("#RANDOMH3:not(:checked)")) {
			$( "input.h3, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
			$("input#RANDOM").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOM").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Random Hitman 1 if H1 levels are selected or not
		if($(".h1:checked").length == $(".h1").length) {
			$("input#RANDOMH1").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH1").prop('checked', false).parent().parent().removeClass("on");
		};
	
		//Toggle Random Bonus Missions if H1BM levels are selected or not
		if($(".h1bm:checked").length == $(".h1bm").length) {
			$("input#RANDOMH1BM").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH1BM").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Random Patient Zero Missions if H1PZ levels are selected or not
		if($(".h1pz:checked").length == $(".h1pz").length) {
			$("input#RANDOMH1PZ").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH1PZ").prop('checked', false).parent().parent().removeClass("on");
		};
	
		//Toggle Random Seasonal Content if H1SC levels are selected or not
		if($(".h1sc:checked").length == $(".h1sc").length) {
			$("input#RANDOMH1SC").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH1SC").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Random Sarajevo Six Content if H1S6 levels are selected or not
		if($(".h1s6:checked").length == $(".h1s6").length) {
			$("input#RANDOMH1S6").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH1S6").prop('checked', false).parent().parent().removeClass("on");
		};
	
		//Toggle Random Hitman 2 if H2 levels are selected or not
		if($(".h2:checked").length == $(".h2").length) {
			$("input#RANDOMH2").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH2").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Hitman 2 Expansions if H2EX levels are selected or not
		if($(".h2ex:checked").length == $(".h2ex").length) {
			$("input#RANDOMH2EX").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH2EX").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Hitman 2 Special Assignments if H2SA levels are selected or not
		if($(".h2sa:checked").length == $(".h2sa").length) {
			$("input#RANDOMH2SA").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH2SA").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Random Hitman 3 if H3 levels are selected or not
		if($(".h3:checked").length == $(".h3").length) {
			$("input#RANDOMH3").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH3").prop('checked', false).parent().parent().removeClass("on");
		};
	});
	/******Options Select Submenu Buttons******/
	$( "#settings_theme" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='theme_']" ).show();
		$( "label[id^='mode_'], label[id^='kill_'], label[id^='extra_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#settings_descriptions p" ).html("");
	});
	$( "#settings_roulette" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='mode_']" ).show();
		$( "label[id^='theme_'], label[id^='kill_'], label[id^='extra_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#settings_descriptions p" ).html("");
	});
	$( "#settings_kills" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='kill_']" ).show();
		$( "label[id^='theme_'], label[id^='mode_'], label[id^='extra_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#settings_descriptions p" ).html("");
	});
	$( "#settings_extras" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='extra_']" ).show();
		$( "label[id^='theme_'], label[id^='mode_'], label[id^='kill_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#settings_descriptions p" ).html("");
	});
	$( "#settings_challenges" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='game_']" ).show();
		$( "label[id^='theme_'], label[id^='mode_'], label[id^='extra_'], label[id^='kill_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$( "#settings_descriptions p" ).html("");
	});
	
	/******Range Value Displayed for Complications Slider******/
	$(document).on('input', '#compslider', function() {
		$('#compamount').html( $(this).val() );
	});
	
	/******Options Select Submenu Descriptions******/
	if(jQuery.browser.mobile) {
	   	$( "#settings_subsubmenu" ).css("grid-template-columns","min-content 1fr");
		$( "#settings_subsubmenu label:not(.mobile)" ).css("padding-left","5px");
		$( "#settings_subsubmenu label.mobile" ).css("padding-right","5px");
		$( "#theme_cookies" ).css("grid-column","1 / span 2");
		$( "#settings_subsubmenu label.mobile" ).click(function() {
			var desc =  $(this).attr("data-hover");
			$( "#settings_descriptions p" ).html(desc);
		});
	}
	else {
		$( "label.mobile" ).remove();
	   	$( "#settings_subsubmenu label:not(.mobile)" ).hover(function() {
			var title = $(this).children("b").text();
			var desc =  $(this).attr("data-hover");
			$( "#settings_descriptions h1" ).text(title);
			$( "#settings_descriptions p" ).html(desc);
		}, function() {
			$( "#settings_descriptions h1" ).text("");
			$( "#settings_descriptions p" ).html("");
		});
	};
	
	/******Options Select Submenu Logic******/
	$("#theme_h1old").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h1theme";
		$("#theme_h1goty, #theme_h2, #theme_h3").find("span").text("[Off]");
	});
	$("#theme_h1goty").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h1gotytheme";
		$("#theme_h1old, #theme_h2, #theme_h3").find("span").text("[Off]");
	});	
	$("#theme_h2").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h2theme";
		$("#theme_h1old, #theme_h1goty, #theme_h3").find("span").text("[Off]");
	});	
	$("#theme_h3").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h3theme";
		$("#theme_h1old, #theme_h1goty, #theme_h2").find("span").text("[Off]");
	});	
		
	function makeItMain() {
		$("#mode_mission").addClass("on").find("span").text("[On]");
		$("#modeselect").val("MAIN");
	};
	function stopItMain() {
		$("#mode_mission").removeClass("on").find("span").text("[Off]");
	};
	function stopItContracts() {
		$("#mode_con").removeClass("intel hunt").find("span").text("[Off]");
	};
	function stopItElusive() {
		$("#etslider").val(0);
		$("#etamount").html("0");		
	};
	function lockMaps() {
		$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().parent().addClass("lock");
		$("span.noncon").hide();
		$("b.noncon").show();
	};
	function unlockMaps() {
		$("input.noncon").prop('disabled', false).parent().parent().parent().removeClass("lock");
		$("span.noncon").show();
		$("b.noncon").hide();
	};
	
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
			unlockMaps();
		}
		else {
			$(this).addClass("intel").find("span").text("[Intel]");
			$("#modeselect").val("CONEASY");
			stopItMain();
			stopItElusive();
			lockMaps();
		};
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
		};
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
	
	$("#settings input:checkbox:not(:checked)").parent().find("span").text("[Off]");
	$("#settings input:checkbox").change(function(){
		if($(this).is(":checked")) {
			$(this).parent().find("span").text("[On]");
		} else {
			$(this).parent().find("span").text("[Off]");
		};
	});
	
	$("#extra_starex").click(function() {
		if( $(this).hasClass("both") ) {
			$(this).removeClass("both").addClass("start").find("span").text("[Start Only]");
			$("#startexit").val("START");
		}
		else if( $(this).hasClass("start") ) {
			$(this).removeClass("start").addClass("exit").find("span").text("[Exit Only]");
			$("#startexit").val("EXIT");
		}
		else if( $(this).hasClass("exit") ) {
			$(this).removeClass("exit").addClass("secret").find("span").text("[Secret]");
			$("#startexit").val("SECRET");
		}
		else if( $(this).hasClass("secret") ) {
			$(this).removeClass("secret").addClass("off").find("span").text("[Off]");
			$("#startexit").val("OFF");
		}
		else if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("both").find("span").text("[Both]");
			$("#startexit").val("BOTH");
		};
	});
	
	if($("#startexit").val() == "OFF") {
		$("#extra_starex").removeClass("both").addClass("off").find("span").text("[Off]");
	} else if ($("#startexit").val() == "SECRET") {
		$("#extra_starex").removeClass("both").addClass("secret").find("span").text("[Secret]");
	} else if ($("#startexit").val() == "EXIT") {
		$("#extra_starex").removeClass("both").addClass("exit").find("span").text("[Exit Only]");
	} else if ($("#startexit").val() == "START") {
		$("#extra_starex").removeClass("both").addClass("start").find("span").text("[Start Only]");
	} else if ($("#startexit").val() == "BOTH") {
		
	};
	
	
	$("#game_mech").click(function() {
		if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("h2").find("span").text("[H2/H3]");
			$("#mechanics").val("H2");
		}
		else if( $(this).hasClass("h2") ) {
			$(this).removeClass("h2").addClass("h1").find("span").text("[H1]");
			$("#mechanics").val("H1");
		}
		else if( $(this).hasClass("h1") ) {
			$(this).removeClass("h1").addClass("off").find("span").text("[Off]");
			$("#mechanics").val("OFF");
		};
	});
	
	if($("#mechanics").val() == "H2") {
		$("#game_mech").removeClass("off").addClass("h2").find("span").text("[H2/H3]");
	} else if ($("#mechanics").val() == "H1") {
		$("#game_mech").removeClass("off").addClass("h1").find("span").text("[H1]");
	} else if ($("#mechanics").val() == "OFF") {
		
	};
	
	
	$("#game_diff").click(function() {
		if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("h2").find("span").text("[H2/H3]");
			$("#difficulty").val("H2");
		}
		else if( $(this).hasClass("h2") ) {
			$(this).removeClass("h2").addClass("h1").find("span").text("[H1]");
			$("#difficulty").val("H1");
		}
		else if( $(this).hasClass("h1") ) {
			$(this).removeClass("h1").addClass("off").find("span").text("[Off]");
			$("#difficulty").val("OFF");
		};
	});
	
	if($("#difficulty").val() == "H2/H3") {
		$("#game_diff").removeClass("off").addClass("h2").find("span").text("[H2/H3]");
	} else if ($("#difficulty").val() == "H1") {
		$("#game_diff").removeClass("off").addClass("h1").find("span").text("[H1]");
	} else if ($("#difficulty").val() == "OFF") {
		
	};
	
	/******Scroll wheel for horizontal bar******/
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
	
	/******Save contract as TXT from a textarea******/	
	
	$("#saveroulette, #subsaveroulette").click(function(){
		$("#shadow").removeClass("hidden");
	});
	
	function saveTextAsFile() {
		var textToWrite = document.getElementById("roulettetext").value;
		textToWrite = textToWrite.replace(/\n/g, "\r\n"); //retain line breaks
		var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
		var fileNameToSaveAs = "HitmanRoulette.txt";

		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "RouletteContract"; //hidden link text

		// webkit & Gecko based browsers without the need for a if / else block.
		window.URL = window.URL || window.webkitURL;

		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
		downloadLink.click();
	};

	function destroyClickedElement(event) {
		// remove the link from the DOM
		document.body.removeChild(event.target);
	};
	
	$("#save").click(function (e) {
		e.preventDefault();
		saveTextAsFile();
	});
	$("#save-return").click(function(){
		$( this ).addClass( "hidden" );
		$("#overlay-help").removeClass( "hidden" );
		$("#popup-overlay").addClass( "hidden" );
		$("#popup-save").removeClass( "hidden" );
		$("button#save").prop('disabled', false);
	});
	$("#overlay-help").click(function(){
		$( this ).addClass( "hidden" );
		$("#save-return").removeClass( "hidden" );
		$("#popup-overlay").removeClass( "hidden" );
		$("#popup-save").addClass( "hidden" );
		$("button#save").prop('disabled', true);
	});
	$("#close").click(function(){
		$("#shadow").addClass("hidden");
	});
	
	/******Stream Overlay Option & Controls******/
	$("#overlay").click(function(){
		$("#overlay-toggle").addClass( "hidden" );
		$("#overlay-mode").removeClass( "hidden" );
		$("body").addClass( "overlay-hide" );
		$("#shadow").addClass("hidden");
		$("#overlay-message").show().delay(3000).fadeOut(3000);
		$("#overlay-box").removeClass( "hidden" );
	});
	$("#overlay-box-close").click(function(){
		$("#overlay-box").addClass( "hidden" );
	});
	$("#overlay-close").click(function(){
		$("#overlay-toggle").removeClass( "hidden" );
		$("#overlay-mode").addClass( "hidden" );
		$("body").removeClass( "overlay-hide" );
	});
	$("#overlay-mode div.click").click(function() {
		$( this ).toggleClass( "complete" );
		$( this ).next("div[id^=overlay-target-intel]").toggleClass( "complete" );
	});
	
});