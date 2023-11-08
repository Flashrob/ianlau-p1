import React from "react";

export default class PatternDisplay extends React.Component {
  handleClick = (e) => {
    const { handleSelectPattern, selectedElement } = this.props;
    let pattern = e.currentTarget.value;
    if (pattern === selectedElement) {
      pattern = "";
    }
    handleSelectPattern(pattern);
  };
  render() {
    const { patternCard, selectedElement, popUpMessage, tutorial } = this.props;
    const patternCardsDisplay = patternCard.map((card) => (
      <button
        className={selectedElement === card ? "selected-card" : "pattern-card"}
        key={card}
        value={card}
        onClick={this.handleClick}
        disabled={
          !(
            (selectedElement === card || selectedElement === "") &&
            !popUpMessage &&
            (tutorial === 0 || (tutorial === 29 && card === "pattern3"))
          )
        }
      >
        <img src={require(`./PatternIcon/${card}.jpg`)} alt={card} />
      </button>
    ));

    return <div className="pattern-display">{patternCardsDisplay}</div>;
  }
}
