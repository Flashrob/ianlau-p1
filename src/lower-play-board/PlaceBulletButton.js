import React from "react";

export default class PlaceBulletButton extends React.Component {
  handleClick = () => {
    this.props.bulletPool.length
      ? this.props.handlePlaceBullet(1)
      : this.props.handleEndRound();
  };

  render() {
    const { bulletPool, selectedElement, popUpMessage, tutorial } = this.props;
    const isButtonDisabled = !(
      (selectedElement === "EndRound" || selectedElement === "") &&
      !popUpMessage &&
      (tutorial === 0 ||
        tutorial === 7 ||
        tutorial === 9 ||
        tutorial === 11 ||
        tutorial === 12 ||
        tutorial === 13 ||
        tutorial === 14 ||
        tutorial === 26 ||
        tutorial === 27 ||
        tutorial === 31 ||
        tutorial === 32 ||
        tutorial === 33)
    );
    return (
      <button
        className="place-bullet-button"
        onClick={this.handleClick}
        disabled={isButtonDisabled}
      >
        Bullet Left:
        <div className="bullet-left">{bulletPool.length}</div>
        {this.props.bulletPool.length ? "Place Bullet" : "End Round"}
      </button>
    );
  }
}
