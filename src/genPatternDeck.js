export default function genPatternDeck(exception) {
  const deck = [];

  for (let i = 0; i < 10; i++) {
    if (!exception.includes(`pattern${i}`)) {
      deck.push(`pattern${i}`);
    }
  }
  return deck;
}
