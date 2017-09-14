// random number generator

var winNumber = Math.floor((Math.random() * 101) + 19);
var counter = 0;
var wins = 0;
var losses = 0;
var crystalGems = ["assets/images/Steven.png", "assets/images/Amethyst.png", 
"assets/images/Garnet.png", "assets/images/Pearl.png"]

$(".win-number").text(winNumber);
$("#counter").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);

// Reset functions

function reset() {
	counter = 0;
	winNumber = Math.floor((Math.random() * 101) + 19);
	$("#counter").text(counter);
	$(".win-number").text(winNumber);
	crystalNumber = Math.floor((Math.random() * 12) + 1);
	$(".gems").empty(imageGem);
}

function resetGems() {
	for (var i = 0; i < 4; i++) {
		var crystalNumber = Math.floor((Math.random() * 12) + 1);
		var imageGem = $("<img>");
		imageGem.addClass("gem-image");
		imageGem.attr("src", crystalGems[i]);
		imageGem.attr("data-gemvalue", crystalNumber);
		$(".gems").append(imageGem);
	}

	// Click event inside resetGems function

	$(".gem-image").on("click", function () {
		var gemValue = ($(this).attr("data-gemvalue"));
		gemValue = parseInt(gemValue);
		counter += gemValue;
		$("#counter").text(counter);

		// If statements and logic inside resetGems function

		if (counter === winNumber) {
			$("#success").text("You win!")
			reset();
			wins++;
			$("#wins").text(wins);
			resetGems();
		}

		if (counter > winNumber) {
			$("#success").text("You lose!")
			reset();
			losses++;
			$("#losses").text(losses);
			resetGems();
		}
	});
}


// // For loop to generate images and numbers
for (var i = 0; i < 4; i++) {
	var crystalNumber = Math.floor((Math.random() * 12) + 1);
	var imageGem = $("<img>");
	imageGem.addClass("gem-image");
	imageGem.attr("src", crystalGems[i]);
	imageGem.attr("data-gemvalue", crystalNumber);
	$(".gems").append(imageGem);
}

// // Click event

$(".gem-image").on("click", function () {
	var gemValue = ($(this).attr("data-gemvalue"));
	gemValue = parseInt(gemValue);
	counter += gemValue;
	$("#counter").text(counter);

// 	// If statements and logic

	if (counter === winNumber) {
		$("#success").text("You win!")
		reset();
		wins++;
		$("#wins").text(wins);
		resetGems();
	}

	if (counter > winNumber) {
		$("#success").text("You lose!")
		reset();
		losses++;
		$("#losses").text(losses);
		resetGems();
	}

});


