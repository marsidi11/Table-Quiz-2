/*							
* Poject Titile: Table Quiz 2	
* Start Date: 27.05.2019 19:10   
* By: Marsid Zyberi			 								   	
*/

// ques1 => Question 1
// q1a1 => Question 1 Answer 1

// #FF3A3A => Wrong
// #6EFF4A => Right

var num = 1;
var n = 0;
// Questions

var ques1 = "Where was the Great Pyramid of Giza built?",
	q1a1 = "Nigeria",
	q1a2 = "Ghana",
	q1a3 = "Egypy", // C
	q1a4 = "Zambia"

var ques2 = "What shape are the orbits of most comets?",
	q2a1 = "Ellipse", // C
	q2a2 = "Square",
	q2a3 = "Circle",
	q2a4 = "Triangle"

var ques3 = "How many minutes is a rugby match?",
	q3a1 = "60 min",
	q3a2 = "70 min",
	q3a3 = "80 min", // C
	q3a4 = "100 min"

var ques4 = "How many players are on each side of the net in beach volleyball?",
	q4a1 = "2 Players", // C
	q4a2 = "3 Players",
	q4a3 = "4 Players",
	q4a4 = "1 Player"

var ques5 = "Which car won Fernando Alonso his first tittle in Formula 1 with?",
	q5a1 = "Ferrari",
	q5a2 = "Renault", // C
	q5a3 = "Mercedes",
	q5a4 = "Alfa Romeo"

var ques6 = "What is the name of the Barcelona football stadium?",
	q6a1 = "Park Güell",
	q6a2 = "Casa Batlló",
	q6a3 = "Camp Nou", // C
	q6a4 = "Allianz Arena"

var ques7 = "Who invented Ferrari?"
	q7a1 = "Enzo Ferrari", // C
	q7a2 = "Felippe Ferrari",
	q7a3 = "Lewis Ferrari",
	q7a4 = "Michael Ferrari"

var ques8 = "How long is the Great Wall of China?",
	q8a1 = "4000 miles", // C
	q8a2 = "3750 miles",
	q8a3 = "4500 miles",
	q8a4 = "7000 miles"

var ques9 = "What is the largest number of five digits?",
	q9a1 = "19999",
	q9a2 = "10999",
	q9a3 = "99999", // C
	q9a4 = "99990"

var ques10 = "Who was the first president of the USA?",
	q10a1 = "John Adams",
	q10a2 = "Thomas Jefferson",
	q10a3 = "Barac Obama",
	q10a4 = "George Washington" // C

var ques11 = "Which country sent its navy around the world to fight the Japanese in 1904?",
	q11a1 = "Russia", // C
	q11a2 = "Germany", 
	q11a3 = "USA", 
	q11a4 = "Italy"

// Random Numbers for Display Questions and Images

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var m = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[m]] = [arr[m], arr[i]];
	}
}

var question_list = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10, ques11];

var ques_num = [1,2,3,4,5,6,7,8,9,10,11];

shuffle(ques_num);


function change_question() {

	var question = document.getElementById("question");
	question.innerHTML = question_list[ques_num[n] - 1];

	img_num = ques_num[n];	
	console.log(img_num);

	var image = document.getElementById("image");
	image.src = "img/ques" + img_num + ".jpg";
	++n;

	document.getElementById("question-counter").innerHTML = "Question: " + ++num;

	document.getElementById("button1").style.background = "white";
	document.getElementById("button2").style.background = "white";
	document.getElementById("button3").style.background = "white";
	document.getElementById("button4").style.background = "white";

	document.getElementById("button1").innerHTML = window["q" + img_num + "a1"];
	document.getElementById("button2").innerHTML = window["q" + img_num + "a2"];
	document.getElementById("button3").innerHTML = window["q" + img_num + "a3"];
	document.getElementById("button4").innerHTML = window["q" + img_num + "a4"];

}

function qq1() {
	if (document.getElementById("question").textContent == ques1) {
		document.getElementById("button1").style.background = "#FF3A3A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#6EFF4A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq2() {
	if (document.getElementById("question").textContent == ques2) {
		document.getElementById("button1").style.background = "#6EFF4A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq3() {
	if (document.getElementById("question").textContent == ques3) {
		document.getElementById("button1").style.background = "#FF3A3A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#6EFF4A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq4() {
	if (document.getElementById("question").textContent == ques4) {
		document.getElementById("button1").style.background = "#6EFF4A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq5() {
	if (document.getElementById("question").textContent == ques5) {
		document.getElementById("button1").style.background = "#FF3A3A";
		document.getElementById("button2").style.background = "#6EFF4A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq6() {
	if (document.getElementById("question").textContent == ques6) {
		document.getElementById("button1").style.background = "#FF3A3A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#6EFF4A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq7() {
	if (document.getElementById("question").textContent == ques7) {
		document.getElementById("button1").style.background = "#6EFF4A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq8() {
	if (document.getElementById("question").textContent == ques8) {
		document.getElementById("button1").style.background = "#6EFF4A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq9() {
	if (document.getElementById("question").textContent == ques9) {
		document.getElementById("button1").style.background = "#FF3A3A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#6EFF4A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function qq10() {
	if (document.getElementById("question").textContent == ques10) {
		document.getElementById("button1").style.background = "#FF3A3A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#6EFF4A";
		setTimeout(change_question, 1300);
	}
}
function qq11() {
	if (document.getElementById("question").textContent == ques11) {
		document.getElementById("button1").style.background = "#6EFF4A";
		document.getElementById("button2").style.background = "#FF3A3A";
		document.getElementById("button3").style.background = "#FF3A3A";
		document.getElementById("button4").style.background = "#FF3A3A";
		setTimeout(change_question, 1300);
	}
}
function check1() {
	qq1(); qq2(); qq3(); qq4(); qq5(); qq6(); qq7(); qq8(); qq9(); qq10(); qq11();
}

function check2() {
	if (document.getElementById("question").textContent == "Are you ready to start?") {
		if (document.getElementById("button2").textContent == "Yes") {
			document.getElementById("button1").style.background = "#FF3A3A";
			document.getElementById("button2").style.background = "#6EFF4A";
			document.getElementById("button3").style.background = "#6EFF4A";
			document.getElementById("button4").style.background = "#FF3A3A";
			setTimeout(change_question, 1300);
		}
	}
	qq1(); qq2(); qq3(); qq4(); qq5(); qq6(); qq7(); qq8(); qq9(); qq10(); qq11();
}

function check3() {
	if (document.getElementById("question").textContent == "Are you ready to start?") {
		if (document.getElementById("button2").textContent == "Yes") {
			document.getElementById("button1").style.background = "#FF3A3A";
			document.getElementById("button2").style.background = "#6EFF4A";
			document.getElementById("button3").style.background = "#6EFF4A";
			document.getElementById("button4").style.background = "#FF3A3A";
			setTimeout(change_question, 1300);
		}
	}
	qq1(); qq2(); qq3(); qq4(); qq5(); qq6(); qq7(); qq8(); qq9(); qq10(); qq11();
}

function check4() {
	qq1(); qq2(); qq3(); qq4(); qq5(); qq6(); qq7(); qq8(); qq9(); qq10(); qq11();
}