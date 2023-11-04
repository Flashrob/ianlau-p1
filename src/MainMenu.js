import React from "react";

export default class MainMenu extends React.Component {
  render() {
    const {
      handleStartGame,
      erasedBullet,
      currRound,
      playing,
      handleStartRound,
    } = this.props;
    const mainMenu = (
      <div className="main-menu">
        <div className="big-title">
          <h1>Bullet</h1>
        </div>
        <button className="main-menu-button" onClick={handleStartGame}>
          Play
        </button>
        <button className="main-menu-button">Turtorial</button>
        <button className="main-menu-button">Disclaimer</button>
      </div>
    );

    const roundBreak = (
      <div className="main-menu">
        <h1>Nice Job</h1>You have erased {erasedBullet} bullets this round.
        <br />
        You will face {3 + currRound + erasedBullet} bullets next round
        <button className="main-menu-button" onClick={handleStartRound}>
          Next round
        </button>
      </div>
    );
    return currRound === 0 ? mainMenu : !playing ? roundBreak : "";
  }
}
