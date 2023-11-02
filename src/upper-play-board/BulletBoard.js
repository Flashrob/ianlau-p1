import React from "react";

export default class BulletBoard extends React.Component {
  genEachColumn = (color) => {
    const {
      location,
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
    const colorFilter = Object.keys(location).filter((place) =>
      place.includes(color)
    );
    for (const place of colorFilter) {
      let available = availableSpace.includes(place);
      let bullet = "";
      if (location[place] !== "") {
        bullet = location[place].name;
      }
      column.push(
        <div
          className="bullet"
          key={place}
          style={{
            backgroundColor: location[place].color,
            ...(available && { border: "2px solid green" }),
          }}
          onClick={
            bullet && available
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
