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
      erasedBullet,
      erasedBulletSecond,
      erasedBulletNextRound,
      currRound,
      playing,
      hp,
      bestScore,
      tutorial,
      twoPlayer,
      secondPlayer,
      playerName,
      hpSecond,
      handleStartRound,
      handleStartGame,
      handleStartTwoPlayer,
      handlePassPlayer,
      handleConfirmMessage,
      handleTwoPlayerMode,
      handleReset,
      handleTutorial,
    } = this.props;

    // this here calls for a switch statement in my opinion. As it is, it is terrible to read :)!
    // it would also help to give the different statuses some kind of naming, as otherwise it is very hard to tell what is going on here

    return tutorial > 0 ? (
      <TutorialList
        tutorial={tutorial}
        handleConfirmMessage={handleConfirmMessage}
        handleReset={handleReset}
      />
    ) : twoPlayer && !currRound ? (
      <TwoPlayerMenu handleStartTwoPlayer={handleStartTwoPlayer} />
    ) : !currRound ? (
      <MainMenu
        bestScore={bestScore}
        handleStartGame={handleStartGame}
        handleTutorial={handleTutorial}
        handleTwoPlayerMode={handleTwoPlayerMode}
      />
    ) : !hp && !twoPlayer ? (
      <Result
        currRound={currRound}
        bestScore={bestScore}
        handleReset={handleReset}
      />
    ) : !hp && !secondPlayer && !playing ? (
      <SecondPlayerLast
        playerName={playerName}
        handlePassPlayer={handlePassPlayer}
      />
    ) : ((!hp && !hpSecond) ||
        !hpSecond ||
        (!hp && playing && !secondPlayer)) &&
      twoPlayer ? (
      <TwoPlayerResult
        hpSecond={hpSecond}
        hp={hp}
        playerName={playerName}
        handleReset={handleReset}
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
        secondPlayer={secondPlayer}
        currRound={currRound}
        erasedBulletNextRound={erasedBulletNextRound}
        handlePassPlayer={handlePassPlayer}
      />
    ) : (
      ""
    );
  }
}
