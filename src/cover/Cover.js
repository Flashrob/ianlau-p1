import React from "react";
import MainMenu from "./MainMenu";
import RoundBreak from "./RoundBreak";
import "./cover.css";
import Result from "./Result";
import TutorialList from "./tutorial/TutorialList";
import TwoPlayerMenu from "./TwoPlayerMenu";

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
      handleTwoPlayerMode,
      twoPlayer,
      handlePlayerName,
    } = this.props;

    return tutorial > 0 ? (
      <TutorialList
        tutorial={tutorial}
        handleConfirmMessage={handleConfirmMessage}
        handleReset={handleReset}
      />
    ) : twoPlayer ? (
      <TwoPlayerMenu handlePlayerName={handlePlayerName} />
    ) : currRound === 0 ? (
      <MainMenu
        bestScore={bestScore}
        handleStartGame={handleStartGame}
        handleTutorial={handleTutorial}
        handleTwoPlayerMode={handleTwoPlayerMode}
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
