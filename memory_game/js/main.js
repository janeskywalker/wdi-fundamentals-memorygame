


// array that store data of the cards
//const cards = ["queen", "queen", "king", "king"]
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	}, 

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}, 
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}, 

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}, 
]



// function resetGame() {
// 	createBoard()
// }


// storing flipped cards
var cardsInPlay = []

// check for match of the two flipped cards in the cardsInPlay array  
function checkForMatch() {

		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again")
		}

		// const resetBtn = document.createElement('button')
		// resetBtn.innerText = "reset"
		// console.log(resetBtn)

		// const resetP = document.querySelector('#resetBtn')
		// console.log(resetP)

		// resetP.appendChild(resetBtn)

		// resetBtn.addEventListener('click', resetGame)

}


// after user flip two cards, push them into the cardsInPlay array, call checkForMatch
function flipCard() {

	console.log('clicked')

	console.log(this.getAttribute("data-id"))
	var cardsId = this.getAttribute("data-id")

	console.log("User flipped " + cards[cardsId].rank)

	console.log(cards[cardsId].cardImage)
	console.log(cards[cardsId].suit)

	console.log('this:', this)
	this.setAttribute("src", cards[cardsId].cardImage)

	cardsInPlay.push(cards[cardsId].rank)
	console.log(cardsInPlay)


	if(cardsInPlay.length ===2) {
		checkForMatch()

	}


}





function createBoard() {

	const gameboard = document.querySelector('#game-board')

	for(var i = 0; i < cards.length; i ++) {

		var cardElement = document.createElement("img");

		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);

		cardElement.addEventListener("click", flipCard)

		gameboard.appendChild(cardElement)

	}
}

createBoard()




