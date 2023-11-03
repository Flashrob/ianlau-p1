export default function darwPattern(deck, number, handleDrawPattern) {
  const card = [];
  for (let i = 0; i < number; i++) {
    card.push(deck.pop());
  }
  handleDrawPattern(deck, card);
}
