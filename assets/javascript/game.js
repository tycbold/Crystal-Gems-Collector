// Ready function

$(document).ready(function() {

// random number generator

var winNumber = Math.floor((Math.random() * 101) + 19);
var counter = 0;
var wins = 0;
var losses = 0;
var crystalGems = ["assets/images/Steven.png", "assets/images/Amethyst.png", 
"assets/images/Garnet.png", "assets/images/Pearl.png"];
var audioWin = new Audio("steven-win.wav");
var audioLose = new Audio("steven-lose.wav");

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
		$("#counter").animate({opacity: "0.2"}, 200, "linear", 
			function(){
			$("#counter").text(counter);
			});
		$("#counter").animate({opacity: "1"}, 200, "linear");


		// If statements and logic inside resetGems function

		if (counter === winNumber) {
			$("#success").text("You win!");
			audioWin.play();
			reset();
			wins++;
			$("#wins").text(wins);
			resetGems();
		}

		if (counter > winNumber) {
			$("#success").text("You lose!");
			audioLose.play();
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
	$("#counter").animate({opacity: "0.2"}, 200, 
			function(){
			$("#counter").text(counter);
			});
	$("#counter").animate({opacity: "1"}, 200);
		

// 	// If statements and logic

	if (counter === winNumber) {
		$("#success").text("You win!");
		audioWin.play();
		reset();
		wins++;
		$("#wins").text(wins);
		resetGems();
	}

	if (counter > winNumber) {
		$("#success").text("You lose!");
		audioLose.play();
		reset();
		losses++;
		$("#losses").text(losses);
		resetGems();
	}

});

});

