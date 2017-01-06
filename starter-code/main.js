console.log("JS file is connected to HTML! Woo!")


//defining cards

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//lmao check shit

// if (cardTwo == cardFour) {
// 	alert("You've found a match lmao!")
// } else {
// 	alert("Sorry lmao try again!")
// }

function isMatch(cardArray) {
	if (cardArray[0] === cardArray[1]) {
		alert("You've found a match!")
	} else {
		alert("Sorry try again!")
	}

	document.querySelectorAll("card").innerHTML = "";
}

function isTwoCards(cardType) {
	// add card to array of cards in play
	// 'this' hasn't been covered in this prework, but
	// for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(cardType);

	// if you have two cards in play check for a match
	if (cardsInPlay.length === 2) {

		// pass the cardsInPlay as an argument to isMatch function
		isMatch(cardsInPlay);

		// clear cards in play array for next try
		cardsInPlay = [];
	}
}

function cardClick() {
	var cardType = this.getAttribute('data-card')
	if (cardType === "king") {
		this.innerHTML = '<img src="king.png" alt="King of Diamonds" />';
		isTwoCards(cardType);
	} else if (cardType === "queen") {
		this.innerHTML = '<img src="queen.png" alt="Queen of Clubs" />';
		isTwoCards(cardType);
	} else {
		alert("Error: card has no value!");
	}
	
}

function createCards() {
	var board = document.getElementById("game-board")

	for (var i = 0; i <= 3; i++) {
		var cardElement = document.createElement('div');

		//set properties of new div
		cardElement.className = "card";
		cardElement.setAttribute("data-card", cards[i]);
		cardElement.addEventListener('click', cardClick);

		//append cards to board
		board.append(cardElement);
	}
}

createCards();