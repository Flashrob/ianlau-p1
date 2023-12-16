import React from "react";

export default class BulletBoard extends React.Component {
  genEachColumn = (color) => {
    const {
      location,
      selectedElement,
      availableSpace,
      handleSelectBullet,
      handlePerformAction,
      handlePerformPattern,
    } = this.props;
    const column = [
      <div className={`${color}-column-bullet`} key={color}>
        ▼
      </div>,
    ];
    const colorFilter = Object.keys(location).filter((place) =>
      place.includes(color)
    );
    for (const place of colorFilter) {
      const available = availableSpace.includes(place);
      const bullet = location[place] ? location[place].name : "";
      column.push(
        <div
          className={available ? "available-space" : "bullet"}
          key={place}
          style={{
            backgroundColor: location[place].color,
          }}
          onClick={
            // my eyes, they hurt :D What is going on here? hahaha
            available && selectedElement.slice(0, -1) === "pattern"
              ? () => handlePerformPattern(place)
              : available && selectedElement.slice(0, -1) === "Action"
              ? () => handlePerformAction(place)
              : bullet && selectedElement.slice(0, -1) === "Action"
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
