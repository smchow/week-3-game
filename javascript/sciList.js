var text =  '{ "scientists" :[{"name":"einstein","fname":"Einstein, Albert", "ach": "Theories of relativity and E = mc2", "url":"www.famousscientists.com/einstein"},'+
'{"name":"bell","fname":"Bell, Alexander Graham", "ach": "Inventor of the telephone", "url":"www.famousscientists.com/bell"},'+
'{"name":"Lovelace","fname":"Lovelace, Ada", "ach": "Mother of computing science", "url":"www.famousscientists.com/lovelace"},'+
'{"name":"curie","fname":"Curie, Marie", "ach": "Discoverer of elements. Radioactivity pioneer", "url":"www.famousscientists.com/curie"}]}';

				 
var obj = JSON.parse(text);

function addDetails(i){
	console.log("i = "+ i);
	document.getElementById("details").innerHTML =
	obj.scientists[i].fname + "<br>" +
	obj.scientists[i].ach + "<br>" +
	obj.scientists[i].url;
}

function getRandomName(){
	sci_ind = Math.floor(Math.random()*obj.scientists.length);
	var pickedWord = obj.scientists[sci_ind].name;
	console.log(pickedWord);
	options_list = pickedWord;
	console.log(sci_ind);
}