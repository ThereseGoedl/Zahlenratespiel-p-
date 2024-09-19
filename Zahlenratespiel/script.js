var inputGuess = document.getElementById("inputGuess");
var outputResult = document.getElementById("outputResult");
var outputCount = document.getElementById("outputCount");
		
var number, count;
number = Math.floor(Math.random() * 100);
count = 0;

function checkNumber() {
var guess = parseInt(inputGuess.value);	


if (guess < number)
outputResult.innerHTML  = "Ups, deine Zahl ist zu niedrig!";
else if (guess > number)
outputResult.innerHTML  = "Ups, deine Zahl ist zu hoch.";
else if (guess == number)
outputResult.innerHTML  = "Richtig!";		

count = count + 1;
outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht."; }

function newGame() {
number = Math.floor(Math.random() * 100);
count = 0;

inputGuess.value = "";
outputResult.innerHTML = "";
outputCount.innerHTML = "";
}
