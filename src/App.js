import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSATE, DEFAULTGAMESATE } from "./Constant";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESATE,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="game-board">
          <Header
            gameMode={this.state.gameMode}
            currRound={this.state.currRound}
            playing={this.state.playing}
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
