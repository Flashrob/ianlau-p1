import React from "react";
import "./Header.css";
import GameTitle from "./GameTitle";
import Timer from "./Timer";
import RoundDisplay from "./RoundDisplay";

export default function Header(props) {
  return (
    <div className="header">
      <GameTitle />
      {props.selectedElement === "EndRound" || !props.playing ? (
        <div className="timer">
          Timer
          <br />
          3:00
        </div>
      ) : (
        <Timer
          playing={props.playing}
          handleEndRound={props.handleEndRound}
          selectedElement={props.selectedElement}
          bulletPool={props.bulletPool}
        />
      )}

      <RoundDisplay
        currRound={props.currRound}
        playerName={props.playerName}
        secondPlayer={props.secondPlayer}
      />
    </div>
  );
}
