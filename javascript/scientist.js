var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';
var text = '{"name":"Einstein, Albert", "ach": "Theories of relativity and E = mc2", "url":"www.famousscientists.com"}';

var obj = JSON.parse(text);

function addDetails(){
	document.getElementById("details").innerHTML =
	obj.name + "<br>" +
	obj.ach + "<br>" +
	obj.url;

}
