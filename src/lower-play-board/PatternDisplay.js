export default function PatternDisplay(props) {
  const patternCards = props.patternCard;
  const patternCardsDisplay = patternCards.map((card) => (
    <button className="pattern-card" key={card}>
      <img src={require(`./PatternIcon/${card}.jpg`)} alt={card} />
    </button>
  ));

  return <div className="pattern-display">{patternCardsDisplay}</div>;
}
