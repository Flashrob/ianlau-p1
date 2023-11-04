import React from "react";

export default class PlaceBulletButton extends React.Component {
  handleClick = () => {
    this.props.handlePlaceBullet();
  };

  render() {
    const { bulletPool, selectedElement } = this.props;
    return (
      <button
        className="place-bullet-button"
        onClick={!selectedElement ? this.handleClick : null}
      >
        Bullet Left:
        <div className="bullet-left">{bulletPool.length}</div>
        Place Bullet
      </button>
    );
  }
}
