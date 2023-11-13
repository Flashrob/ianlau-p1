import React from "react";
import { Button } from "primereact/button";

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
      <Button
        tabIndex="-1"
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
        severity="secondary"
      >
        <img src={require(`./PatternIcon/${card}.jpg`)} alt={card} />
      </Button>
    ));

    return <div className="pattern-display">{patternCardsDisplay}</div>;
  }
}
