import React from "react";

export default class MainMenu extends React.Component {
  render() {
    const {
      handleStartGame,
      erasedBullet,
      currRound,
      playing,
      handleStartRound,
      hp,
      bestScore,
      handleReset,
    } = this.props;
    const mainMenu = (
      <div className="main-menu">
        <div className="big-title">
          <h1>Bullet</h1>
          Best score: {bestScore} rounds.
        </div>
        <button className="main-menu-button" onClick={handleStartGame}>
          Play
        </button>
        <button className="main-menu-button">Tutorial</button>
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

    const result = (
      <div className="main-menu">
        <h1>Oh, you busted!</h1>
        <h2>No more hp left</h2>
        you score is {currRound}
        <button onClick={handleReset} className="main-menu-button">
          Main Menu
        </button>
      </div>
    );

    return currRound === 0
      ? mainMenu
      : hp === 0
      ? result
      : !playing
      ? roundBreak
      : "";
  }
}
