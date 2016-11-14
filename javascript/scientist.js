
var text = '{"name":"Einstein, Albert", "ach": "Theories of relativity and E = mc2", "url":"www.famousscientists.com/einstein"}';

				//  '{
				// "name":"Copernicus, Nicolaus", 
				// "ach": " Started the scientific revolution", 
				//  "url":"www.famousscientists.com/einstein"}'
				 
var obj = JSON.parse(text);

function addDetails(){
	document.getElementById("details").innerHTML =
	obj.name + "<br>" +
	obj.ach + "<br>" +
	obj.url;

}

function removeDetails(){
	document.getElementById("details").innerHTML = "";
}