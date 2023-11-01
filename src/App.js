import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./drawFromCentral";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESTATE,
      selected: "",
    };
  }

  handlePlaceBullet = (locationInfo, bulletPool, hp) => {
    this.setState({
      locationInfo: locationInfo,
      bulletPool: bulletPool,
      hp: hp,
    });
  };

  handleCentraltoPlayerPool = (central, playerPool) => {
    this.setState({
      bulletCentralPool: central,
      bulletPool: playerPool,
    });
  };

  handleSelect = (value) => {
    this.setState({ selected: value });
  };

  resetGame() {
    this.setState({ ...DEFAULTGAMESTATE });
  }

  passRound() {
    this.setState({ ...DEFAULTROUNDSTATE });
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
          <UpperPlayBoard
            location={this.state.locationInfo}
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
          <div
            className="hp-bar"
            onClick={() =>
              drawFromCentral(
                this.state.bulletCentralPool,
                10,
                this.handleCentraltoPlayerPool
              )
            }
          >
            {this.state.hp}
          </div>
          <LowerPlayBoard
            patternCard={this.state.patternCardDrew}
            location={this.state.locationInfo}
            bulletPool={this.state.bulletPool}
            handlePlaceBullet={this.handlePlaceBullet}
            hp={this.state.hp}
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
