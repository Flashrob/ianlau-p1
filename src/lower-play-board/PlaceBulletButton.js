import React from "react";
import { Button } from "primereact/button";

export default class PlaceBulletButton extends React.Component {
  render() {
    const {
      bulletPool,
      selectedElement,
      popUpMessage,
      tutorial,
      handlePlaceBullet,
    } = this.props;
    const isButtonDisabled =
      !bulletPool.length ||
      !(
        (selectedElement === "EndRound" || !selectedElement.length) &&
        !popUpMessage &&
        // similar here as with pattern and actions, we need some kind of description for these numbers, otherwise it gets quite tricky to read and understand
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
      <Button
        className="place-bullet-button"
        onClick={() => handlePlaceBullet(1)}
        disabled={isButtonDisabled}
        label={
          <div className="place-bullet-button">
            Bullet <div className="bullet-left">{bulletPool.length}</div>
            Place Bullet
          </div>
        }
        severity="secondary"
      />
    );
  }
}
