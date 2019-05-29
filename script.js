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


/*function check_for_right_answer() {
	
}*/

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

function check1() {
	for (var i = 1; i <= 11; i++) {
		if ((window["ques" + i]) === ques1) {
			if (document.getElementById("button1").textContent == q1a1) {
				document.getElementById("button1").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques2) {
			if (document.getElementById("button1").textContent == q2a1) {
				document.getElementById("button1").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques3) {
			if (document.getElementById("button1").textContent == q3a1) {
				document.getElementById("button1").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques4) {
			if (document.getElementById("button1").textContent == q4a1) {
				document.getElementById("button1").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques5) {
			if (document.getElementById("button1").textContent == q5a1) {
				document.getElementById("button1").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques6) {
			if (document.getElementById("button1").textContent == q6a1) {
				document.getElementById("button1").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques7) {
			if (document.getElementById("button1").textContent == q7a1) {
				document.getElementById("button1").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques8) {
			if (document.getElementById("button1").textContent == q8a1) {
				document.getElementById("button1").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques9) {
			if (document.getElementById("button1").textContent == q9a1) {
				document.getElementById("button1").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques10) {
			if (document.getElementById("button1").textContent == q10a1) {
				document.getElementById("button1").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques11) {
			if (document.getElementById("button1").textContent == q11a1) {
				document.getElementById("button1").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		}
	}
}

function check2() {
	for (var i = 1; i <= 11; i++) {
		if (document.getElementById("question").textContent == "Are you ready to start?") {
			if (document.getElementById("button2").textContent == "Yes") {
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#6EFF4A";
				document.getElementById("button3").style.background = "#6EFF4A";
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				setTimeout(change_question, 1000);
				break;
			} 	
		} else if ((window["ques" + i]) === ques1) {
			if (document.getElementById("button2").textContent == q1a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			} 
		} else if ((window["ques" + i]) === ques2) {
			if (document.getElementById("button2").textContent == q2a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques3) {
			if (document.getElementById("button2").textContent == q3a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques4) {
			if (document.getElementById("button2").textContent == q4a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques5) {
			if (document.getElementById("button2").textContent == q5a2) {
				document.getElementById("button2").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques6) {
			if (document.getElementById("button2").textContent == q6a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques7) {
			if (document.getElementById("button2").textContent == q7a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques8) {
			if (document.getElementById("button2").textContent == q8a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques9) {
			if (document.getElementById("button2").textContent == q9a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques10) {
			if (document.getElementById("button2").textContent == q10a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques11) {
			if (document.getElementById("button2").textContent == q11a2) {
				document.getElementById("button2").style.background = "#FF3A3A";
				break;
			}
		} 
	}
}

function check3() {
	for (var i = 1; i <= 11; i++) {
		if (document.getElementById("question").textContent == "Are you ready to start?") {
			if (document.getElementById("button2").textContent == "Yes") {
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#6EFF4A";
				document.getElementById("button3").style.background = "#6EFF4A";
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				setTimeout(change_question, 1000);
				break;
			} 	
		} else if ((window["ques" + i]) === ques1) {
			if (document.getElementById("button3").textContent == q1a3) {
				document.getElementById("button3").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			} 
		} else if ((window["ques" + i]) === ques2) {
			if (document.getElementById("button3").textContent == q2a3) {
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques3) {
			if (document.getElementById("button3").textContent == q3a3) {
				document.getElementById("button3").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques4) {
			if (document.getElementById("button3").textContent == q4a3) {
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques5) {
			if (document.getElementById("button3").textContent == q5a3) {
				document.getElementById("button3").style.background = "#6EFF4A";
			}
		} else if ((window["ques" + i]) === ques6) {
			if (document.getElementById("button3").textContent == q6a3) {
				document.getElementById("button3").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques7) {
			if (document.getElementById("button3").textContent == q7a3) {
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques8) {
			if (document.getElementById("button3").textContent == q8a3) {
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques9) {
			if (document.getElementById("button3").textContent == q9a3) {
				document.getElementById("button3").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques10) {
			if (document.getElementById("button3").textContent == q10a3) {
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques11) {
			if (document.getElementById("button3").textContent == q11a3) {
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} 
	}
}

function check4() {
	for (var i = 1; i <= 11; i++) {
		if ((window["ques" + i]) === ques1) {
			if (document.getElementById("button4").textContent == q1a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			} 
		} else if ((window["ques" + i]) === ques2) {
			if (document.getElementById("button4").textContent == q2a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques3) {
			if (document.getElementById("button4").textContent == q3a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques4) {
			if (document.getElementById("button4").textContent == q4a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques5) {
			if (document.getElementById("button4").textContent == q5a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques6) {
			if (document.getElementById("button4").textContent == q6a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques7) {
			if (document.getElementById("button4").textContent == q7a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques8) {
			if (document.getElementById("button4").textContent == q8a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques9) {
			if (document.getElementById("button4").textContent == q9a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques10) {
			if (document.getElementById("button4").textContent == q10a4) {
				document.getElementById("button4").style.background = "#6EFF4A";
				setTimeout(change_question, 1000);
				document.getElementById("button1").style.background = "#FF3A3A";
				document.getElementById("button2").style.background = "#FF3A3A";
				document.getElementById("button3").style.background = "#FF3A3A";
				break;
			}
		} else if ((window["ques" + i]) === ques11) {
			if (document.getElementById("button4").textContent == q11a4) {
				document.getElementById("button4").style.background = "#FF3A3A";
				break;
			}
		} 
	}
}