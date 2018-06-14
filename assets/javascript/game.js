var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var userArray = [];
var compChoice = letters[Math.floor(Math.random() * letters.length)]

console.log(compChoice);


document.addEventListener("keydown", function (event) {
    var userGuess = event.key;
    userArray.push(userGuess);
    console.log(event)

    if (userGuess === compChoice) {
        wins++;

    }
    else {
        guesses--;
    }
    
    if (guesses === 0) {
        losses++ , guesses = 9;       
        userArray = [];
    }

    

    

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("lettersGuessed").innerHTML = userArray;


})

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;
document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
document.getElementById("lettersGuessed").innerHTML = userArray;

// for (i = 0; i < 11; i++) { //


