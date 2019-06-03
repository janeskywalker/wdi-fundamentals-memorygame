



const cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []

function checkForMatch() {

	if(cardsInPlay.length ===2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again")
		}
	}
}


function flipCard(cardsId) {

	console.log("User flipped " + cards[cardsId])

	cardsInPlay.push(cards[cardsId])

	checkForMatch()

}

flipCard(3)
flipCard(2)


