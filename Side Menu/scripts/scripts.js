$(document).ready(function() {
	$(".open-button").click(function() {
		$(".sidebar").animate({left: "0px"});
	});
	$(".close").click(function() {
		$(".sidebar").animate({left: "-300px"});
	});
});