import React from "react";
import MainMenu from "./MainMenu";
import RoundBreak from "./RoundBreak";
import "./cover.css";
import Result from "./Result";
import TutorialList from "./tutorial/TutorialList";
import TwoPlayerMenu from "./TwoPlayerMenu";
import PassPlayer from "./PassPlayer";
import TwoPlayerResult from "./TwoPlayerResult";
import SecondPlayerLast from "./SecondPlayerLast";

export default class Cover extends React.Component {
  render() {
    const {
      handleStartGame,
      erasedBullet,
      erasedBulletSecond,
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
      secondPlayer,
      handleStartTwoPlayer,
      playerName,
      handlePassPlayer,
      hpSecond,
      erasedBulletNextRound,
    } = this.props;

    return tutorial > 0 ? (
      <TutorialList
        tutorial={tutorial}
        handleConfirmMessage={handleConfirmMessage}
        handleReset={handleReset}
      />
    ) : twoPlayer && currRound === 0 ? (
      <TwoPlayerMenu handleStartTwoPlayer={handleStartTwoPlayer} />
    ) : currRound === 0 ? (
      <MainMenu
        bestScore={bestScore}
        handleStartGame={handleStartGame}
        handleTutorial={handleTutorial}
        handleTwoPlayerMode={handleTwoPlayerMode}
      />
    ) : hp === 0 && !twoPlayer ? (
      <Result
        currRound={currRound}
        handleReset={handleReset}
        bestScore={bestScore}
      />
    ) : hp === 0 && !secondPlayer && !playing ? (
      <SecondPlayerLast
        handlePassPlayer={handlePassPlayer}
        playerName={playerName}
      />
    ) : ((hp === 0 && hpSecond === 0) ||
        hpSecond === 0 ||
        (hp === 0 && playing && !secondPlayer)) &&
      twoPlayer ? (
      <TwoPlayerResult
        hpSecond={hpSecond}
        hp={hp}
        handleReset={handleReset}
        playerName={playerName}
      />
    ) : !playing && !twoPlayer ? (
      <RoundBreak
        erasedBullet={erasedBullet}
        currRound={currRound}
        handleStartRound={handleStartRound}
      />
    ) : !playing && twoPlayer ? (
      <PassPlayer
        erasedBullet={erasedBullet}
        erasedBulletSecond={erasedBulletSecond}
        playerName={playerName}
        handlePassPlayer={handlePassPlayer}
        secondPlayer={secondPlayer}
        currRound={currRound}
        erasedBulletNextRound={erasedBulletNextRound}
      />
    ) : (
      ""
    );
  }
}
