import React from "react";
import "./Header.css";
import GameTitle from "./GameTitle";
import Timer from "./Timer";
import RoundDisplay from "./RoundDisplay";

export default function Header() {
  return (
    <div className="header">
      <GameTitle />
      <Timer />
      <RoundDisplay />
    </div>
  );
}
