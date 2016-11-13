	function startNewGame(){
		console.log("start new startNewGame");
		guesses = [];
	}	

      /*   */

      function displayResults(word, disp, k, guesses){
        var string = '<p>' + disp + '</p>';
        string += '<p>User chose: ' + k + '<p>';
        string += '<p>Wins: ' + wins; + '</p>';
        string += '<p>Your Guesses: ' + guesses ; + '</p>';
        string += '<p>Number of Guesses used: ' + guesses.length + ' of 10</p>';
        won = hasWon(disp);
   		console.log(" hasWon " + won);
        if (won){
          		string += '<p>You won</p>';
          	} else {
          		string += '<p>Guess the next letter</p>';
          	}
        display.innerHTML = string;
      }

      /* 
      */

      function getPartWord(wordarr){
      			dispWord ="";
      			for(i=0; i< wordarr.length; i++){
      					
      					if (guesses.indexOf(wordarr[i]) > -1){

      						dispWord = dispWord + wordarr[i] + " ";
      					}else{
      						dispWord = dispWord + "- ";
      					}
      					
      			}
      			console.log(dispWord);
      			return dispWord;
      }

      function hasWon(dispWord){
      	console.log(dispWord.indexOf("-"));
      	if (dispWord.indexOf("-") > -1){
      		return false;
      	}else{
      		wins++;
      		return true;
      	}
      }



      
