import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./drawFromCentral";
import check from "./check/check.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESTATE,
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

  handleSelectAction = (chosenAction) => {
    this.setState({
      chosenAction: chosenAction,
      ...(chosenAction === "" && { selectBullet: "", availableSpace: [] }),
    });
  };

  handleSelectBullet = (selectBullet) => {
    let availableSpace = check(
      this.state.chosenAction,
      this.state.locationInfo,
      selectBullet
    );
    this.setState({
      selectBullet: selectBullet,
      availableSpace: availableSpace,
    });
  };

  handlePerformAction = (place) => {};

  resetGame() {
    this.setState({ ...DEFAULTGAMESTATE });
  }

  passRound() {
    this.setState({ ...DEFAULTROUNDSTATE });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="game-board">
          <Header
            currRound={this.state.currRound}
            playing={this.state.playing}
          />
          <UpperPlayBoard
            location={this.state.locationInfo}
            chosenAction={this.state.chosenAction}
            handleSelectAction={this.handleSelectAction}
            handleSelectBullet={this.handleSelectBullet}
            availableSpace={this.state.availableSpace}
            handlePerformAction={this.handlePerformAction}
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
            chosenAction={this.state.chosenAction}
          />
        </div>
      </div>
    );
  }
}

export default App;
