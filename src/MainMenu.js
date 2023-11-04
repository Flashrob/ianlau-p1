import React from "react";

export default class MainMenu extends React.Component {
  render() {
    const mainMenu = (
      <div className="main-menu">
        <button
          className="main-menu-button"
          onClick={this.props.handleStartGame}
        >
          Play
        </button>
      </div>
    );

    return this.props.playing ? "" : mainMenu;
  }
}
