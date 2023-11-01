import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./drawFromCentral";
import check from "./checkBoard/check.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESTATE,
      selectBullet: "",
      chosenAction: "",
      availableSpace: {},
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
    if (chosenAction !== "") {
      check(chosenAction, this.state.locationInfo, this.chooseAction);
    }
    this.setState({
      chosenAction: chosenAction,
      ...(chosenAction === "" && { selectBullet: "" }),
    });
  };

  handleSelectBullet = (selectBullet) => {
    this.setState({ selectBullet: selectBullet });
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
            chosenAction={this.state.chosenAction}
            handleSelectAction={this.handleSelectAction}
            handleSelectBullet={this.handleSelectBullet}
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
