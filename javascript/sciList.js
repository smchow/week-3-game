
/* Creating scientist object and all related methods*/
function scientist(name, ach, fname, url) {
  this.name = name.toLowerCase();
  this.ach = ach;
  this.fname = fname;
  this.url = url;
  this.guesses = [];
  this.guessCorrect = false;
  this.numGuesses = 10;
  this.imgFile = "./images/"+this.name + ".jpg";
  this.error = " ";


  /* The user has entered a letter . So start playing and give feedback to the user*/
    this.playGame =  function(key){
      //console.log("Should I continue" + this.guessCorrect + "Guesses = "  + this.numGuesses);
      if (this.numGuesses > 0 && !(this.guessCorrect) ){
            this.newGuess(key);
          	display.innerHTML = this.getPartWord() + "<br/> <br/>Your Letter Guesses: " + this.guesses + 
                                "<br/><br/> You have " +  + this.numGuesses + " guesses remaining!";
            gameStatus.innerHTML = "<br/> # of Correct Guesses : " + wins + "<br/> # of Incorrect Guesses : " + 
                            losses + "<br/>" + this.error;
     		}
 		};

    /*Update the guesses array and total number of guesses variable.
      Check if the user has exceeded the number of guesses and determine
      if they have lost. Win logic in getPartWord() */
   this.newGuess = function(key){
   	  if (key==""){
   	  		return;
   	  }else if(this.guesses.indexOf(key) < 0){
   	  		this.guesses.push(key);
   	  		this.error = " ";
   	  } else{
   	  		this.error = "You have alreary picked this letter. Guess again";
   	  		return;
   	  }
   	  
   	  if(this.name.indexOf(key) <0) {
              this.numGuesses--;
        }
       if (this.numGuesses <= 0){
       			this.guessCorrect = false;
       			console.log("You Lost");
       			losses++;
       			this.toggleDetails();
       }
   }

   /* Check which letters have been guessed correctly and display the partially completed
     word on the screen. Check if the player has won in the end*/
  this.getPartWord = function(){
            dispWord ="";
            wordarr = this.name;

            for(i = 0; i < wordarr.length; i++){          
                if (this.guesses.indexOf(wordarr[i]) > -1){

                  dispWord = dispWord + wordarr[i] ;
                }else{
                  dispWord = dispWord + "- ";
                }       
            }
              if (wordarr==dispWord){
                this.whenCorrect();
            }
            return dispWord;
      };


   /* When the user guesses the correct word increment number of wins
   */
   this.whenCorrect = function(){
   			this.guessCorrect = true;
      		wins++;
      		this.toggleDetails();
   }

    /* Checks user input, only allows a-z or A-Z
    */
   this.chkInput = function(event){ 
       if(event.which >= 65 && event.which <=122){  
          	return true;  
         } else {   
         	return false;  
         }  
      }


  /* Display some extra details about the scientist.
  Called once the word has been guessed or user has used up all guesses.*/
  this.toggleDetails = function () {
    display.innerHTML =  "";
    var msg = "";
    if(this.guessCorrect) 
      msg = "You rock! ";
    else
      msg = "Oops! You couldn't guess the scientist! ";

    details.innerHTML =  msg +
           "<br/><img class='detailImg' src='" + this.imgFile + "'</img>"  + "<br/>Name: " +
           this.fname + "<br/>Famous for: " + this.ach ;
           // +"<br/>For more information " +
           //'<a href="'+this.url+'" target="_blank">click here.</a>'
  };
  
}// End tag - scientist object


var text =  '{ "scientists" :[{"name":"einstein","fname":"Einstein, Albert", "ach": "Theories of relativity and E = mc2", "url":"www.famousscientists.com/einstein/"},'+
'{"name":"bell","fname":"Bell, Alexander Graham", "ach": "Invention of the telephone", "url":"www.famousscientists.com/bell/"},'+
'{"name":"lovelace","fname":"Lovelace, Ada", "ach": "Pioneer/Mother of computing science", "url":"http://www.famousscientists.org/ada-lovelace/"},'+
'{"name":"bohr", "fname":"Bohr, Niels", "ach": "Quantum mechanics & the atom", "url":"http://www.famousscientists.org/niels-bohr/"},'+
'{"name":"pythagoras", "fname":"Pythagoras", "ach": "Pythagorean theorem.  Philosopher and mathematician", "url":"www.famousscientists.com/pythagoras/"},'+
'{"name":"newton", "fname":"Newton, Isaac", "ach": "The laws of motion and gravity. Theory of color. Calculus.", "url":"http://www.famousscientists.org/isaac-newton/"},'+  
'{"name":"Nobel", "fname":"Nobel, Alfred", "ach": "Invention of dynamite and those prizes", "url":"http://www.famousscientists.org/alfred-nobel/"},'+  
'{"name":"Curie","fname":"Curie, Marie", "ach": "Discovery of elements. Radioactivity pioneer", "url":"www.famousscientists.com/curie/"}]}';
//  '{"name":"", "fname":"", "ach": ""},'+    


var obj = JSON.parse(text);
/* 
**Generate a random number and 
**Return the scientist at that position from the JSON
*/
function getRandomName(){
  sci_ind = Math.floor(Math.random()*obj.scientists.length);
  sci = obj.scientists[sci_ind];
  var pickedSci = new scientist(sci.name, sci.ach, sci.fname, sci.url);
  return pickedSci;
}
