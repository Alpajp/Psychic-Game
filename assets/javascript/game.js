var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var randomLetter;
var wins = 0;
var losses = 0;
var guessLeft = 9;

function reset() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log("random letter: ", randomLetter);
    $("#yourGuess").empty();
    guessLeft = 9;
    $("#guessesLeft").text(guessLeft);
}
$(document).ready(function () {

    reset();

    document.onkeyup = function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var userGuess = event.key.toUpperCase();
            $("#yourGuess").append(userGuess, " ");

            if (userGuess == randomLetter) {
                wins++;
                $("#wins").text(wins);
                reset();
            }

            if (condition) {
                
            }
        }
    }
});