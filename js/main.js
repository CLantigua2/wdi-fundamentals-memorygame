// create variables that represent cards
const cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];
cardsInPlay.push(cardOne);
console.log("The user just flipped " + cardOne);
cardsInPlay.push(cardTwo);
console.log("The user just flipped " + cardOne);




if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {
    alert(`You matched ${cardOne} with ${cardTwo}!!`);
  } else {
    alert("Sorry, try again");
  }
}