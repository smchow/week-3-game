var text =  '{ "scientists" :[{"name":"einstein","fname":"Einstein, Albert", "ach": "Theories of relativity and E = mc2", "url":"www.famousscientists.com/einstein"},'+
'{"name":"bell","fname":"Bell, Alexander Graham", "ach": "Inventor of the telephone", "url":"www.famousscientists.com/bell"},'+
'{"name":"lovelace","fname":"Lovelace, Ada", "ach": "Mother of computing science", "url":"www.famousscientists.com/lovelace"},'+
'{"name":"bohr", "fname":"Bohr, Niels", "ach": "Quantum mechanics & the atom"},'+
'{"name":"pythagoras", "fname":"Pythagoras", "ach": "The first rigorous mathematics"},'+
'{"name":"newton", "fname":"Newton, Isaac", "ach": "Gravity, light, the laws of motion and calculus"},'+	
'{"name":"Nobel", "fname":"Nobel, Alfred", "ach": "Invented dynamite and those prizes"},'+	 
'{"name":"Curie","fname":"Curie, Marie", "ach": "Discoverer of elements. Radioactivity pioneer", "url":"www.famousscientists.com/curie"}]}';

	//	'{"name":"", "fname":"", "ach": ""},'+		 
var obj = JSON.parse(text);

/*function addDetails(i){
	console.log("i = "+ i);
	document.getElementById("details").innerHTML =
	obj.scientists[i].name + "<br>" +
	obj.scientists[i].ach + "<br>" +
	obj.scientists[i].url;
}*/
/* 
**Generate a random number and 
**Return the scientist at that position from the JSON
*/
function getRandomName(){
	sci_ind = Math.floor(Math.random()*obj.scientists.length);
	sci = obj.scientists[sci_ind];
	var pickedSci = new scientist(sci.name, sci.ach, sci.url);
	return pickedSci;
}

function scientist(name, ach,url) {
  this.name = name.toLowerCase();
  this.ach = ach;
  this.guesses = [];
  this.guessCorrect = false;
  this.numGuesses = 10;
  this.addDetails = function () {
    return "Name: " +
           this.name +
           " Famous for " +
           this.ach;
  };

  this.getPartWord = function(){
      			dispWord ="";
      			wordarr = this.name;
      			console.log(this.guesses);

      			for(i=0; i< wordarr.length; i++){
      					
      					if (this.guesses.indexOf(wordarr[i]) > -1){

      						dispWord = dispWord + wordarr[i] ;
      					}else{
      						dispWord = dispWord + "- ";
      					}
      					
      			}
            	console.log(wordarr + "**" + dispWord);
            	if (wordarr==dispWord){
            		this.changeStatus();
      			}
      			return dispWord;
      };

   this.newGuess = function(key){

   	  this.guesses.push(key);
   	  console.log("In new Guess" )
   	  if(this.name.indexOf(key) <0) {
              this.numGuesses--;
        }
       if (this.numGuesses <= 0){
       			this.guessCorrect = false;
       			console.log("You Lost");
       			losses++;
       			this.displayDetails();
       }
   }

   this.changeStatus = function(){
   			this.guessCorrect = true;
      		console.log("You won" + this.guessCorrect);
      		wins++;
      		this.displayDetails();
   }

  this.displayDetails = function(){
  		details.innerHTML = "<br/>" + this.name + "<br/>" +  this.ach;
  }

}
