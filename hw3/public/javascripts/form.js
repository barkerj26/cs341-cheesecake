/*
 *	Made by Jaden Barker for CS-341
 */

// handles submitting the cheesecake form
submitHandler = function(event) {
	if ($("#notes").val().toLocaleLowerCase().includes("vegan")) {
		alert("Cheesecakes contain dairy, they are not vegan.");
	} else {
		$("#order").hide();
		$("#ordered").show();
	}
}

// handles selecting month for cheesecake order stats
monthHandler = function(event) {
	$("#month").text($(this).text());
}

// apply handlers to appropriate buttons
$(function() {
	$("#submit").click(submitHandler);
	$(".dropdown-button").click(monthHandler);
});

