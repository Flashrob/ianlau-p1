export default function PatternDisplay(props) {
  const patternCards = props.patternCard;
  const patternCardsDisplay = [
    <div className="pattern-card">1</div>,
    <div className="pattern-card">2</div>,
    <div className="pattern-card">3</div>,
    <div className="pattern-card">4</div>,
  ];

  return <div className="pattern-display">{patternCardsDisplay}</div>;
}
