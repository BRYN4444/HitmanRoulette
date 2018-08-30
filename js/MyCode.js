$(document).ready(function() {
	//Creates scroll bar just under the strip
	var newwidth = document.getElementById("contract").scrollWidth;
	document.getElementById("scrollfiller").style.width = newwidth + "px";
	
	//Show dropdown with element click, hide by clicking any outside element
	$("#missionbutton").click(function (e) {
		$("#dropdown1").toggle();
		$("#dropdown2").hide();
		e.stopImmediatePropagation();
	});
	$(document).click(function (e) {
		if($("#dropdown1").is(":visible") && !$("#dropdown1").contents().is(e.target) && !$("#dropdown1").contents().contents().is(e.target) && !$("#dropdown1").contents().contents().contents().is(e.target)) {
			$("#dropdown1").hide();
		}
	});
	$("#filterbutton").click(function (e) {
		$("#dropdown1").hide();
		$("#dropdown2").toggle();
		e.stopImmediatePropagation();
	});
	$(document).click(function (e) {
		if($("#dropdown2").is(":visible") && !$("#dropdown2").contents().is(e.target) && !$("#dropdown2").contents().contents().is(e.target)) {
			$("#dropdown2").hide();
		}
	});
	
	//Scroll contract with alternate scrollbar
	$('#scroll').on('scroll', function () {
		$('#contract').scrollLeft($(this).scrollLeft());
	});
	$('#contract').on('scroll', function () {
		$('#scroll').scrollLeft($(this).scrollLeft());
	});
	
	//Click target picture to toggle Eliminated text
	$("body").on("click", "#frame", function(){
		$(this).find("#eliminated").toggle();
	});
		//Old Version -- Maybe Delete
		//$("#frame").click(function (e) {
		//	$(this).find("#eliminated").toggle();
		//	e.stopImmediatePropagation();
		//});

    //Complications Slider
	var comprestrict = $("#compSlider").val();
	$("#strict").text(comprestrict);
	$("div[id^='complication']").slice(comprestrict).css("display","none");
    $("#compSlider").on('input', function () {
		$(this).trigger('change');
		var comprestrict = $(this).val();
		$("#strict").text(comprestrict);
		$("div[id^='complication']").css("display","").slice(comprestrict).css("display","none");
		
		var newwidth = document.getElementById("contract").scrollWidth;
		document.getElementById("scrollfiller").style.width = newwidth + "px";
	});
	
	//About Window
	$("#about-button").click(function (e) {
		$("#overlay").show();
		e.stopImmediatePropagation();
	});
	$("#return").click(function (e) {
		$("#overlay").hide();
		e.stopImmediatePropagation();
	});
});