import genPatternDeck from "./genPatternDeck";

export default function drawPattern(deck, card, number) {
  const newDeck = [...deck];
  const newCard = [...card];
  for (let i = 0; i < number; i++) {
    if (!deck.length) {
      deck = genPatternDeck(newCard);
    }
    newCard.push(deck.pop());
  }
  return { newDeck, newCard };
}
