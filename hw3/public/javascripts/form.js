submitHandler = function(event) {
	if ($("#notes").val().toLocaleLowerCase().includes("vegan")) {
		alert("Cheesecakes contain dairy, they are not vegan.");
	} else {
		$("#order").hide();
		$("#ordered").show();
	}
}

monthHandler = function(event) {
	$("#month").text($(this).text());
}

$(function() {
	$("#submit").click(submitHandler);
	$(".dropdown-button").click(monthHandler);
});

