//creating global variables==============================================================

	var questionArray = ["Who is the king of the Gods?", "Poseidon is the god of the sea and...?", "Hades is best known for kidnapping which minor Goddess?", 
						"Who is Athena's mother in most Mythology?", "In on Myth, the God Apollo chases after what nymph?", 
						"Artemis is sworn off _______ because of a vow she once made", "Who is the eldest of the gods?", "Hermes symbol is what now popular medical symbol?",
						"Hera is often symbolized with what following animal?", "Demeter is the creator of which Mythological being?", 
						"Hephaestus is married to which unwilling Goddess?", "Who is the youngest of the Gods?", 
						"Which of the following house-pets is one of the animals of Ares?", "Which Goddess gave up her throne for Dionysus?", 
						"Prosperina is the Roman equivalent of which Goddess?", "Hecate is the Goddess of...?"];

	var answerArray = [["Zeus", "Hera", "Dionysus", "Apollo"],["Rain", "Fish", "Earthquakes", "Sand"],["Hacate", "Persephone", "Isis", "Eris"],["Aphrodite", 
						"Hera", "No one, she only has a father", "Metis"],["Daphne", "Juniper", "Miranda", "Artemis"],["Males", "Hunting", "Archery", "Females"],
						["Aphrodite", "Ares", "Dionysus", "Apollo"],["The Red Cross", "The RX", "The Cup of Hygieia", "The Caduceus"], ["Pig", "Peacock", "Sparrow", "Frog"], 
						["The Sirens", "The Minotaur", "The Pegasus", "The Hydra"], ["Athena", "Persephone", "Aphrodite", "Hera"], ["Aphrodite", "Hestia", "Zeus", "Dionysus"],
						["Cat", "Dog", "Gerbil", "Turtle"], ["Aphrodite", "Athena", "Hera", "Hestia"], ["Persephone", "Athena", "Demeter", "Hecate"], 
						["Prophecies", "Rainbows","Magic", "Music"]];

	var correctAnswer = ["Zeus", "Earthquakes", "Persephone", "Metis", "Daphne", "Males", "Aphrodite", "The Caduceus", "Peacock", "The Sirens", "Aphrodite", "Dionysus", "Dog",
						"Hestia", "Persephone", "Magic"];

	var imageArray = ["<img class='center-block img-right' src='assets/images/zeus.gif'>", "<img class='center-block img-right' src='assets/images/poseidon.gif'>", 
						"<img class='center-block img-right' src='assets/images/persephone2.gif'>", "<img class='center-block img-right' src='assets/images/athena.gif'>", 
						"<img class='center-block img-right' src='assets/images/daphne.gif'>", "<img class='center-block img-right' src='assets/images/artemis.gif'>", 
						"<img class='center-block img-right' src='assets/images/aphrodite.gif'>", "<img class='center-block img-right' src='assets/images/hermes.gif'>",
						"<img class='center-block img-right' src='assets/images/hera.gif'>", "<img class='center-block img-right' src='assets/images/sirens.gif'>",
						"<img class='center-block img-right' src='assets/images/aphrodite2.gif'>", "<img class='center-block img-right' src='assets/images/dionysus.gif'>",
						"<img class='center-block img-right' src='assets/images/scoobydoo.gif'>", "<img class='center-block img-right' src='assets/images/dionysus2.gif'>",
						"<img class='center-block img-right' src='assets/images/persephone.gif'>", "<img class='center-block img-right' src='assets/images/hecate.gif'>"];

	var questionIndex = 0;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0; 
	var timer;
	var countdown = 20;
	var userAnswer;
//=========================================================================================

$(document).ready(function(){

	//appending variables in generate function for start of game=======================
		
		function start() {

			generate();
			finalCountdown();
		}

		start();

	//creating on click functions================================
		
		$(".option").on("click", function() {

			userAnswer = $(this).text();

				if(userAnswer === correctAnswer[questionIndex]) {

					clearInterval(timer);
					win();
				}
				else {
				
					clearInterval(timer);
					lose();
				}

		}); // Closes options on click function

		$("#resetBtn").on("click", function() {

			resetTrivia();

		}); //closes reset on click function

}); //closes document.ready

//==============================================================================================

//creating game logic and various functions=====================================================

function generate() {

	$("#counter").html("Time Remaining: " + countdown);
	$("#triviaQ").html(questionArray[questionIndex]);
	$("#choice1").html(answerArray[questionIndex][0]);
	$("#choice2").html(answerArray[questionIndex][1]);
	$("#choice3").html(answerArray[questionIndex][2]);
	$("#choice4").html(answerArray[questionIndex][3]);
}

function win() {

	correct ++;
	$("#triviaQ").html( "<p class='winLoseScreen'>Correct! The answer is: " + correctAnswer[questionIndex] + "</p>" + imageArray[questionIndex]);
	setTimeout(nextQuestion, 4000);
}

function lose() {

	incorrect ++;
	$("#triviaQ").html( "<p class='winLoseScreen'>You're Wrong! The answer is: " + correctAnswer[questionIndex] + "</p>" + imageArray[questionIndex]);
	setTimeout(nextQuestion, 4000);
}

function timesUp() {

	unanswered++;
	$("#triviaQ").html("<p class='winLoseScreen'>Time's Up! The answer is: " + correctAnswer[questionIndex] + "</p>" + "<img class='center-block times-up-hades' src='assets/images/hades.gif'>");
	setTimeout(nextQuestion, 4000);
}

function nextQuestion() {

	if (questionIndex < 15) {

		questionIndex++;
		generate();
		countdown = 20;
		finalCountdown();
	}

	else {

		endGame();
	}
}

function finalCountdown() {

	timer = setInterval(questionTimer, 1000);

	function questionTimer() {

		if (countdown === 0) {
			clearInterval(timer);
			timesUp();
		}
		if (countdown > 0) {
			countdown--;
		}

		$("#counter").html("Time Remaining: " + countdown);
	}
}

function endGame() {

	$("#triviaQ").html("<p class='gameOver'>Your Final Score! Correctly Answered: " + correct + ", Incorrectly Answered: " + incorrect + ", Unanswered: " + unanswered + "</p>");
	$(".option").hide();
}

function resetTrivia() {

	questionIndex = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	countdown = 20;
	generate();
	finalCountdown();
}