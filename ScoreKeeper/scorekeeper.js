var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var win = document.getElementById("winscore")
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
document.getElementById("winningScoreDisplay").innerHTML = winningScore;


p1.addEventListener("click", function() {
	if(!gameOver){
	p1score++;
	if (p1score === winningScore){
		p1Display.classList.add("winner")
		gameOver=true;
	}
	p1Display.textContent = p1score;
	}
});

p2.addEventListener("click", function() {
	if(!gameOver){
	p2score++;
	if (p2score === winningScore){
		p2Display.classList.add("winner")
		gameOver=true;
	}
	p2Display.textContent = p2score;
	}
});

reset.addEventListener("click", function(){
	p1score = 0;
	p1Display.textContent = 0;
	p2score = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
});

function reset() {
	p1score = 0;
	p1Display.textContent = 0;
	p2score = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};

win.addEventListener("click", function(){
	var newScore = prompt("What are we playing to?");
	Number(newScore);
	newScore = Number(newScore);
	winningScoreDisplay.textContent = newScore;
	winningScore = newScore;
	p1score = 0;
	p1Display.textContent = 0;
	p2score = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;	
});

