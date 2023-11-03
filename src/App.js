import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./drawFromCentral";
import check from "./check/check.js";
import perform from "./perform/perform";
import drawPattern from "./drawPattern";

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
    if (chosenAction === "Action4") {
      drawPattern(
        this.state.patternDeck,
        this.state.patternCard,
        1,
        this.handleDrawPattern
      );
      chosenAction = "";
      this.setState({ energy: this.state.energy - 2 });
    }
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

  handlePerformAction = (selectPlace) => {
    const updated = perform(
      this.state.chosenAction,
      this.state.locationInfo,
      this.state.selectBullet,
      selectPlace,
      this.state.energy
    );
    const { updatedLocation, energy } = updated;
    this.setState({
      chosenAction: "",
      selectBullet: "",
      availableSpace: [],
      locationInfo: updatedLocation,
      energy: energy,
    });
  };

  handleDrawPattern = (deck, card) => {
    this.setState({
      patternDeck: deck,
      patternCard: card,
    });
  };

  resetGame = () => {
    this.setState({ ...DEFAULTGAMESTATE });
  };

  passRound = () => {
    this.setState({ ...DEFAULTROUNDSTATE });
  };

  test = () => {
    drawFromCentral(
      this.state.bulletCentralPool,
      10,
      this.handleCentraltoPlayerPool
    );
    drawPattern(
      this.state.patternDeck,
      this.state.patternCard,
      4,
      this.handleDrawPattern
    );
  };

  render() {
    return (
      <div className="App">
        <div className="game-board">
          <Header
            currRound={this.state.currRound}
            playing={this.state.playing}
          />
          <UpperPlayBoard
            locationInfo={this.state.locationInfo}
            chosenAction={this.state.chosenAction}
            handleSelectAction={this.handleSelectAction}
            handleSelectBullet={this.handleSelectBullet}
            availableSpace={this.state.availableSpace}
            handlePerformAction={this.handlePerformAction}
            energy={this.state.energy}
          />
          <div className="hp-bar" onClick={this.test}>
            {this.state.hp}
          </div>
          <LowerPlayBoard
            patternCard={this.state.patternCard}
            locationInfo={this.state.locationInfo}
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
