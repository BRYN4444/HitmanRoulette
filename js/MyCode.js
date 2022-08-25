//Enjoy looking at the ametuer code work I've done.
$(document).ready(function() {
	/******Latest Updates******/
	$("#features p#title").text("Last Updated: August 25th, 2022"); /*Roulette Features*/
	$("#features .updatenotes").html('Roulette Modes update. Added Contract Mode Targets. <b><a href="https://github.com/BRYN4444/HitmanRoulette#latest-updates" target="_blank">Details</a></b>.');
	$("#overlayguide p#title").text("Last Updated: July 13th, 2022 (BETA)"); /*Stream Overlay*/
	//$("#overlayguide .updatenotes").html('???'); /*Needs to be added to Overlay.html*/

	
	/******Theme Cookie******/
	if(document.cookie == "theme=H1") {
		document.documentElement.className = "h1theme";
		$("#theme_h1old span").text("[On]");
		$("#theme_h1goty, #theme_h2, #theme_h3, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
		}
    }
	else if(document.cookie == "theme=H1goty") {
		document.documentElement.className = "h1gotytheme";
		$("#theme_h1goty span").text("[On]");
		$("#theme_h1old, #theme_h2, #theme_h3, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
		}
	}
	else if(document.cookie == "theme=H2") {
		document.documentElement.className = "h2theme";
		$("#theme_h2 span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h3, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Agent%20and%20Handler.mp3");
			$("#audiocontainer")[0].load();
		}
	}
	else if(document.cookie == "theme=H3") {
		document.documentElement.className = "h3theme";
		$("#theme_h3 span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h2, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Menu%20ver.).mp3");
			$("#audiocontainer")[0].load();
		}
	}
	else if(document.cookie == "theme=HT") {
		document.documentElement.className = "httheme";
		$("#theme_ht span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h2, #theme_h3").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
			$("#audiocontainer")[0].load();
		}
	}
	else {
		document.documentElement.className = "httheme";
		$("#theme_ht span").text("[On]");
		$("#theme_h1old, #theme_h1goty, #theme_h2, #theme_h3").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
			$("#audiocontainer")[0].load();
		}
	};
	
	/***Hide Overlay Guide***/
	$("a#closeoverlayguide").click(function() {
		$("#overlayguide").css('display','none');
	});
	
	/***Music***/
	/*Button*/
	$('#music').click(function() {
		if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("on");
			$('#audiocontainer')[0].play();
		} else {
			$(this).removeClass("on").addClass("off");
			$('#audiocontainer')[0].pause();
		}
	});
		
	/*Setting*/
	$("#audio_music").click(function() {
		if( $(this).hasClass("default") ) {
			$(this).removeClass("default").addClass("WoA").find("span").text("[HITMAN]");
			$("#musicselect").val("WoA");
			$("#audiocontainer")[0].pause();
			$("#music").removeClass("on").addClass("off");
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
		}
		else if( $(this).hasClass("WoA") ) {
			$(this).removeClass("WoA").addClass("AaH").find("span").text("[HITMAN 2]");
			$("#musicselect").val("AaH");
			$("#audiocontainer")[0].pause();
			$("#music").removeClass("on").addClass("off");
			$("#audiosource").attr("src","./audio/Agent%20and%20Handler.mp3");
			$("#audiocontainer")[0].load();
		}
		else if( $(this).hasClass("AaH") ) {
			$(this).removeClass("AaH").addClass("DA1").find("span").text("[H3 MENU]");
			$("#musicselect").val("DA1");
			$("#audiocontainer")[0].pause();
			$("#music").removeClass("on").addClass("off");
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Menu%20ver.).mp3");
			$("#audiocontainer")[0].load();
		}
		else if( $(this).hasClass("DA1") ) {
			$(this).removeClass("DA1").addClass("DA2").find("span").text("[H3 PLAN]");
			$("#musicselect").val("DA2");
			$("#audiocontainer")[0].pause();
			$("#music").removeClass("on").addClass("off");
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
			$("#audiocontainer")[0].load();
		}
		else if( $(this).hasClass("DA2") ) {
			$(this).removeClass("DA2").addClass("default").find("span").text("[Default]");
			$("#musicselect").val("DEFAULT");
			if(document.cookie == "theme=H1") {
				$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
				$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=H1goty") {
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=H2") {
				$("#audiosource").attr("src","./audio/Agent%20and%20Handler.mp3");
				$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=H3") {
				$("#audiosource").attr("src","./audio/Death%20Awaits%20(Menu%20ver.).mp3");
				$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=HT") {
				$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
				$("#audiocontainer")[0].load();
			} else {
				$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
				$("#audiocontainer")[0].load();
			}
		}
	});
	
	/*Refresh*/
	if($("#musicselect").val() == "DA2") {
		$("#audio_music").removeClass("DEFAULT").addClass("DA2").find("span").text("[H3 PLAN]");
		$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
		$("#audiocontainer")[0].load();
	} else if ($("#musicselect").val() == "DA1") {
		$("#audio_music").removeClass("DEFAULT").addClass("DA1").find("span").text("[H3 MENU]");
		$("#audiosource").attr("src","./audio/Death%20Awaits%20(Menu%20ver.).mp3");
		$("#audiocontainer")[0].load();
	} else if ($("#musicselect").val() == "AaH") {
		$("#audio_music").removeClass("DEFAULT").addClass("AaH").find("span").text("[HITMAN 2]");
		$("#audiosource").attr("src","./audio/Agent%20and%20Handler.mp3");
		$("#audiocontainer")[0].load();
	} else if ($("#musicselect").val() == "WoA") {
		$("#audio_music").removeClass("DEFAULT").addClass("WoA").find("span").text("[HITMAN]");
		$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
		$("#audiocontainer")[0].load();
	} else if ($("#musicselect").val() == "DEFAULT") {
		
	};
		
	/*Volume Slider*/
	var loadvolume = $('#volumeslider').val();
	$('#audiocontainer')[0].volume = loadvolume/100 ; 
	
	$('#volumeslider').on('input', function () {
		var totalvolume = $(this).val();
		$('#volumeamount').html( totalvolume );
		$('#audiocontainer')[0].volume = totalvolume/100 ; 
	});
	
	/******Height Calc on Mobile******/
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	
	/******Resolution Warning Bypass******/
	$(document).on('click', '#closenotice', function() {
		$( "div#sizewarning" ).remove();
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
	$( ".historybtn, #submenu_obj, #submenu_comp, #submenu_chal, #subsubmenu_obj, #subsubmenu_comp, #subsubmenu_chal, #saveroulette, #subsaveroulette, #overlaybutton" ).prop('disabled', true);
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
			$( "#background, .external-scroll_x1" ).removeClass( "hide" );
			//$( "#floatbuttons:not('.hidden')" ).show('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": 0}, 500);
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
			$( "#background, .external-scroll_x1" ).addClass( "hide" );
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
		
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
			$( "#background, .external-scroll_x1" ).addClass( "hide" );
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
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
			$( "#background, .external-scroll_x1" ).addClass( "hide" );
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);

			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
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
		}
		else {
			$('#audiocontainer')[0].pause();
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
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
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
		//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
		
		var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
		$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
		
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
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
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
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
		};
	});
	
	/******Roulette Submenu Buttons******/
	$( "#submenu_obj, #subsubmenu_obj" ).click(function() {
		$( "#submenu_obj, #subsubmenu_obj" ).addClass( "on" );
		$( "#travel, div[id^='target'], div[id^='objective'], #camera" ).css('display', 'flex');
		$( "div[id^='complication'], #restriction, #timelimit, #ratingget, #diffget" ).css('display', 'none');
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_comp, #subsubmenu_chal" ).removeClass( "on" );
	});
	$( "#submenu_comp, #subsubmenu_comp" ).click(function() {
		$( "#submenu_comp, #subsubmenu_comp" ).addClass( "on" );
		$( "div[id^='complication']" ).css('display', 'flex');
		$( "#travel, div[id^='target'], div[id^='objective'], #camera, #restriction, #timelimit, #ratingget, #diffget" ).css('display', 'none');
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_obj, #subsubmenu_chal" ).removeClass( "on" );
	});
	$( "#submenu_chal, #subsubmenu_chal" ).click(function() {
		$( "#submenu_chal, #subsubmenu_chal" ).addClass( "on" );
		$( "#restriction, #timelimit, #ratingget, #diffget" ).css('display', 'flex');
		$( "#travel, div[id^='target'], div[id^='objective'], #camera, div[id^='complication']" ).css('display', 'none');
		$( this ).siblings().removeClass( "on" );
		$( "#subsubmenu_obj, #subsubmenu_comp" ).removeClass( "on" );
	});
	$( "#submenu_issue, #subsubmenu_issue" ).click(function() {
		$( "#submenu_obj, #subsubmenu_obj" ).addClass( "on" ).prop('disabled', false);
		$( "#travel, div[id^='target'], div[id^='objective'], #camera" ).css('display', 'flex');
		$( "div[id^='complication'], div[id^='restriction'], #timelimit, #ratingget, #diffget" ).css('display', 'none');
		$( "#submenu_obj" ).siblings().removeClass( "on" );
		$( "#subsubmenu_comp, #subsubmenu_chal" ).removeClass( "on" );
		$( "header" ).css("grid-template-columns","50px auto").css("justify-content","initial");
	});
	
	/******Map Select Submenu Buttons******/
	$( "#submenu_random, #subsubmenu_random" ).click(function() {
		$( "#submenu_random, #subsubmenu_random" ).addClass( "on" );
		$( "label[id^='rand'], div[id^='rand']" ).show();
		$( "div#h1, div#h2, div#h3, div#hside, div#hpz, div#hs6" ).hide();
		$( "#submenu_random, #subsubmenu_random" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_random");
		$( "#subsubmenu_name span" ).text("Mission Groupings");
	});
	$( "#submenu_h1, #subsubmenu_h1" ).click(function() {
		$( "#submenu_h1, #subsubmenu_h1" ).addClass( "on" );
		$( "div#h1" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h2, div#h3, div#hside, div#hpz, div#hs6" ).hide();
		$( "#submenu_h1, #subsubmenu_h1" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h1");
		$( "#subsubmenu_name span" ).text("Hitman™ & Prologue");
	});
	$( "#submenu_h2, #subsubmenu_h2" ).click(function() {
		$( "#submenu_h2, #subsubmenu_h2" ).addClass( "on" );
		$( "div#h2" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h3, div#hside, div#hpz, div#hs6" ).hide();
		$( "#submenu_h2, #subsubmenu_h2" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h2");
		$( "#subsubmenu_name span" ).text("Hitman™2 & Expansions");
	});
	$( "#submenu_h3, #subsubmenu_h3" ).click(function() {
		$( "#submenu_h3, #subsubmenu_h3" ).addClass( "on" );
		$( "div#h3" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#hside, div#hpz, div#hs6" ).hide();
		$( "#submenu_h3, #subsubmenu_h3" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_h3");
		$( "#subsubmenu_name span" ).text("Hitman™III");
	});
	$( "#submenu_hside, #subsubmenu_hside" ).click(function() {
		$( "#submenu_hside, #subsubmenu_hside" ).addClass( "on" );
		$( "div#hside" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#h3, div#hpz, div#hs6" ).hide();
		$( "#submenu_hside, #subsubmenu_hside" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_hside");
		$( "#subsubmenu_name span" ).text("Side Missions");
	});
	$( "#submenu_hpz, #subsubmenu_hpz" ).click(function() {
		$( "#submenu_hpz, #subsubmenu_hpz" ).addClass( "on" );
		$( "div#hpz" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#h3, div#hside, div#hs6" ).hide();
		$( "#submenu_hpz, #subsubmenu_hpz" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_hpz");
		$( "#subsubmenu_name span" ).text("Patient Zero");
	});
	$( "#submenu_hs6, #subsubmenu_hs6" ).click(function() {
		$( "#submenu_hs6, #subsubmenu_hs6" ).addClass( "on" );
		$( "div#hs6" ).show();
		$( "label[id^='rand'], div[id^='rand'], div#h1, div#h2, div#h3, div#hside, div#hpz" ).hide();
		$( "#submenu_hs6, #subsubmenu_hs6" ).siblings().removeClass( "on" );
		$( "#subsubmenu_name img" ).prop("id", "subsubmenu_hs6");
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
		/* else if($(this).is("#RANDOMH3DLC:checked")) { // H3 Extras - On
			$( "input.h3dlc" ).prop('checked', true).parent().parent().addClass("on");
		}
		else if($(this).is("#RANDOMH3DLC:not(:checked)")) { // H3 Extras - Off
			$( "input.h3dlc, input#RANDOM" ).prop('checked', false).parent().parent().removeClass("on");
		} enable when non-seasonal DLC drops; add input.h3dlc to the three below */
		else if($(this).is("#RANDOMALL") && ($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ){
			if ($(this).prop("checked")) { // All Contract Mode - On
				$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input#RANDOMH1PZ, input.h1, input.h1bm, input.h1pz, input.h2, input.h2ex, input.h3, input#DGS" ).prop('checked', true).parent().parent().addClass("on");
				return;
			} // All Contract Mode - Off \/
			$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input#RANDOMH1PZ, input.h1, input.h1bm, input.h1pz, input.h2, input.h2ex, input.h3, input#DGS" ).prop('checked', false).parent().parent().removeClass("on");
		}
		else if($(this).is("#RANDOMALL") && !($("#mode_con").hasClass("intel") || $("#mode_con").hasClass("hunt")) ){
			if ($(this).prop("checked")) { // All Mission Mode - On
				$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input#RANDOMH1PZ, input#RANDOMH2SA, input#RANDOMHSC, input.h1, input.h1bm, input.h1pz, input.h2, input.h2ex, input.h2sa, input.h3, input.hsc" ).prop('checked', true).parent().parent().addClass("on");
				return;
			} // All Mission Mode - Off \/
			$( "input#RANDOMH1, input#RANDOMH1BM, input#RANDOMH2, input#RANDOMH2EX, input#RANDOMH3, input#RANDOMH3DLC, input#RANDOMH1PZ, input#RANDOMH2SA, input#RANDOMHSC, input.h1, input.h1bm, input.h1pz, input.h2, input.h2ex, input.h2sa, input.h3, input.hsc" ).prop('checked', false).parent().parent().removeClass("on");
		};
		
		// Toggle All Available if all available H3 levels are selected or not
		if($(".lvl:checked").not(".h1s6").length == $(".lvl").not(".h1s6").length) {
			$("input#RANDOMALL").prop('checked', true).parent().parent().addClass("on");
		}
		else {
			$("input#RANDOMALL").prop('checked', false).parent().parent().removeClass("on");
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
		$( "label[id^='audio_'], label[id^='overlay_'], label[id^='mode_'], label[id^='kill_'], label[id^='extra_'], label[id^='game_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
		}
	});
	$( "#settings_overlay" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='overlay_']" ).show();
		$( "label[id^='theme_'], label[id^='mode_'], label[id^='kill_'], label[id^='extra_'], label[id^='game_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		$("#settings_descriptions h1, #settings_descriptions p, #settings_descriptions span").addClass("overlay");
	});
	$( "#settings_audio" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='audio_']" ).show();
		$( "label[id^='theme_'], label[id^='mode_'], label[id^='kill_'], label[id^='extra_'], label[id^='game_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
		}
	});
	$( "#settings_roulette" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='mode_']" ).show();
		$( "label[id^='theme_'], label[id^='overlay_'], label[id^='audio_'], label[id^='kill_'], label[id^='extra_'], label[id^='game_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
			$( "#mode_ol" ).css('display','none');
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
			$( "#mode_ol" ).css('display','inline-flex');
		}
	});
	$( "#settings_kills" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='kill_']" ).show();
		$( "label[id^='theme_'], label[id^='overlay_'], label[id^='audio_'], label[id^='mode_'], label[id^='extra_'], label[id^='game_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
		}
	});
	$( "#settings_extras" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='extra_']" ).show();
		$( "label[id^='theme_'], label[id^='overlay_'], label[id^='audio_'], label[id^='mode_'], label[id^='kill_'], label[id^='game_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
		}
	});
	$( "#settings_challenges" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='game_']" ).show();
		$( "label[id^='theme_'], label[id^='overlay_'], label[id^='audio_'], label[id^='mode_'], label[id^='extra_'], label[id^='kill_'], label[id^='reset_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
		}
	});
	$( "#settings_reset" ).click(function() {
		$( this ).addClass( "on" );
		$( "label[id^='reset_']" ).show();
		$( "label[id^='theme_'], label[id^='overlay_'], label[id^='audio_'], label[id^='mode_'], label[id^='extra_'], label[id^='kill_'], label[id^='game_']" ).hide();
		$( this ).siblings().removeClass( "on" );
		if(jQuery.browser.mobile) {
			$( "#settings_descriptions p" ).html("Touch [INFO] for a description of the adjacent setting.");
		} else {
			$( "#settings_descriptions p" ).removeClass("overlay").html("");
			$( "#settings_descriptions h1, #settings_descriptions span" ).removeClass("overlay");
		}
	});
	
	/******Range Value Displayed for Complications Slider******/
	$('#compamount').html( $('#compslider').val() );
	$(document).on('input', '#compslider', function() {
		$('#compamount').html( $('#compslider').val() );
	});
	
	/******Options Select Submenu Descriptions******/
	if($(window).width() <= 808 || $(window).height() <= 800 || jQuery.browser.mobile) {
	   	$( "#settings_subsubmenu" ).css("grid-template-columns","min-content 1fr");
		$( "#settings_subsubmenu > label:not(.mobile)" ).css("padding-left","5px");
		$( "#settings_subsubmenu > label.mobile" ).css("padding-right","5px");
		$( "#theme_cookies" ).css("grid-column","1 / span 2");
		$( "#mode_ol" ).remove();
		$( "#settings_subsubmenu > label.mobile" ).click(function() {
			var head =  $(this).next().find("b:first").text();
			var desc =  $(this).attr("data-hover");
			$( "#desc-h" ).html(head);
			$( "#desc-p" ).html(desc);
			
			$("#shadow").removeClass("hidden");
			$("#popwrap").addClass("hidden");
			$("#descwrap").removeClass("hidden");
		});
	}
	else {
		$( "label.mobile" ).remove();
	   	$( "#settings_subsubmenu > label:not(.mobile)" ).hover(function() {
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
	/***Theme***/
	$("#theme_h1old").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h1theme";
		$("#theme_h1goty, #theme_h2, #theme_h3, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
			$("#music").removeClass("on").addClass("off");
		}
	});
	$("#theme_h1goty").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h1gotytheme";
		$("#theme_h1old, #theme_h2, #theme_h3, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
			$("#music").removeClass("on").addClass("off");
		}
	});
	$("#theme_h2").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h2theme";
		$("#theme_h1old, #theme_h1goty, #theme_h3, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Agent%20and%20Handler.mp3");
			$("#audiocontainer")[0].load();
			$("#music").removeClass("on").addClass("off");
		}
	});
	$("#theme_h3").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "h3theme";
		$("#theme_h1old, #theme_h1goty, #theme_h2, #theme_ht").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Menu%20ver.).mp3");
			$("#audiocontainer")[0].load();
			$("#music").removeClass("on").addClass("off");
		}
	});
	$("#theme_ht").click(function() {
		$(this).find("span").text("[On]");
		document.documentElement.className = "httheme";
		$("#theme_h1old, #theme_h1goty, #theme_h2, #theme_h3").find("span").text("[Off]");
		if( $("#musicselect").val() == "DEFAULT" ) {
			$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
			$("#audiocontainer")[0].load();
			$("#music").removeClass("on").addClass("off");
		}
	});	
	
	/***Overlay Style***/
	/*Button*/
	$("#overlay_style").click(function() {
		if( $(this).hasClass("H3") ) {
			$(this).removeClass("H3").addClass("H2").find("span").text("[HITMAN 2]");
			$("#overlayselect").val("H2");
			$("#overlay").removeClass("h3theme").addClass("h2theme");
			$("#settings_descriptions span").removeClass("h3theme").addClass("h2theme");
		}
		else if( $(this).hasClass("H2") ) {
			$(this).removeClass("H2").addClass("H1").find("span").text("[HITMAN]");
			$("#overlayselect").val("H1");
			$("#overlay").removeClass("h2theme").addClass("h1theme");
			$("#settings_descriptions span").removeClass("h2theme").addClass("h1theme");
		}
		else if( $(this).hasClass("H1") ) {
			$(this).removeClass("H1").addClass("H3").find("span").text("[HITMAN III]");
			$("#overlayselect").val("H3");
			$("#overlay").removeClass("h1theme").addClass("h3theme");
			$("#settings_descriptions span").removeClass("h1theme").addClass("h3theme");
		};
	});
	
	/*Refresh*/
	if($("#overlayselect").val() == "H2") {
		$("#overlay_style").removeClass("H3").addClass("H2").find("span").text("[HITMAN 2]");
		$("#overlay").removeClass("h3theme").addClass("h2theme");
		$("#settings_descriptions span").removeClass("h3theme").addClass("h2theme");
	} else if ($("#overlayselect").val() == "H1") {
		$("#overlay_style").removeClass("H3").addClass("H1").find("span").text("[HITMAN]");
		$("#overlay").removeClass("h3theme").addClass("h1theme");
		$("#settings_descriptions span").removeClass("h3theme").addClass("h1theme");
	} else if ($("#overlayselect").val() == "H3") {
		//Default
	};	

	/***Overlay Text Color***/
	/*Button*/
	$("#overlay_color").click(function() {
		if( $(this).hasClass("white") ) {
			$(this).removeClass("white").addClass("black").find("span").text("[Black]");
			$("#overlaycolor").val("black");
			$("#overlay").removeClass("whitetext").addClass("blacktext");
			$("#settings_descriptions span").removeClass("whitetext").addClass("blacktext");
		}
		else if( $(this).hasClass("black") ) {
			$(this).removeClass("black").addClass("icon").find("span").text("[Icon]");
			$("#overlaycolor").val("icon");
			$("#overlay").removeClass("blacktext").addClass("icontext");
			$("#settings_descriptions span").removeClass("blacktext").addClass("icontext");
		}
		else if( $(this).hasClass("icon") ) {
			$(this).removeClass("icon").addClass("white").find("span").text("[White]");
			$("#overlaycolor").val("white");
			$("#overlay").removeClass("icontext").addClass("whitetext");
			$("#settings_descriptions span").removeClass("icontext").addClass("whitetext");
		};
	});
	
	/*Refresh*/
	if($("#overlaycolor").val() == "black") {
		$("#overlay_color").removeClass("white").addClass("black").find("span").text("[Black]");
		$("#overlay").removeClass("whitetext").addClass("blacktext");
		$("#settings_descriptions span").removeClass("whitetext").addClass("blacktext");
	} else if ($("#overlaycolor").val() == "icon") {
		$("#overlay_color").removeClass("white").addClass("icon").find("span").text("[Icon]");
		$("#overlay").removeClass("whitetext").addClass("icontext");
		$("#settings_descriptions span").removeClass("whitetext").addClass("icontext");
	} else if ($("#overlaycolor").val() == "white") {
		//Default
	};
	
	/***Overlay Text Shadow***/
	/*Button*/
	$("#overlayshadow:checkbox").change(function(){
		if($(this).is(":checked")) {
			$("#overlay").removeClass("noshadow").addClass("textshadow");
			$("#settings_descriptions span").removeClass("noshadow").addClass("textshadow");
		} else if($(this).is(":not(:checked)")) {
			$("#overlay").removeClass("textshadow").addClass("noshadow");
			$("#settings_descriptions span").removeClass("textshadow").addClass("noshadow");
		};
	});
	
	/*Refresh*/
	if($("#overlayshadow:checked").length == 1) {
		$("#overlay").removeClass("noshadow").addClass("textshadow");
		$("#settings_descriptions span").removeClass("noshadow").addClass("textshadow");
	};
	
	/***Overlay Capitalization***/
	/*Button*/
	$("#overlay_capitals").click(function() {
		if( $(this).hasClass("default") ) {
			$(this).removeClass("default").addClass("uppercase").find("span").text("[Uppercase]");
			$("#overlaycaps").val("upper");
			$("#overlay").removeClass("defaultcase").addClass("uppercase");
			$("#settings_descriptions span").removeClass("defaultcase").addClass("uppercase");
		}
		else if( $(this).hasClass("uppercase") ) {
			$(this).removeClass("uppercase").addClass("lowercase").find("span").text("[Lowercase]");
			$("#overlaycaps").val("lower");
			$("#overlay").removeClass("uppercase").addClass("lowercase");
			$("#settings_descriptions span").removeClass("uppercase").addClass("lowercase");
		}
		else if( $(this).hasClass("lowercase") ) {
			$(this).removeClass("lowercase").addClass("default").find("span").text("[Default]");
			$("#overlaycaps").val("default");
			$("#overlay").removeClass("lowercase").addClass("defaultcase");
			$("#settings_descriptions span").removeClass("lowercase").addClass("defaultcase");
		};
	});
	
	/*Refresh*/
	if($("#overlaycaps").val() == "upper") {
		$("#overlay_capitals").removeClass("default").addClass("uppercase").find("span").text("[Upercase]");
		$("#overlay").removeClass("defaultcase").addClass("uppercase");
		$("#settings_descriptions span").removeClass("defaultcase").addClass("uppercase");
	} else if ($("#overlaycaps").val() == "lower") {
		$("#overlay_capitals").removeClass("default").addClass("lowercase").find("span").text("[Lowercase]");
		$("#overlay").removeClass("defaultcase").addClass("lowercase");
		$("#settings_descriptions span").removeClass("defaultcase").addClass("lowercase");
	} else if ($("#overlaycaps").val() == "default") {
		//Default
	};
	
	/***Roulette Type***/
	function lockMaps() {
		$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().removeClass("on").parent().addClass("lock");
		$("span.noncon").hide();
		$("b.noncon").attr( "style", "display: inline !important;" );
		$("b.nonconsp").css('display','inline-block');
	};
	function unlockMaps() {
		$("input.noncon").prop('disabled', false).parent().parent().parent().removeClass("lock");
		$("span.noncon").show();
		$("b.noncon").hide();
		$("b.nonconsp").css('display','none');
		$("input#RANDOMH3").prop('checked', false).parent().parent().removeClass("on");
	};
	
	$(document).on('click', '#mode_type', function() {
		if( $(this).hasClass("mission") ) {
			$(this).removeClass("mission").addClass("contracts").find("span").html("[Contracts&nbsp;Mode]");
			if( $("mode_targselect").hasClass("unassigned") ) {
				$("#modeselect").val("CONANY");
			} else if( document.getElementById("intel").checked == 0 ) {
				$("#modeselect").val("CONHARD");
			} else if( document.getElementById("intel").checked == 1 ) {
				$("#modeselect").val("CONEASY");
			};
			$("#mode_targselect, #mode_conamount, #mode_intel").removeClass("disabled");
			if($("#targetselect").val() == "CUSTOM"){
				$("#mode_targets").removeClass("disabled");
				$("#mode_targets input").prop('disabled', false);
			}
			$("#conslider, #intel").prop('disabled', false);
			/*Lock Maps*/
			$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().removeClass("on").parent().addClass("lock");
			$("span.noncon").hide();
			$("b.noncon").attr( "style", "display: inline !important;" );
			$("b.nonconsp").css('display','inline-block');
		} else if( $(this).hasClass("contracts") ) {
			$(this).removeClass("contracts").addClass("mission").find("span").html("[Mission&nbsp;Mode]");
			$("#modeselect").val("MAIN");
			$("#mode_targselect, #mode_targets, #mode_conamount, #mode_intel").addClass("disabled");
			$("#conslider, #intel").prop('disabled', true);
			$("#mode_targets input").prop('disabled', true);
			/*Unlock Maps*/
			$("input.noncon").prop('disabled', false).parent().parent().parent().removeClass("lock");
			$("span.noncon").show();
			$("b.noncon").hide();
			$("b.nonconsp").css('display','none');
			$("input#RANDOMH3").prop('checked', false).parent().parent().removeClass("on");
		};
	});
	
	/*Refresh*/
	if($("#modeselect").val() != "MAIN") {
		$("#mode_type").removeClass("mission").addClass("contracts").find("span").html("[Contracts&nbsp;Mode]");
		$("#mode_targselect, #mode_conamount, #mode_intel").removeClass("disabled");
		$("#conslider, #intel").prop('disabled', false);
		/*Lock Maps*/
		$("input.noncon").prop('checked', false).prop('disabled', true).parent().parent().removeClass("on").parent().addClass("lock");
		$("span.noncon").hide();
		$("b.noncon").attr( "style", "display: inline !important;" );
		$("b.nonconsp").css('display','inline-block');
	};
	
	/***Target Selection***/
	$(document).on('click', '#mode_targselect:not(.disabled)', function() {
		if( $(this).hasClass("all") ) {
			$(this).removeClass("all").addClass("custom").find("span").html("[Custom]");
			$("#targetselect").val("CUSTOM");
			$("#mode_targets").removeClass("disabled");
			$("#mode_targets input").prop('disabled', false);
			if( document.getElementById("intel").checked == 0 ) {
				$("#modeselect").val("CONHARD");
			} else if( document.getElementById("intel").checked == 1 ) {
				$("#modeselect").val("CONEASY");
			};
		} else if( $(this).hasClass("custom") ) {
			$(this).removeClass("custom").addClass("unassigned").find("span").text("[Unassigned]");
			$("#targetselect").val("UNASSIGNED");
			$("#modeselect").val("CONANY");
			$("#mode_targets").addClass("disabled");
			$("#mode_targets input").prop('disabled', true);
		} else if( $(this).hasClass("unassigned") ) {
			$(this).removeClass("unassigned").addClass("all").find("span").html("[All&nbsp;Types]");
			$("#targetselect").val("ALL");
			$("#mode_targets").addClass("disabled");
			$("#mode_targets input").prop('disabled', true);
			if( document.getElementById("intel").checked == 0 ) {
				$("#modeselect").val("CONHARD");
			} else if( document.getElementById("intel").checked == 1 ) {
				$("#modeselect").val("CONEASY");
			};
		};
	});	
	
	$("#mode_targets input:checkbox").change(function(){
		if($(this).is(":checked")) {
			$(this).parent().removeClass("off").addClass("on");
			if($(this).is("#chequnique")) {
				$("#targettypes option[value='UNIQUE']").prop("selected", true);
			} else if($(this).is("#cheqcivil")) {
				$("#targettypes option[value='CIVILIAN']").prop("selected", true);
			} else if($(this).is("#cheqstaff")) {
				$("#targettypes option[value='STAFF']").prop("selected", true);
			} else if($(this).is("#cheqguard")) {
				$("#targettypes option[value='GUARD']").prop("selected", true);
			};
		} else {
			$(this).parent().removeClass("on").addClass("off");
			if($(this).is("#chequnique")) {
				$("#targettypes option[value='UNIQUE']").prop("selected", false);
			} else if($(this).is("#cheqcivil")) {
				$("#targettypes option[value='CIVILIAN']").prop("selected", false);
			} else if($(this).is("#cheqstaff")) {
				$("#targettypes option[value='STAFF']").prop("selected", false);
			} else if($(this).is("#cheqguard")) {
				$("#targettypes option[value='GUARD']").prop("selected", false);
			};
		};
		
		if($("#mode_targets input:checked").length == 0) {
			$("#cheqguard").prop( "checked", true );
			$("#cheqguard").parent().removeClass("off").addClass("on");
			$("#targettypes option[value='GUARD']").prop("selected", true);
		};
	});
	
	/*Refresh*/
	if($("#targetselect").val() == "CUSTOM"){
		$("#mode_targselect").removeClass("all").addClass("custom").find("span").html("[Custom]");
		if($("#modeselect").val() != "MAIN") {
			$("#mode_targets").removeClass("disabled");
			$("#mode_targets input").prop('disabled', false);
		} else {
			$("#mode_targets").addClass("disabled");
			$("#mode_targets input").prop('disabled', true);
		}
	} else if($("#targetselect").val() == "UNASSIGNED"){
		$("#mode_targselect").removeClass("all").addClass("unassigned").find("span").text("[Unassigned]");
	};
	
	$("#mode_targets input:checkbox:not(:checked)").parent().removeClass("on").addClass("off");

	
	/***Target Amount Slider***/
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
	
	/***Contracts Intel***/
	$(document).on('click', '#mode_intel:not(.disabled)', function() {
		if( document.getElementById("intel").checked == 0 ) {
			$("#modeselect").val("CONHARD");
		} else if( document.getElementById("intel").checked == 1 ) {
			$("#modeselect").val("CONEASY");
		};
	});
	
	/*Masked Conditions*/
	$(document).on('click', '.mask', function() {
		$(this).removeClass("mask");
		
		if($(".mask").length == 0) {
			document.getElementById("saveroulette").disabled = false;
			document.getElementById("subsaveroulette").disabled = false;
		}
	});
	
	/*Stream Overlay*/
	$("label#mode_ol, #openoverlayinstructions").click(function(){
		$("#shadow").removeClass("hidden");
		$("#popwrap").addClass("hidden");
		$("#descwrap").addClass("hidden");
		$("#overlaywrap").removeClass("hidden");
	});
	
	/***Kill Requirements & Extra/Photo Objective & Time Limit & Achieve Rating***/
	$("#settings input:checkbox:not(:checked)").parent().find("span").text("[Off]");
	$("#settings input:checkbox:checked").parent().find("span").text("[On]");
	$("#settings input:checkbox").change(function(){
		if($(this).is(":checked")) {
			$(this).parent().find("span").text("[On]");
		} else {
			$(this).parent().find("span").text("[Off]");
		};
	});
	
	/***Specific Disguise***/
	/*Button*/
	$("#kill_disguise").click(function() {
		if( $(this).hasClass("on") ) {
			$(this).removeClass("on").addClass("onplus").find("span").text("[On+]");
			$("#disguise").val("ONPLUS");
		}
		else if( $(this).hasClass("onplus") ) {
			$(this).removeClass("onplus").addClass("off").find("span").text("[Off]");
			$("#disguise").val("OFF");
		}
		else if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("on").find("span").text("[On]");
			$("#disguise").val("ON");
		};
	});
	
	/*Refresh*/
	if($("#disguise").val() == "OFF") {
		$("#kill_disguise").removeClass("on").addClass("off").find("span").text("[Off]");
	} else if ($("#disguise").val() == "ONPLUS") {
		$("#kill_disguise").removeClass("on").addClass("onplus").find("span").text("[On+]");
	} else if ($("#disguise").val() == "ON") {
		//Default
	};	
	
	/***Forced Melee Methods***/
	$(document).on('click', '#kill_melee', function() {
		if( document.getElementById("melee").checked == 0 ) {
			$("#kill_mtype").addClass("disabled");
			$("#mtype").prop('disabled', true);
		} else if( document.getElementById("melee").checked == 1 ) {
			$("#kill_mtype").removeClass("disabled");
			$("#mtype").prop('disabled', false);
		};
	});
	
	/***Force Start/Exit***/
	/*Button*/
	$("#extra_starex").click(function() {
		if( $(this).hasClass("both") ) {
			$(this).removeClass("both").addClass("start").find("span").text("[Start Only]");
			$("#startexit").val("START");
			$("#extra_secret").addClass("disabled");
			$("#exsecret").prop('disabled', true);
		}
		else if( $(this).hasClass("start") ) {
			$(this).removeClass("start").addClass("exit").find("span").text("[Exit Only]");
			$("#startexit").val("EXIT");
			$("#extra_secret").removeClass("disabled");
			$("#exsecret").prop('disabled', false);
		}
		else if( $(this).hasClass("exit") ) {
			$(this).removeClass("exit").addClass("off").find("span").text("[Off]");
			$("#startexit").val("OFF");
			$("#extra_secret").addClass("disabled");
			$("#exsecret").prop('disabled', true);
		}
		else if( $(this).hasClass("off") ) {
			$(this).removeClass("off").addClass("both").find("span").text("[Both]");
			$("#startexit").val("BOTH");
			$("#extra_secret").removeClass("disabled");
			$("#exsecret").prop('disabled', false);
		};
	});
	
	/*Refresh*/
	if($("#startexit").val() == "OFF") {
		$("#extra_starex").removeClass("both").addClass("off").find("span").text("[Off]");
	} else if ($("#startexit").val() == "EXIT") {
		$("#extra_starex").removeClass("both").addClass("exit").find("span").text("[Exit Only]");
	} else if ($("#startexit").val() == "START") {
		$("#extra_starex").removeClass("both").addClass("start").find("span").text("[Start Only]");
	} else if ($("#startexit").val() == "BOTH") {
		//Default
	};	
	
	/***Restricted Mechanics***/
	/*Button*/
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
	
	/*Refresh*/
	if($("#mechanics").val() == "H2") {
		$("#game_mech").removeClass("off").addClass("h2").find("span").text("[H2/H3]");
	} else if ($("#mechanics").val() == "H1") {
		$("#game_mech").removeClass("off").addClass("h1").find("span").text("[H1]");
	} else if ($("#mechanics").val() == "OFF") {
		
	};
	
	/***Force Difficulty***/
	/*Button*/
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
	
	/*Refresh*/
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
		/*document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40*/
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
		$("#popwrap").removeClass("hidden");
		$("#descwrap").addClass("hidden");
		$("#overlaywrap").addClass("hidden");
	});
	
	function saveTextAsFile() {
		var textToWrite = document.getElementById("roulettetext").value;
		textToWrite = textToWrite.replace(/\n/g, "\r\n"); //retain line breaks
		var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
		var currentdate = new Date();
		var fileNameToSaveAs = "HitmanRoulette(" + currentdate.getDate() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getFullYear() +
                               "@" + currentdate.getHours() + "-" + currentdate.getMinutes() + "-" + currentdate.getSeconds() + ").txt";

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
	/***Overlay Enable***/
	$(document).on('click', '#overlaybutton', function() {
		$("body").addClass("overlaymode");
		$("#overlay, #overlayboxprereq, #timeprompt").removeClass("hidden");
		$("header, #nav, #content, footer, #floatbuttons, #timekeeper").addClass("hidden");
		$("#background").addClass("hide");
		$("div[id^=overlay-target].checked, div[id^=overlay-objective].checked, #overlay-camera.checked").removeClass("checked").addClass("details");
		$("#overlayboxheader, #overlaysize, #overlayfinish").fadeTo(1,1).delay(6000).fadeTo(3000,0);
				
		if($(".prereqcheck").length == $(".prereqcheck:empty").length && $("#input_pickup").value == "") {
			$("#overlayboxprereq").addClass("hidden");
		}
		else {
			$("#overlayboxprereq").removeClass("hidden");
		}
		
		if($("#timeprompt:empty").length == 1) {
			$("#overlay-challenge_timelimit").addClass("hidden");
		}
		else {
			$("#overlay-challenge_timelimit").removeClass("hidden");
		}
		$('#timeexact').countdown({until: +1, compact: true, format: 'MS'}); 
	});
	
	/***Overlay Disable***/
	$(document).on('click', '#overlayfinish', function() {
		$("body").removeClass("overlaymode");
		$("#overlay").addClass("hidden");
		$("header, #nav, #content, footer, #floatbuttons").removeClass("hidden");
		$("#background").removeClass("hide");
	});
	
	/***Overlay Draggable***/
	dragElement(document.getElementById("overlaybox"));
	
	function dragElement(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	  } else {
		elmnt.onmousedown = dragMouseDown;
	  }

	  function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	  }

	  function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	  }

	  function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	  }
	}	
	
	/***Overlay Size***/
	if($(window).width() > 2300) { 
		$("#overlay").removeClass("regular").addClass("medium");
		//$("#overlaymax").addClass("done");
	};
	$(document).on('click', '#overlaymin', function() {
		if($("#overlay").hasClass("large") ) {
			$("#overlay").removeClass("large").addClass("medium");
			$("#overlaymax").removeClass("done");
		} else if($("#overlay").hasClass("medium") ) {
			$("#overlay").removeClass("medium").addClass("regular");
		} else if($("#overlay").hasClass("regular") ) {
			$("#overlay").removeClass("regular").addClass("small");	
		} else if($("#overlay").hasClass("small") ) {
			$("#overlay").removeClass("small").addClass("tiny");
			$("#overlaymin").addClass("done");
		}
	});
	
	$(document).on('click', '#overlaymax', function() {
		if($("#overlay").hasClass("tiny") ) {
			$("#overlay").removeClass("tiny").addClass("small");
			$("#overlaymin").removeClass("done");
		} else if($("#overlay").hasClass("small") ) {
			$("#overlay").removeClass("small").addClass("regular");
		} else if($("#overlay").hasClass("regular") ) {
			$("#overlay").removeClass("regular").addClass("medium");
		} else if($("#overlay").hasClass("medium") ) {
			$("#overlay").removeClass("medium").addClass("large");
			$("#overlaymax").addClass("done");
		}
	});
	
	/***Overlay Intel***/
	$("div[id^=overlay-intel].detailsicon").hover(function() {
		$(this).addClass("hover");
	},function() {
		$(this).removeClass("hover");
	});
	$("#overlaybox .details").hover(function() {
		$(this).prev().addClass("hover");
	},function() {
		$(this).prev().removeClass("hover");
	});
	
	/***Overlay Prerequisites Hide***/
	$(document).on('click', '#overlay-prereq', function() {
		$("#overlayboxprereq").addClass("hidden");
	});
	
	/***Overlay Checks***/	
	$(document).on('click', 'div.details:not(.nocheck)', function() {
		$(this).removeClass("details").addClass("checked");
	});
	$(document).on('click', 'div.checked', function() {
		$(this).removeClass("checked").addClass("details");
	});

	/***Overlay Timer***/
	$("#timeprompt, #timekeeper").hover(function() {
		$("#overlay-challenge_timelimit").addClass("hover");
	},function() {
		$("#overlay-challenge_timelimit").removeClass("hover");
	});
	
	$(document).on('click', '#timeprompt', function() {
		var timevalue2 = "+" + $("#input_timelimitvalue").val();
		$("#timeprompt").addClass("hidden");
		$("#timekeeper").removeClass("hidden");
		$('#timeexact').countdown('option', {until: timevalue2, compact: true, format: 'MS', onExpiry: timerComplete});
	});
	$(document).on('click', '#timekeeper', function() {
		var timevalue2 = "+" + $("#input_timelimitvalue").val();
		$('#timekeeper').removeClass("fail");
		$('#timeexact').countdown('option', {until: timevalue2, compact: true, format: 'MS', onExpiry: timerComplete});
	});
	function timerComplete() { 
		$('#timekeeper').addClass("fail");
	};
	
	$(document).on('click', '#overlaybox div[id^=overlay-intel]', function() {
		$('#overlayboxprereq, div[id^=overlay-target], div[id^=overlay-objective], #overlay-camera, #overlay-exit, div[id^=overlay-complication], #overlay-challenge_rating').addClass("covered");
		$('#overlayboxheader, #overlaysize, #overlayfinish').addClass("hidden");
		$('#overlayinfo-return, #overlayinfo').removeClass("hidden");
		
		if($(this).is("#overlay-intel-target1")) {
			$("#overlayinfo-image").attr("class","target " + $("#input_target1").val().replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") + "-" + $("#input_mission").val() + $("#contarget").val());
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel").removeClass("hidden");
			$("#overlayinfo-instruction, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#subtitle-method").text($("#input_method1").val().split("|")[0]);
			$("#subtitle-alt-method").text($("#input_method1").val().split("|")[1]);
			$("#subtitle-disguise").text($("#input_disguise1").val());
			if($("#input_intel1").val()) {
				$("#overlayinfo-intel, #overlayinfo-intel").removeClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel1").val());
			}
			else {
				$("#overlayinfo-intel, #overlayinfo-intel").addClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel1").val());
			}
			$("#overlayinfo-nameplate").attr("class","target");
			$("#overlayinfo-nameplate p#title").text("Target");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_target1").val());
		}
		else if($(this).is("#overlay-intel-target2")) {
			$("#overlayinfo-image").attr("class","target " + $("#input_target2").val().replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") + "-" + $("#input_mission").val() + $("#contarget").val());
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel").removeClass("hidden");
			$("#overlayinfo-instruction, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#subtitle-method").text($("#input_method2").val().split("|")[0]);
			$("#subtitle-alt-method").text($("#input_method2").val().split("|")[1]);
			$("#subtitle-disguise").text($("#input_disguise2").val());
			if($("#input_intel2").val()) {
				$("#overlayinfo-intel, #overlayinfo-intel").removeClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel2").val());
			}
			else {
				$("#overlayinfo-intel, #overlayinfo-intel").addClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel2").val());
			}
			$("#overlayinfo-nameplate").attr("class","target");
			$("#overlayinfo-nameplate p#title").text("Target");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_target2").val());
		}
		else if($(this).is("#overlay-intel-target3")) {
			$("#overlayinfo-image").attr("class","target " + $("#input_target3").val().replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") + "-" + $("#input_mission").val() + $("#contarget").val());
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel").removeClass("hidden");
			$("#overlayinfo-instruction, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#subtitle-method").text($("#input_method3").val().split("|")[0]);
			$("#subtitle-alt-method").text($("#input_method3").val().split("|")[1]);
			$("#subtitle-disguise").text($("#input_disguise3").val());
			if($("#input_intel3").val()) {
				$("#overlayinfo-intel, #overlayinfo-intel").removeClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel3").val());
			}
			else {
				$("#overlayinfo-intel, #overlayinfo-intel").addClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel3").val());
			}
			$("#overlayinfo-nameplate").attr("class","target");
			$("#overlayinfo-nameplate p#title").text("Target");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_target3").val());
		}
		else if($(this).is("#overlay-intel-target4")) {
			$("#overlayinfo-image").attr("class","target " + $("#input_target4").val().replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") + "-" + $("#input_mission").val() + $("#contarget").val());
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel").removeClass("hidden");
			$("#overlayinfo-instruction, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#subtitle-method").text($("#input_method4").val().split("|")[0]);
			$("#subtitle-alt-method").text($("#input_method4").val().split("|")[1]);
			$("#subtitle-disguise").text($("#input_disguise4").val());
			if($("#input_intel4").val()) {
				$("#overlayinfo-intel, #overlayinfo-intel").removeClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel4").val());
			}
			else {
				$("#overlayinfo-intel, #overlayinfo-intel").addClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel4").val());
			}
			$("#overlayinfo-nameplate").attr("class","target");
			$("#overlayinfo-nameplate p#title").text("Target");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_target4").val());
		}
		else if($(this).is("#overlay-intel-target5")) {
			$("#overlayinfo-image").attr("class","target " + $("#input_target5").val().replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") + "-" + $("#input_mission").val() + $("#contarget").val());
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel").removeClass("hidden");
			$("#overlayinfo-instruction, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#subtitle-method").text($("#input_method5").val().split("|")[0]);
			$("#subtitle-alt-method").text($("#input_method5").val().split("|")[1]);
			$("#subtitle-disguise").text($("#input_disguise5").val());
			if($("#input_intel5").val()) {
				$("#overlayinfo-intel, #overlayinfo-intel").removeClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel5").val());
			}
			else {
				$("#overlayinfo-intel, #overlayinfo-intel").addClass("hidden");
				$("#overlayinfo-intel #wording").text($("#input_intel5").val());
			}
			$("#overlayinfo-nameplate").attr("class","target");
			$("#overlayinfo-nameplate p#title").text("Target");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_target5").val());
		}
		else if($(this).is("#overlay-intel-start") || $(this).is("#overlay-intel-exit")) {
			$("#overlayinfo-image").attr("class","hidden");
			$("#overlayinfo-entry, #overlayinfo-exit").removeClass("hidden");
			$("#overlayinfo-image").addClass("hidden");
			if($("#input_entry").val() && $("#input_exit").val().split('|')[0] == "") { //Any Exit
				$("#entry-nameplate p#subtitle").text($("#input_entry").val());
				$("#exit-nameplate p#subtitle").text("Any Exit");
				$("#overlayinfo-exitreq").text("");
				$("#overlayinfo-entry").attr("class",$("#input_mission").val() + "-start-" + $("#input_entry").val().replace(/\s|,|'|“|”|-|:|\?|\!|\(|\)|\./g, ""));
				$("#overlayinfo-exit").attr("class","any-exit");
			} else if($("#input_entry").val() == "" && $("#input_exit").val().split('|')[0]) { //Any Entrance
				$("#entry-nameplate p#subtitle").text("Any Entrance");
				$("#exit-nameplate p#subtitle").text($("#input_exit").val().split("|")[0]);
				$("#overlayinfo-exitreq").text($("#input_exit").val().split("|")[1]);
				$("#overlayinfo-entry").attr("class","any-start");
				$("#overlayinfo-exit").attr("class",$("#input_mission").val() + "-exit-" + $("#input_exit").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			} else { //Both or Neither
				$("#entry-nameplate p#subtitle").text($("#input_entry").val());
				$("#exit-nameplate p#subtitle").text($("#input_exit").val().split("|")[0]);
				$("#overlayinfo-exitreq").text($("#input_exit").val().split("|")[1]);
				$("#overlayinfo-entry").attr("class",$("#input_mission").val() + "-start-" + $("#input_entry").val().replace(/\s|,|'|“|”|-|:|\?|\!|\(|\)|\./g, ""));
				$("#overlayinfo-exit").attr("class",$("#input_mission").val() + "-exit-" + $("#input_exit").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			}
		}
		else if($(this).is("#overlay-intel-restriction")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_restriction").val().split('|')[2] + "-" + $("#input_restriction").val().split('|')[0].replace(/\s|,|'|“|”|-|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_restriction").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","restriction");
			$("#overlayinfo-nameplate p#title").text("Restriction");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_restriction").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-pickup")) {
			$("#overlayinfo-image").attr("class","objective NoAgencyPickup");
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text("When planning this mission, refrain from using a hidden stash or agency pickup.");
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text("No Agency Pickup");
		}
		else if($(this).is("#overlay-intel-objective")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_objective").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_objective").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","objective");
			$("#overlayinfo-nameplate p#title").text("Objective");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_objective").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-objectivex")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_extraobjective").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").html($("#input_extraobjective").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","objective");
			$("#overlayinfo-nameplate p#title").text("Extra Objective");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_extraobjective").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-camera")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_camera").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").html($("#input_camera").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","camera");
			$("#overlayinfo-nameplate p#title").text("Photo Objective");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_camera").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-complication1")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_complication1").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_complication1").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_complication1").val().split('|')[0]);
		}		
		else if($(this).is("#overlay-intel-complication2")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_complication2").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_complication2").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_complication2").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-complication3")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_complication3").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_complication3").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_complication3").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-complication4")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_complication4").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_complication4").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_complication4").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-complication5")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_complication5").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_complication5").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_complication5").val().split('|')[0]);
		}
		else if($(this).is("#overlay-intel-complication6")) {
			$("#overlayinfo-image").attr("class","objective " + $("#input_complication6").val().split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, ""));
			$("#overlayinfo-instruction").removeClass("hidden");
			$("#overlayinfo-method, #overlayinfo-disguise, #overlayinfo-intel, #overlayinfo-entry, #overlayinfo-exit").addClass("hidden");
			$("#overlayinfo-instruction #wording").text($("#input_complication6").val().split('|')[1]);
			$("#overlayinfo-nameplate").attr("class","complication");
			$("#overlayinfo-nameplate p#title").text("Complication");
			$("#overlayinfo-nameplate p#subtitle").text($("#input_complication6").val().split('|')[0]);
		}
	});
	$(document).on('click', '#overlayinfo-return', function() {
		$('#overlayboxheader, #overlaysize, #overlayfinish').removeClass("hidden");
		$('#overlayinfo-return, #overlayinfo').addClass("hidden");
		$('#overlayboxprereq, div[id^=overlay-target], div[id^=overlay-objective], #overlay-camera, #overlay-exit, div[id^=overlay-complication], #overlay-challenge_rating').removeClass("covered");
	});
	
	/******Reset or Return******/
	/***Reset Button***/
	$(document).on('click', '#reset_settings', function() {
		/*Overlay Style*/
		if( !$("#overlay_style").hasClass("H3") ) {
			$("#overlay_style").removeClass("H1 H2").addClass("H3").find("span").text("[HITMAN III]");
			$("#overlayselect").val("H3");
			$("#overlay").removeClass("h1theme h2theme").addClass("h3theme");
			$("#settings_descriptions span").removeClass("h1theme h2theme").addClass("h3theme");
		};
		
		/*Overlay Text Color*/
		if( !$("#overlay_color").hasClass("white") ) {
			$("#overlay_color").removeClass("black icon").addClass("white").find("span").text("[White]");
			$("#overlaycolor").val("white");
			$("#overlay").removeClass("blacktext icontext").addClass("whitetext");
			$("#settings_descriptions span").removeClass("blacktext icontext").addClass("whitetext");
		};
		
		/*Overlay Text Shadow*/
		if($("#overlayshadow:checkbox").is(":checked")) {
			$("#overlayshadow:checkbox").prop( "checked", false );
			$("#overlay").removeClass("textshadow").addClass("noshadow");
			$("#settings_descriptions span").removeClass("textshadow").addClass("noshadow");
		};
		
		/*Overlay Capitals*/
		if( !$("#overlay_capitals").hasClass("default") ) {
			$("#overlay_capitals").removeClass("uppercase lowercase").addClass("default").find("span").text("[Default]");
			$("#overlaycaps").val("default");
			$("#overlay").removeClass("uppercase lowercase").addClass("defaultcase");
			$("#settings_descriptions span").removeClass("uppercase lowercase").addClass("defaultcase");
		};
		
		/*Roulette Music*/
		if( !$("#audio_music").hasClass("default") ) {
			$("#audio_music").removeClass("WoA AaH DA1 DA2").addClass("default").find("span").text("[Default]");
			$("#musicselect").val("DEFAULT");
			if(document.cookie == "theme=H1") {
				$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
				$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=H1goty") {
			$("#audiosource").attr("src","./audio/World%20of%20Assassination.mp3");
			$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=H2") {
				$("#audiosource").attr("src","./audio/Agent%20and%20Handler.mp3");
				$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=H3") {
				$("#audiosource").attr("src","./audio/Death%20Awaits%20(Menu%20ver.).mp3");
				$("#audiocontainer")[0].load();
			} else if(document.cookie == "theme=HT") {
				$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
				$("#audiocontainer")[0].load();
			} else {
				$("#audiosource").attr("src","./audio/Death%20Awaits%20(Planning%20ver.).mp3");
				$("#audiocontainer")[0].load();
			}
		};
		$("#volumeslider").val(50);
		$("#volumeamount").html("50");
		
		/*Roulette Modes*/
		//Type
		$("#mode_type").removeClass("contracts").addClass("mission").find("span").html("[Mission&nbsp;Mode]");
		$("#modeselect").val("MAIN");
		//Target Select
		$("#mode_targselect").removeClass("custom unassigned").addClass("all").find("span").html("[All&nbsp;Types]");
		$("#targetselect").val("ALL");
		//Target Types
		$("#mode_targets").addClass("disabled");
		$("#mode_targets label").removeClass("off").addClass("on");
		$("#mode_targets input").prop('checked', true).prop('disabled', true);
		//Target Amount
		$("#conslider").val(0);
		$("#conamount").html("#");
		//Contracts Intel		
		$("#intel").prop( "checked", true );
		$("#mode_intel span").html("[On]");
		//Default Disabled Settings
		$("#conslider, #intel").prop('disabled', true);
		$("#mode_targselect, #mode_conamount, #mode_intel").addClass("disabled");
		//Condition Mask
		$("#mode_mask #mask").prop( "checked", false );
		$("#mode_mask span").html("[Off]");
		
		/*Unlock Maps*/
		$("input.noncon").prop('disabled', false).parent().parent().parent().removeClass("lock");
		$("span.noncon").show();
		$("b.noncon").hide();
		$("b.nonconsp").css('display','none');
		$("input#RANDOMH3").prop('checked', false).parent().parent().removeClass("on");
		
		/*Specific Disguise*/
		if( !$("#kill_disguise").hasClass("on") ) {
			$("#kill_disguise").removeClass("onplus off").addClass("on").find("span").text("[On]");
			$("#disguise").val("ON");
		};
	
		/*Kill Requirements*/
		$("input#melee, input#mtype, input#firearm, input#accident, input#generic").prop( "checked", true ).parent().find("span").text("[On]");	
		$("#kill_mtype").removeClass("disabled");
		$("#mtype").prop('disabled', false);
		
		/*Force Start/Exit*/
		if( !$("#extra_starex").hasClass("both") ) {
			$("#extra_starex").removeClass("start exit off").addClass("both").find("span").text("[Both]");
			$("#startexit").val("BOTH");
			$("#extra_secret").removeClass("disabled");
			$("#exsecret").prop('disabled', false);
		};
		
		/*Extra/Photo Objective*/
		$("input#exobj, input#cameraobj").prop( "checked", false ).parent().find("span").text("[Off]");
		
		/*Allow Complications*/
		$("#compslider").val(0);
		$("#compamount").html("0");

		/*Restrict Mechanics*/
		if( !$("#game_mech").hasClass("off") ) {
			$("#game_mech").removeClass("h1 h2").addClass("off").find("span").text("[Off]");
			$("#mechanics").val("OFF");
		};

		/*Time & Rating*/
		$("input#time, input#rating").prop( "checked", false ).parent().find("span").text("[Off]");
		
		/*Force Difficulty*/
		if( !$("#game_diff").hasClass("off") ) {
			$("#game_diff").removeClass("dh1 dh2").addClass("off").find("span").text("[Off]");
			$("#difficulty").val("OFF");
		};
		
	});
	/***Return Button***/
	$(document).on('click', '#reset_return', function() {
		$(".historybtn, #submenu_obj, #submenu_comp, #submenu_chal, #saveroulette, #subsaveroulette, #overlaybutton").prop( "disabled", true );
		$("#map").removeClass("on");
		$("#map_place").html('<span>Good afternoon, 47.</span>');
		$("#map_name").html('<span>"Issue Roulette" to Begin</span>');
		$("#travel, #target1, #target2, #target3, #target4, #target5, #objective, #objectivex, #camera, #complication1, #complication2, #complication3, #complication4, #complication5, #complication6, #restriction, #timelimit, #ratingget, #diffget").html("");
		document.getElementById("intro").style.setProperty("display", "");
		document.getElementById("features").style.setProperty("display", "");
		if(document.getElementById("overlayguide") != null) {
			document.getElementById("overlayguide").style.setProperty("display", "");
		}
		$("#background").attr("class", "");
		
		if($(window).width() < 808) { 
			$( "nav#menu button#mobilemenu, nav#minimenu, nav#minimenu button#missions, nav#minimenu button#options, nav#minimenu button#about, nav#menu button#missions, nav#menu button#options, nav#menu button#about, #maps_mobilesubmenu" ).removeClass("on");
			$( "nav#menu button#roulette, nav#minimenu button#roulette, #contract_mobilesubmenu" ).addClass("on");
			$( "header, #contract, #nav_mobile, #scrollbar" ).removeClass("off");
			$( "#maps, #settings, #credits" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile settingsaboutmobile");
			$( "#background" ).addClass( "hide" );
			//$( "#floatbuttons:not('.hidden')" ).hide('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": - floatmuzz}, 500);
		} else {
			//Make Sure these settings match with the mode_ol "Read" click
			$( "nav#menu button#roulette" ).addClass( "on" );
			$( "nav#menu button#roulette" ).siblings().removeClass( "on" );
			$( "nav#minimenu, nav#minimenu button#missions, nav#minimenu button#options, nav#minimenu button#about, #maps_mobilesubmenu" ).removeClass("on");
			$( "nav#minimenu button#roulette, #contract_mobilesubmenu" ).addClass("on");
			$( "header, #contract, #nav_mobile, #scrollbar" ).removeClass("off");
			$( "#maps, #settings, #credits" ).addClass("off");
			$( "body" ).removeClass( "hide missionsmobile settingsaboutmobile");
			$( "#background, .external-scroll_x1" ).removeClass( "hide" );
			//$( "#floatbuttons:not('.hidden')" ).show('slide',{ direction: 'right' }, 500);
			
			var floater = $("#floatbuttons").width(); var muzzak = $("#music").width();	var floatmuzz = floater-muzzak;
			$( "#floatbuttons:not('.hidden')" ).animate({"right": 0}, 500);
		};
		
	});
});