import React from "react";

export default class PlaceBulletButton extends React.Component {
  handleClick = () => {
    this.props.bulletPool.length
      ? this.props.handlePlaceBullet(1)
      : this.props.handleEndRound();
  };

  render() {
    const { bulletPool, selectedElement, popUpMessage } = this.props;
    const isButtonDisabled = !(
      (selectedElement === "EndRound" || selectedElement === "") &&
      !popUpMessage
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
