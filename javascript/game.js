	

	function startNewGame(){
		console.log("start new startNewGame");
		guesses = [];

	}	

      /*   */

      function displayResults(word, disp, k, guesses){
        var string = '<p>' + disp + '</p>';
        string += '<p>User chose: ' + k + '<p>';
        string += '<p>Wins: ' + wins; + '</p>';
        string += '<p>Losses: ' + losses; + '</p>';
        string += '<p>Your Guesses: ' + guesses ; + '</p>';
        string += '<p>Number of Guesses used: ' + incorrect + ' of 10</p>';
        won = hasWon(disp);
   		console.log(" hasWon " + won);
        if (won){
          		string += '<p>You won</p>';
          		addDetails();
          		//startNewGame();
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
            console.log(wordarr + "**" + dispWord);
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


function removeDetails(){
  document.getElementById("details").innerHTML = "";
}

    function playGame(key, myScientist){
    	
      
      
        var options  = myScientist.name;
    	 if ( guesses.length == 0 && key == 'y'){
          		var disp = getPartWord(options);
   				displayResults(options, disp, "", guesses);
   				removeDetails();
          // } else if(guesses.length == 0 && key != 'y'){
          // 		display.innerHTML = "See you next time.";

          }else if (guesses.length < 10 && !won){
            guesses.push(key); //update the user guesses
            if(myScientist.name.indexOf(key) <0) {
              incorrect++;
            }
            console.log(key + "Update **" +myScientist.name.indexOf(key)+ "Update **" + myScientist.name);
   			    var disp = getPartWord(options);
   			    displayResults(options, disp, key, guesses);
   			
          } else if(guesses.length >= 10){
            display.innerHTML = "You Lost";
            losses++;
            //startNewGame();
            addDetails(sci_ind);
          } else{
            displayResults(options, disp, "", guesses);
            addDetails(sci_ind);
          }
    }


      
