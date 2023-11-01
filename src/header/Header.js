import React from "react";
import "./Header.css";
import GameTitle from "./GameTitle";
import Timer from "./Timer";
import RoundDisplay from "./RoundDisplay";

export default function Header(props) {
  return (
    <div className="header">
      <GameTitle gameMode={props.gameMode} />

      {props.playing && <Timer />}
      <RoundDisplay currRound={props.currRound} />
    </div>
  );
}
