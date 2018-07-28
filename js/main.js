// create variables that represent cards
const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = []; //stores cards user flipped

//hold selected cards and give feedback to user
let flipCard = function (cardId) {
  cardsInPlay.push(cards[cardId]);
  console.log("User flipped " + cards[cardId]);
};

let checkForMatch = function () { //Check if 2 cards have been selected
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert(`You matched ${cardsInPlay[0]} with ${cardsInPlay[1]}!!`);
  } else {
    //if they don't match
    alert("Sorry, try again");
  }
};

//call yourCard function
flipCard(0);
flipCard(3);
checkForMatch();
console.log(cardsInPlay);