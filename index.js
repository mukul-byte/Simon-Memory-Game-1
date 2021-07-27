var randomNumber, randomChosenColour, buttonColours = ["red", "blue", "green", "yellow"],
	gamePattern = [],
	userClickedPattern = [],
	level = -1,
	idx = 0,
	heighestScore = 0,
	currentScore = 0;

function nextSequence() {
	-1 == level ? (level = 1, currentScore = 0) : (level++, currentScore++), heighestScore = Math.max(heighestScore, currentScore), $("#current-score").text("Current Score : " + currentScore), $("#heighest-score").text("Heighest Score : " + heighestScore), $("h1").text("Level " + level), randomNumber = Math.floor(3 * Math.random()) + 1, randomChosenColour = buttonColours[randomNumber], gamePattern.push(randomChosenColour), $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100), playSound(randomChosenColour), checkAnswer();
}

function handler() {
	var e = this.id;
	animatePress(e), playSound(e),userClickedPattern.push(e), -1 !== level ? gamePattern[idx] != e ? gameOver() : ++idx == gamePattern.length && setTimeout(nextSequence, 1e3) : gameOver()
}

function playSound(e) {
	new Audio("sounds/" + e + ".mp3").play();
}

function animatePress(e) {
	$("#" + e).addClass("pressed"), setTimeout(function () {
		$("#" + e).removeClass("pressed")
	}, 100);
}

function checkAnswer() {
	userClickedPattern.length = 0, idx = 0;
}

function gameOver() {
	$("h1").text("Game Over, Press Spacebar Key to Restart"), playSound("wrong"), $("body").css("background-color", "red"), setTimeout(function () {
		$("body").css("background-color", "#011F3F");
	}, 100), gamePattern.length = 0, currentScore = 0, level = -1;
}
$("#red").on("click", handler), $("#blue").on("click", handler), $("#green").on("click", handler), $("#yellow").on("click", handler), $(document).on("keypress", function (e) {
	" " == e.key && -1 == level && nextSequence();
});
alert("hello");