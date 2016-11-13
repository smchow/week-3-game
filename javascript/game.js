var wins = 0;
var losses = 0;
var ties = 0;
var guesses = [];

document.onkeyup = function(event){
	var key = event.key;
	document.write("Welcome to Guess the Scientist!<br/>" + key );
	console.log(key );
}
