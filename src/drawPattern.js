import genPatternDeck from "./genPatternDeck";

export default function drawPattern(deck, card, number, handleDrawPattern) {
  for (let i = 0; i < number; i++) {
    if (!deck.length) {
      genPatternDeck(card);
    }
    card.push(deck.pop());
  }
  handleDrawPattern(deck, card);
}
