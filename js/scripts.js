$( window ).resize(function() {
	var w = $(window).width();
	if (w < 1050) {
		$(".table").css("font-size", "1.3rem");
	}
	else {
		$(".table").css("font-size", "1.4rem");
	}
	if ( w < 970) {
		$("td[data-title='Name']").fadeOut("fast");
		$("th[data-title='Name']").fadeOut("fast");
	}
	else {
		$("td[data-title='Name']").fadeIn("fast");
		$("th[data-title='Name']").fadeIn("fast");
	}

	if ( w < 820) {
		$("td[data-title='Info']").fadeOut("fast");
		$("th[data-title='Info']").fadeOut("fast");
	}
	else {
		$("td[data-title='Info']").fadeIn("fast");
		$("th[data-title='Info']").fadeIn("fast");
	}

	if ( w < 730) {
		$("td[data-title='Plane']").fadeOut("fast");
		$("th[data-title='Plane']").fadeOut("fast");
	}
	else {
		$("td[data-title='Plane']").fadeIn("fast");
		$("th[data-title='Plane']").fadeIn("fast");
	}

	$(window).trigger('resize.stickyTableHeaders');
});

$(".control-buttons-arrival").click(function() {
	if ($(".section-arrival").hasClass("active-chechboxa")) {
		$(".active-chechboxa").removeClass("active-chechboxa");
		$(".section-arrival").fadeOut("fast");
	}
	else {
		$(".section-arrival").addClass("active-chechboxa");
		$(".section-arrival").fadeIn("slow");	
	}
	
	// $(".departure").fadeOut("fast", function(){
	// 	$(".arrival").fadeIn("fast");
	// });
	reloadData();
});

$(".control-buttons-departure").click(function() {
	if ($(".section-departure").hasClass("active-chechboxd")) {
		$(".active-chechboxd").removeClass("active-chechboxd");
		$(".section-departure").fadeOut("fast");
	}
	else {
		$(".section-departure").addClass("active-chechboxd");
		$(".section-departure").fadeIn("slow");	
	}

	// $(".arrival").fadeOut("fast", function(){
	// 	$(".departure").fadeIn("fast");
	// });
	reloadData();
});

$(function () {
    $("#table").stickyTableHeaders({fixedOffset: $('.top-container')});
    reloadData();
});
