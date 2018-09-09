let secretNumber = 4

let guess = prompt("Guess a number")

if (guess==secretNumber) {
	alert("You Got it Right")
}

else if (guess<secretNumber) {
	alert("Guess Higher")
}

else {
	alert("Guess Lower")}
