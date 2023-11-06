import React from "react";
import "./Header.css";
import GameTitle from "./GameTitle";
import Timer from "./Timer";
import RoundDisplay from "./RoundDisplay";

export default function Header(props) {
  return (
    <div className="header">
      <GameTitle />
      {!(!props.playing || props.selectedElement === "EndRound") && (
        <Timer handleEndRound={props.handleEndRound} />
      )}
      <RoundDisplay currRound={props.currRound} />
    </div>
  );
}
