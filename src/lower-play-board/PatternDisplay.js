export default function PatternDisplay(props) {
  const patternCards = props.patternCard;
  const patternCardsDisplay = [
    <div className="pattern-card" key={1}>
      1
    </div>,
    <div className="pattern-card" key={2}>
      2
    </div>,
    <div className="pattern-card" key={3}></div>,
    <div className="pattern-card" key={4}></div>,
  ];

  return <div className="pattern-display">{patternCardsDisplay}</div>;
}
