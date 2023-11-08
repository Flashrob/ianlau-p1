import React from "react";
import MainMenu from "./MainMenu";
import RoundBreak from "./RoundBreak";
import "./cover.css";
import Result from "./Result";
import TutorialList from "./tutorial/TutorialList";

export default class Cover extends React.Component {
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
      handleTutorial,
      tutorial,
      handleConfirmMessage,
    } = this.props;

    return tutorial > 0 ? (
      <TutorialList
        tutorial={tutorial}
        handleConfirmMessage={handleConfirmMessage}
        handleReset={handleReset}
      />
    ) : currRound === 0 ? (
      <MainMenu
        bestScore={bestScore}
        handleStartGame={handleStartGame}
        handleTutorial={handleTutorial}
      />
    ) : hp === 0 ? (
      <Result
        currRound={currRound}
        handleReset={handleReset}
        bestScore={bestScore}
      />
    ) : !playing ? (
      <RoundBreak
        erasedBullet={erasedBullet}
        currRound={currRound}
        handleStartRound={handleStartRound}
      />
    ) : (
      ""
    );
  }
}
