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
    } = this.props;

    let test = <div className="hollow-div">test</div>;

    return tutorial > 0 ? (
      <TutorialList tutorial={tutorial} />
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
