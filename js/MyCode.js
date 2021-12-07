//Enjoy looking at the ametuer code work I've done.
$(document).ready(function() {
	$( "#enableoverlay" ).hide('slide',{ direction: 'right' }, 500);
	
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
	$( ".historybtn, #submenu_obj, #submenu_comp, #submenu_chal, #subsubmenu_obj, #subsubmenu_comp, #subsubmenu_chal, #saveroulette, #subsaveroulette, #enableoverlay" ).prop('disabled', true);
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
	$('#map_place span').text(greeting);
	   
	/******Top Menu Buttons******/
	$( "nav#menu button#roulette" ).click(function() {
		if($(window).width() < 808) { /* Do Nothing on Mobile */ }
		else if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			//Make Sure these settings match with the mode_ol "Read" click
			$( this ).addClass( "on" );
			$( this ).siblings().removeClass( "on" );
			$( "nav#minimenu, nav#minimenu button#missions, nav#minimenu button#options, nav#minimenu button#about, #maps_mobilesubmenu" ).removeClass("on");
			$( "nav#minimenu button#roulette, #contract_mobilesubmenu" ).addClass("on");
			$( "header, #contract, #nav_mobile, #scrollbar" ).removeClass("off");
			$( "#maps, #settings, #credits" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).show('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).show('slide',{ direction: 'right' }, 500);
		};
	});
	$( "nav#menu button#missions" ).click(function() {
		if($(window).width() < 808) { /* Do Nothing on Mobile */ }
		else {
			$( this ).addClass( "on" );
			$( this ).siblings().removeClass( "on" );
			$( "nav#minimenu, nav#minimenu button#roulette, nav#minimenu button#options, nav#minimenu button#about, #contract_mobilesubmenu" ).removeClass("on");
			$( "nav#minimenu button#missions, #maps_mobilesubmenu" ).addClass("on");
			$( "#maps, #nav_mobile, #scrollbar" ).removeClass("off");
			$( "header, #contract, #settings, #credits" ).addClass("off");
			$( "body" ).removeClass( "hide settingsaboutmobile" )
			$( "body" ).addClass("missionsmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		
			if($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) {
				$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().removeClass("on").parent().addClass("lock");
				$("span.noncon").hide();
				$("b.noncon").show();
			};
		};
	});
	$( "nav#menu button#options" ).click(function() {
		if($(window).width() < 808) { /* Do Nothing on Mobile */ }
		else if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( this ).addClass( "on" );
			$( this ).siblings().removeClass( "on" );
			$( "nav#minimenu, nav#minimenu button#roulette, nav#minimenu button#missions, nav#minimenu button#about, #maps_mobilesubmenu, #contract_mobilesubmenu" ).removeClass("on");
			$( "nav#minimenu button#options" ).addClass("on");
			$( "#settings" ).removeClass("off");
			$( "header, #contract, #maps, #credits, #nav_mobile, #scrollbar" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile" )
			$( "body" ).addClass("settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		};
	});
	$( "nav#menu button#about" ).click(function() {
		if($(window).width() < 808) { /* Do Nothing on Mobile */ }
		else if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( this ).addClass( "on" );
			$( this ).siblings().removeClass( "on" );
			$( "nav#minimenu, nav#minimenu button#roulette, nav#minimenu button#missions, nav#minimenu button#options, #maps_mobilesubmenu, #contract_mobilesubmenu" ).removeClass("on");
			$( "nav#minimenu button#about" ).addClass("on");
			$( "#credits" ).removeClass("off");
			$( "header, #contract, #maps, #settings, #nav_mobile, #scrollbar" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile" )
			$( "body" ).addClass("settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);			
		};
	});
	$( "nav#menu button#mobilemenu" ).click(function() {
		if( $( this ).hasClass("on") ) {
			$( this ).removeClass("on");
			$( "nav#minimenu" ).removeClass("on");
		}
		else {
			$( this ).addClass("on");
			$( "nav#minimenu" ).addClass("on");
		};
	});
	/* Hides the mobilemenu when the window is wide enough */
	var $window = $(window);

	function checkWidth() {
		var windowwidth = $window.width();
		if (windowwidth > 808) {
			$( "#mobilemenu" ).removeClass("on");
			$( "nav#minimenu" ).removeClass("on");
		};
	};
	checkWidth();
	$(window).resize(checkWidth);
	
	
	/******Top Mobile Menu Buttons******/
	$(document).on('click', function (e) {
		if(!$("button#mobilemenu").is(e.target) && !$("nav#minimenu").contents().is(e.target)) {
			$( "nav#menu button#mobilemenu" ).removeClass("on");
			$("nav#minimenu").removeClass("on");
		}
	});
	$( "nav#minimenu button#roulette, a#link_roulette" ).click(function() {
		if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( "nav#menu button#mobilemenu, nav#minimenu, nav#minimenu button#missions, nav#minimenu button#options, nav#minimenu button#about, nav#menu button#missions, nav#menu button#options, nav#menu button#about, #maps_mobilesubmenu" ).removeClass("on");
			$( "nav#menu button#roulette, nav#minimenu button#roulette, #contract_mobilesubmenu" ).addClass("on");
			$( "header, #contract, #nav_mobile, #scrollbar" ).removeClass("off");
			$( "#maps, #settings, #credits" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		};
	});
	$( "nav#minimenu button#missions, a#link_missions" ).click(function() {
		$( "nav#menu button#mobilemenu, nav#minimenu, nav#minimenu button#roulette, nav#minimenu button#options, nav#minimenu button#about, nav#menu button#roulette, nav#menu button#options, nav#menu button#about, #contract_mobilesubmenu" ).removeClass("on");
		$( "nav#menu button#missions, nav#minimenu button#missions, #maps_mobilesubmenu" ).addClass("on");
		$( "#maps, #nav_mobile, #scrollbar" ).removeClass("off");
		$( "header, #contract, #settings, #credits" ).addClass("off");
		$( "body" ).removeClass( "hide settingsaboutmobile" )
		$( "body" ).addClass("missionsmobile");
		$( "#background" ).addClass( "hide" );
		$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		
		if($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) {
			$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().removeClass("on").parent().addClass("lock");
			$("span.noncon").hide();
			$("b.noncon").show();
		};
	});
	$( "nav#minimenu button#options, a#link_settings" ).click(function() {
		if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( "nav#menu button#mobilemenu, nav#minimenu, nav#minimenu button#roulette, nav#minimenu button#missions, nav#minimenu button#about, nav#menu button#roulette, nav#menu button#missions, nav#menu button#about, #maps_mobilesubmenu, #contract_mobilesubmenu" ).removeClass("on");
			$( "nav#menu button#options, nav#minimenu button#options" ).addClass("on");
			$( "#settings" ).removeClass("off");
			$( "header, #contract, #maps, #credits, #nav_mobile, #scrollbar" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile" )
			$( "body" ).addClass("settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		};
	});
	$( "nav#minimenu button#about" ).click(function() {
		if($("#maps input:checked").length == 0) {
			alert("You must select at least one mission.");
		}
		else {
			$( "nav#menu button#mobilemenu, nav#minimenu, nav#minimenu button#roulette, nav#minimenu button#missions, nav#minimenu button#options, nav#menu button#roulette, nav#menu button#missions, nav#menu button#options, #maps_mobilesubmenu, #contract_mobilesubmenu" ).removeClass("on");
			$( "nav#menu button#about, nav#minimenu button#about" ).addClass("on");
			$( "#credits" ).removeClass("off");
			$( "header, #contract, #maps, #settings, #nav_mobile, #scrollbar" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile" )
			$( "body" ).addClass("settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			$( "#saveroulette:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			$( "#enableoverlay:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);	
		};
	});
	
	/******Roulette Submenu Buttons******/
	$( "#submenu_obj, #subsubmenu_obj" ).click(function() {
		$( "#submenu_obj, #subsubmenu_obj" ).addClass( "on" );
		$( "#travel, div[id^='target'], div[id^='objective'], #camera" ).css('display', 'flex');
		$( "div[id^='complication'], #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).css('display', 'none');
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_comp, #subsubmenu_chal" ).removeClass( "on" );
	});
	$( "#submenu_comp, #subsubmenu_comp" ).click(function() {
		$( "#submenu_comp, #subsubmenu_comp" ).addClass( "on" );
		$( "div[id^='complication']" ).css('display', 'flex');
		$( "#travel, div[id^='target'], div[id^='objective'], #camera, #restriction, #timelimit, #ratingget, #diffget, #challengesi" ).css('display', 'none');
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_obj, #subsubmenu_chal" ).removeClass( "on" );
	});
	$( "#submenu_chal, #subsubmenu_chal" ).click(function() {
		$( "#submenu_chal, #subsubmenu_chal" ).addClass( "on" );
		$( "#restriction, #timelimit, #ratingget, #diffget, #challengesi" ).css('display', 'flex');
		$( "#travel, div[id^='target'], div[id^='objective'], #camera, div[id^='complication']" ).css('display', 'none');
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_obj, #subsubmenu_comp" ).removeClass( "on" );
	});
	$( "#submenu_issue, #subsubmenu_issue" ).click(function() {
		$( "#submenu_obj, #subsubmenu_obj" ).addClass( "on" ).prop('disabled', false);
		$( "#travel, div[id^='target'], div[id^='objective'], #camera" ).css('display', 'flex');
		$( "div[id^='complication'], div[id^='restriction'], #timelimit, #ratingget, #diffget, #challengesi" ).css('display', 'none');
		$( "#submenu_obj" ).siblings().removeClass( "on" );
		$( "#subsubmenu_comp, #subsubmenu_chal" ).removeClass( "on" );
		$( "header" ).css("grid-template-columns","50px auto").css("justify-content","initial");
	});
	
	/******Map Select Submenu Buttons******/
	$( "#submenu_random, #subsubmenu_random" ).click(function() {
		$( "#submenu_random, #subsubmenu_random" ).addClass( "on" );
		$( "label[id^='rand'], div[id^='rand']" ).show();
		$( "div#h1, div#h1dlc, div#h2, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#submenu_random, #subsubmenu_random" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_random");
		$( "#subsubmenu_name span" ).text("Mission Groupings");
	});
	$( "#submenu_h1, #subsubmenu_h1" ).click(function() {
		$( "#submenu_h1, #subsubmenu_h1" ).addClass( "on" );
		$( "div#h1" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1dlc, div#h2, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#submenu_h1, #subsubmenu_h1" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h1");
		$( "#subsubmenu_name span" ).text("Hitman™ & Prologue");
	});
	$( "#submenu_h1dlc, #subsubmenu_h1dlc" ).click(function() {
		$( "#submenu_h1dlc, #subsubmenu_h1dlc" ).addClass( "on" );
		$( "div#h1dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#submenu_h1dlc, #subsubmenu_h1dlc" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h1dlc");
		$( "#subsubmenu_name span" ).text("Hitman™ Extras");
	});
	$( "#submenu_h2, #subsubmenu_h2" ).click(function() {
		$( "#submenu_h2, #subsubmenu_h2" ).addClass( "on" );
		$( "div#h2" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2dlc, div#h3, div#h3dlc" ).hide();
		$( "#submenu_h2, #subsubmenu_h2" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h2");
		$( "#subsubmenu_name span" ).text("Hitman™2 & Expansions");
	});
	$( "#submenu_h2dlc, #subsubmenu_h2dlc" ).click(function() {
		$( "#submenu_h2dlc, #subsubmenu_h2dlc" ).addClass( "on" );
		$( "div#h2dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h3, div#h3dlc" ).hide();
		$( "#submenu_h2dlc, #subsubmenu_h2dlc" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h2dlc");
		$( "#subsubmenu_name span" ).text("Hitman™2 Extras");
	});
	$( "#submenu_h3, #subsubmenu_h3" ).click(function() {
		$( "#submenu_h3, #subsubmenu_h3" ).addClass( "on" );
		$( "div#h3" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h2dlc, div#h3dlc" ).hide();
		$( "#submenu_h3, #subsubmenu_h3" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h3");
		$( "#subsubmenu_name span" ).text("Hitman™III");
	});
	$( "#submenu_h3dlc, #subsubmenu_h3dlc" ).click(function() {
		$( "#submenu_h3dlc, #subsubmenu_h3dlc" ).addClass( "on" );
		$( "div#h3dlc" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h1dlc, div#h2, div#h2dlc, div#h3" ).hide();
		$( "#submenu_h3dlc, #subsubmenu_h3dlc" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h3dlc");
		$( "#subsubmenu_name span" ).text("Hitman™III Extras");
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
		
		if($(this).is("#RANDOMH1:checked")) { // H1 - On
			$( "input.h1" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH1:not(:checked)")) { // H1 - off
			$( "input.h1, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1BM:checked")) { // Bonus Missions - On
			$( "input.h1bm" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH1BM:not(:checked)")) { // Bonus Missions - Off
			$( "input.h1bm, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1PZ:checked")) { // Patient Zero - On
			$( "input.h1pz" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH1PZ:not(:checked)")) { // Patient Zero - Off
			$( "input.h1pz, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMHSC:checked")) { // Seasonal Content - On
			$( "input.hsc" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMHSC:not(:checked)")) { // Seasonal Content - Off
			$( "input.hsc, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH1S6:checked")) { // Sarajevo Six - On
			$( "input.h1s6" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH1S6:not(:checked)")) { //Sarajevo Six - Off
			$( "input.h1s6" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2:checked")) { // H2 - On
			$( "input.h2" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH2:not(:checked)")) { // H2 - Off
			$( "input.h2, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2EX:checked")) { // H2 Expansions - On
			$( "input.h2ex" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH2EX:not(:checked)")) { // H2 Expansions - Off
			$( "input.h2ex, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH2SA:checked")) { // Special Assignments - On
			$( "input.h2sa" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH2SA:not(:checked)")) { // Special Assignments - Off
			$( "input.h2sa, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMH3:checked") && ($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) { // H3 Contract Mode - On
			$( "input#OTOTW, input#DITF, input#AP, input#EOAE, input#TF" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH3:checked") && !($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) { // H3 Mission Mode - On
			$( "input.h3" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH3:not(:checked)")) { // H3 - Off
			$( "input.h3, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		}
		/*else if($(this).is("#RANDOMH3DLC:checked")) { // H3 Extras - On
			$( "input.h3dlc" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH3DLC:not(:checked)")) { // H3 Extras - Off
			$( "input.h3dlc, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		} enable when non-seasonal DLC drops; add input.h3dlc to the three below */
		else if($(this).is("#RANDOM:checked") && ($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) { // All Available Contract Mode - On
			$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input.h1, input.h1bm, input#TS, input.h2, input.h2ex, input.h3" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOM:checked") && !($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) { // All Available Mission Mode - On
			$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input#RANDOMH1PZ, input#RANDOMH2SA, input.h1, input.h1bm, input.h1pz, input#HH, input.h2, input.h2ex, input.h2sa, input.h3, input#DGS" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOM:not(:checked)")) { // All Available - Off
			$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input#RANDOMH1PZ, input#RANDOMH2SA, input.h1, input.h1bm, input.h1pz, input#HH, input.h2, input.h2ex, input.h2sa, input.h3, input#DGS" ).prop('checked', false).parent().parent().removeClass("on");
		};
		
		// Toggle All Available if all available H3 levels are selected or not
		if($(".lvl:checked").not(".h1s6, input#SF").length == $(".lvl").not(".h1s6, input#SF").length) {
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
	
		//Toggle Random Seasonal Content if HSC levels are selected or not
		if($(".hsc:checked").length == $(".hsc").length) {
			$("input#RANDOMHSC").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMHSC").prop('checked', false).parent().parent().removeClass("on");
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
		if($(".h3con:checked").length == $(".h3con").length && ($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) {
			$("input#RANDOMH3").prop('checked', true).parent().parent().addClass("on");
		}
		else if($(".h3:checked").length == $(".h3").length && !($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ) {
			$("input#RANDOMH3").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMH3").prop('checked', false).parent().parent().removeClass("on");
		};
		
		//Toggle Hitman 3 Extras if H3DLC levels are selected or not
		//if($(".h3dlc:checked").length == $(".h3dlc").length) {
		//	$("input#RANDOMH3DLC").prop('checked', true).parent().parent().addClass("on");
		//}
		//else {
		//	$("input#RANDOMH3DLC").prop('checked', false).parent().parent().removeClass("on");
		//};
		
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
	$('#compamount').html( $('#compslider').val() );
	$(document).on('input', '#compslider', function() {
		$('#compamount').html( $('#compslider').val() );
	});
	
	/******Options Select Submenu Descriptions******/
	if(jQuery.browser.mobile) {
	   	$( "#settings_subsubmenu" ).css("grid-template-columns","min-content 1fr");
		$( "#settings_subsubmenu label:not(.mobile)" ).css("padding-left","5px");
		$( "#settings_subsubmenu label.mobile" ).css("padding-right","5px");
		$( "#theme_cookies" ).css("grid-column","1 / span 2");
		$( "#mode_ol" ).remove();
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
		$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().removeClass("on").parent().addClass("lock");
		$("span.noncon").hide();
		$("b.noncon").show();
		$("b.nonconsp").css('display','inline-block');
	};
	function unlockMaps() {
		$("input.noncon").prop('disabled', false).parent().parent().parent().removeClass("lock");
		$("span.noncon").show();
		$("b.noncon").hide();
		$("b.nonconsp").css('display','none');
		$("input#RANDOMH3").prop('checked', false).parent().parent().removeClass("on");
	};
	
	$("#mode_mission").click(function() {
		if( !$(this).hasClass("on") ) {
			makeItMain();
			unlockMaps();
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
	
	if( $('#conslider').val() == 0 ) {
		$('#conamount').html('#');
	}
	else {
		$('#conamount').html( $('#conslider').val() );
	}
	$('#conslider').on('input', function () {
		if( $(this).val() > 0 ) {
			$('#conamount').html( $(this).val() );
		}
		else {
			$('#conamount').html('#');
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
	$("#settings input:checkbox:checked").parent().find("span").text("[On]");
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
			$(this).removeClass("off").addClass("dh2").find("span").text("[H2/H3]");
			$("#difficulty").val("H2");
		}
		else if( $(this).hasClass("dh2") ) {
			$(this).removeClass("dh2").addClass("dh1").find("span").text("[H1]");
			$("#difficulty").val("H1");
		}
		else if( $(this).hasClass("dh1") ) {
			$(this).removeClass("dh1").addClass("off").find("span").text("[Off]");
			$("#difficulty").val("OFF");
		};
	});
	
	if($("#difficulty").val() == "H2") {
		$("#game_diff").removeClass("off").addClass("dh2").find("span").text("[H2/H3]");
	} else if ($("#difficulty").val() == "H1") {
		$("#game_diff").removeClass("off").addClass("dh1").find("span").text("[H1]");
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
	$("#close, #continue").click(function(){
		$("#shadow").addClass("hidden");
	});
	
	/******Stream Overlay Option & Controls******/
	$(document).on('click', '#mode_ol:not(".overlaymode")', function() {
		$("#mode_ol").addClass( "overlaymode" ).find( "span" ).html("[On]");
		$("#saveroulette, #popup-save, button#save, button#close").addClass("hidden");
		$("#enableoverlay").removeClass("hidden").show('slide',{ direction: 'right' }, 500);
		$("#shadow, #popup-overlay, button#continue, button#return").removeClass("hidden");
		//Make sure the below matches the #roulette click
		$( "#roulette" ).addClass( "on" );
		$( "#roulette" ).siblings().removeClass( "on" );
		$( "#header, #headermobile, #submenumobile" ).removeClass( "off" );
		$( "#content" ).removeClass( "tall" );
		$( "#content" ).removeClass( "med" );
		$( "#maps, #settings, #credits, .submenumobile_map" ).hide();
		$( "#contract, .submenumobile_mission" ).show();
		if($("#background").hasClass()) { $( "body" ).addClass( "hide" ); };
		$( "#background" ).removeClass( "hide" );
	});
	$(document).on('click', '#mode_ol.overlaymode', function() {
		$( this ).removeClass( "overlaymode" ).find( "span" ).html("[Off]");
		$("#enableoverlay").addClass("hidden");
		$("#saveroulette").removeClass("hidden").hide('slide',{ direction: 'right' }, 500);
	});
	$(document).on('click', '#return', function() {
		$("#saveroulette, #popup-save, button#save, button#close").removeClass("hidden");
		$("#saveroulette").removeClass("hidden").show('slide',{ direction: 'right' }, 500);
		$("#enableoverlay, #shadow, #popup-overlay, button#continue, button#return").addClass("hidden");
	});
	
	$("#overlay-list .mini").hover(function() {
		$(this).addClass("pin");
	},function() {
		$(this).removeClass("pin");
	});
	$("#overlay-list .click").hover(function() {
		$(this).prev().addClass("pin");
	},function() {
		$(this).prev().removeClass("pin");
	});
	$(document).on('click', '#overlay-list .mini', function() {
		$(this).addClass("pinned").removeClass("mini");
		$("#overlay-image").removeClass("hidden");
	});
	$(document).on('click', '#overlay-list .pinned', function() {
		$(this).addClass("mini").removeClass("pinned");
		$("#overlay-image").addClass("hidden");
	});	
	
	$(document).on('click', '#enableoverlay', function() {
		$("body, #overlay-toggle").addClass( "hidden" );
		$("#overlay-message").show().delay(6000).fadeOut(3000);
		$("#overlay-mode").removeClass("hidden");
	});
	$(document).on('click', '#overlay-close', function() {
		$("body, #overlay-toggle").removeClass( "hidden" );
		$("#overlay-mode").addClass("hidden");
	});
	
});