$( window ).resize(function() {
	var w = $(window).width();
	if ( w < 850) {
		$("td[data-title='Name']").fadeOut("fast");
		$("th[data-title='Name']").fadeOut("fast");
	}
	else {
		$("td[data-title='Name']").fadeIn("fast");
		$("th[data-title='Name']").fadeIn("fast");
	}

	if ( w < 730) {
		$("td[data-title='Info']").fadeOut("fast");
		$("th[data-title='Info']").fadeOut("fast");
	}
	else {
		$("td[data-title='Info']").fadeIn("fast");
		$("th[data-title='Info']").fadeIn("fast");
	}

	if ( w < 620) {
		$("td[data-title='Plane']").fadeOut("fast");
		$("th[data-title='Plane']").fadeOut("fast");
	}
	else {
		$("td[data-title='Plane']").fadeIn("fast");
		$("th[data-title='Plane']").fadeIn("fast");
	}
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

$(".table-info").click(function() {
	if ($(this).hasClass("active-l1")) {
		$(".active-l2").fadeOut("fast", function(){
			$(".active-l2").removeClass("active-l2");
			$(".active-l1").removeClass("active-l1");
		});
	}
	else {
		$(".active-l2").fadeOut("fast");
		$(".active-l1").removeClass("active-l1");
		$(".active-l2").removeClass("active-l2");
		$(this).addClass("active-l1");
		$(this).next("tr").fadeIn("fast", function (){
			$(this).addClass("active-l2");
		});
	}
});

$(function () {
    $("#table").stickyTableHeaders({fixedOffset: $('.top-container')});
});
