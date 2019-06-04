


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

// storing flipped cards
var cardsInPlay = []

// check for match of the two flipped cards in the cardsInPlay array  
function checkForMatch() {

	if(cardsInPlay.length ===2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again")
		}
	}
}

// after user flip two cards, push them into the cardsInPlay array, call checkForMatch
function flipCard(cardsId) {

	console.log("User flipped " + cards[cardsId].rank)

	console.log(cards[cardsId].cardImage)
	console.log(cards[cardsId].suit)

	cardsInPlay.push(cards[cardsId].rank)

	checkForMatch()

}

// user flip cards, calling flipCard
flipCard(1)
flipCard(2)


