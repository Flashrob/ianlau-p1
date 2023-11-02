import React from "react";

export default class BulletBoard extends React.Component {
  genEachColumn = (color) => {
    const {
      locationInfo,
      chosenAction,
      handleSelectBullet,
      availableSpace,
      handlePerformAction,
    } = this.props;
    let column = [
      <div className={`${color}-column-bullet`} key={color}>
        ▼
      </div>,
    ];
    const colorFilter = Object.keys(locationInfo).filter((place) =>
      place.includes(color)
    );
    for (const place of colorFilter) {
      let available = availableSpace.includes(place);
      let bullet = "";
      if (locationInfo[place] !== "") {
        bullet = locationInfo[place].name;
      }
      column.push(
        <div
          className="bullet"
          key={place}
          style={{
            backgroundColor: locationInfo[place].color,
            ...(available && { border: "2px solid green" }),
          }}
          onClick={
            available
              ? () => handlePerformAction(place)
              : bullet && chosenAction
              ? () => handleSelectBullet(place)
              : null
          }
        >
          {bullet}
        </div>
      );
    }
    return (
      <div className="bullet-column" key={color + "column"}>
        {column}
      </div>
    );
  };

  render() {
    const color = ["red", "blue", "green", "yellow", "pink"];
    return (
      <div className="bullet-board">
        {color.map((column) => this.genEachColumn(column))}
      </div>
    );
  }
}
