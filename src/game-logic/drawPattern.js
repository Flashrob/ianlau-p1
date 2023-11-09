import genPatternDeck from "./genPatternDeck";

export default function drawPattern(deck, card, number) {
  const newDeck = [...deck];
  const newCard = [...card];
  for (let i = 0; i < number; i++) {
    if (!newDeck.length) {
      newDeck = genPatternDeck(newCard);
    }
    newCard.push(newDeck.pop());
  }
  return { newDeck, newCard };
}
