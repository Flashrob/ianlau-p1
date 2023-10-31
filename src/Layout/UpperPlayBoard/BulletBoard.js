import React from "react";

export default class BulletBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  genEachColumn = (color) => {
    const { location } = this.props;
    let column = [
      <div className={`${color}-column-bullet`} key={color}>
        ▼
      </div>,
    ];
    const colorFilter = Object.keys(location).filter((place) =>
      place.includes(color)
    );
    for (const place of colorFilter) {
      column.push(
        <div className="bullet" key={place}>
          {location.place}
        </div>
      );
    }
    return <div className="bullet-column">{column}</div>;
  };

  render() {
    const color = ["red", "blue", "green", "yellow", "pink"];
    const display = color.map((column) => this.genEachColumn(column));
    return <div className="bullet-board">{display}</div>;
  }
}
