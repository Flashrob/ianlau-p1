import React from "react";
import "./Header.css";
import GameTitle from "./GameTitle";
import Timer from "./Timer";
import RoundDisplay from "./RoundDisplay";

export default function Header(props) {
  console.log(props.playerName);
  return (
    <div className="header">
      <GameTitle />
      {!props.playing || props.selectedElement === "EndRound" ? (
        <div className="timer">
          Timer
          <br />
          3:00
        </div>
      ) : (
        <Timer handleEndRound={props.handleEndRound} />
      )}
      <RoundDisplay currRound={props.currRound} playerName={props.playerName} />
    </div>
  );
}
