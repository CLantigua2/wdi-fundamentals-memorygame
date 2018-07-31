// create variables that represent cards
const cards = [{
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
    cardImage: "images/queen-of-diamonds.png"
  }
];


let cardsInPlay = []; //stores cards user flipped

//hold selected cards and give feedback to user
let flipCard = function (cardId) {
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
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