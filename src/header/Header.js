import React from "react";
import "./Header.css";
import GameTitle from "./GameTitle";
import Timer from "./Timer";
import RoundDisplay from "./RoundDisplay";

export default function Header(props) {
  const {
    selectedElement,
    playing,
    bulletPool,
    currRound,
    playerName,
    secondPlayer,
    handleEndRound,
  } = props;
  return (
    <div className="header">
      <GameTitle />
      {selectedElement === "EndRound" || !playing ? (
        <div className="timer">
          Timer
          <br />
          1:30
        </div>
      ) : (
        <Timer
          playing={playing}
          selectedElement={selectedElement}
          bulletPool={bulletPool}
          handleEndRound={handleEndRound}
        />
      )}

      <RoundDisplay
        currRound={currRound}
        playerName={playerName}
        secondPlayer={secondPlayer}
      />
    </div>
  );
}
