/*							
* Poject Titile: Table Quiz 2	
* Start Date: 27.05.2019 19:10   
* By: Marsid Zyberi			 								   	
*/

var num = 1;

function change_question() {

	var question = document.getElementById("question");
	question.innerHTML = "What shape are the orbits of most comets?";

	var image = document.getElementById("image");
	image.src = "img/comets.jpg";

	document.getElementById("question-counter").innerHTML = "Question: " + ++num;

	document.getElementById("button1").style.background = "white";
	document.getElementById("button2").style.background = "white";
	document.getElementById("button3").style.background = "white";
	document.getElementById("button4").style.background = "white";


}

function check1() {
	document.getElementById("button1").style.background = "#FF3A3A";
}

function check2() {
	document.getElementById("button1").style.background = "#FF3A3A";
	document.getElementById("button2").style.background = "#6EFF4A";
	document.getElementById("button3").style.background = "#FF3A3A";
	document.getElementById("button4").style.background = "#FF3A3A";
	setTimeout(change_question, 1000)
}

function check3() {
	document.getElementById("button3").style.background = "#FF3A3A"
}

function check4() {
	document.getElementById("button4").style.background = "#FF3A3A"
}