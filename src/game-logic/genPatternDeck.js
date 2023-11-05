export default function genPatternDeck(exception) {
  const deck = [];

  for (let i = 0; i < 10; i++) {
    if (!exception.includes(`pattern${i}`)) {
      deck.push(`pattern${i}`);
    }
  }
  for (let i = 0; i < deck.length; i++) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  return [...deck];
}
