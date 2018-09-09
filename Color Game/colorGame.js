var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
/*var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");*/
init();

function init() {
	for (var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
			numSquares = 3
			} else {
			numSquares = 6
			}
			/*this.textContent ==== "Easy" ? numSquares = 3: numSquares = 6;*/
			reset();
		});
	}

	for(var i=0; i < square.length; i++) {
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;	
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}	

	reset();

}

resetButton.addEventListener("click", function() {
	/*colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i=0; i < colors.length; i++ ) {
		square[i].style.backgroundColor = colors[i];
		};
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors"*/
	reset();
})



function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < square.length; i++ ) {
		if (colors[i]) {
		square[i].style.display = "block";
		square[i].style.backgroundColor = colors[i];	
		} else {
		square[i].style.display = "none";
		}
	}
}

/*easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0;i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0;i <square.length; i++) {
		square[i].style.display = "block";
		square[i].style.backgroundColor = colors[i];
	}

});*/


function changeColors(color){
	for(var i=0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}	 
	 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}



function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to an array
	for(var i = 0; i < num; i ++) {
		//get random color and push into array
		arr.push(randomColor());
			//return an array
	}
	return arr;
	
}	

function randomColor() {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
