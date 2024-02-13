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

// handles the data received from the POST send upon changing the stats month
monthReceiver = function(data) {
	var i = 0;
	$("#monthstats").children().each(function() {
		$(this).text(data[i].quantity + " " + data[i].topping);
		i++;
	});
}

// handles selecting month for cheesecake order stats
monthHandler = function(event) {
	$("#month").text($(this).text());
	$.post("orders", monthReceiver);
}

// apply handlers to appropriate buttons
$(function() {
	$("#submit").click(submitHandler);
	$(".dropdown-button").click(monthHandler);
});

