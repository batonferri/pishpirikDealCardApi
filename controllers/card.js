import { convertArray1dToArray2d } from "../helper/convert.js";
import { shuffle } from "../helper/shuffle.js";

export const card = (req, res) => {
  const suits = ["hearts", "spades", "clubs", "diamonds"];

  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const deckOfCards = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      deckOfCards.push({ suit: suits[i], number: numbers[j] });
    }
  }

  const cardsShuffled = shuffle(deckOfCards);

  const cards = {
    middleCards: cardsShuffled.splice(0, 4),
    playerOneCards: convertArray1dToArray2d(cardsShuffled.splice(0, 24), 6, 4),
    playerTwoCards: convertArray1dToArray2d(cardsShuffled, 6, 4),
  };

  return res.status(200).json(cards);
};
