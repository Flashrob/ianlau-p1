import React from "react";
import "./App.css";
import Header from "./Header/Header";
import UpperPlayBoard from "./UpperPlayBoard/UpperPlayBoard";
import LowerPlayBoard from "./LowerPlayBoard/LowerPlayBoard";
import genLocationInfo from "./genLocationInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hp: 4,
      energy: 7,
      gameMode: "",
      bulletCentralPool: [],
      bulletPlayerPool: [],
      //Column a-e, Row 0-5, E.g. a0, a1 ,a2
      locationInfo: genLocationInfo(),
      currRound: 0,
      patternCardDrew: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="game-board">
          <Header
            gameMode={this.state.gameMode}
            currRound={this.state.currRound}
          />
          <UpperPlayBoard location={this.state.locationInfo} />
          <div className="hp-bar">{this.state.hp}</div>
          <LowerPlayBoard patternCard={this.state.patternCardDrew} />
        </div>
      </div>
    );
  }
}

export default App;
