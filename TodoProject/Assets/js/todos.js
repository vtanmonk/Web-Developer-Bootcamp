// Check off Specific Todos By Clocking
/*
$("li").click(function() {
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css( {
			color: "black",
			textDecoration: "none"
		});
	} else {
		$(this).css( {
			color: "gray",
			textDecoration: "line-through"
	});
	}
});*/

/*Declaring object variables
var unDone = {
	color: "black",
	textDecoration: "none"
}
var done = {
	color: "gray",
	textDecoration: "line-through"
}

$("li").click(function() {
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css(unDone);
	} else {
		$(this).css(done);
	}
});*/

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + " </li>"  )
	}
});

$(".fa-edit").click(function() {
	$("input[type='text']").fadeToggle();
});