import React from "react";
import { Button } from "primereact/button";

export default class PatternDisplay extends React.Component {
  handleClick = (e) => {
    const { handleSelectPattern, selectedElement } = this.props;
    const pattern = e.currentTarget.value === selectedElement ? "" : e.currentTarget.value;
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
          // very hard to read. Ideally pack these different statements into variables and use them here:
          // also, with too much reversed logic, it gets harder to read. disabled={true} turns here into:
          // if not, card selected or length 0 and no popup message and tutorial false or tutorial is 29 and card pattern 3
          // is the result of that statement true or false? at which step? this is very hard to trace back :D
          !(
            (selectedElement === card || !selectedElement.length) &&
            !popUpMessage &&
            (!tutorial || (tutorial === 29 && card === "pattern3"))
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
