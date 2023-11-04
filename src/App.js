import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./gameLogic/drawFromCentral";
import checkAction from "./gameLogic/check/checkActionList";
import checkPatternList from "./gameLogic/check/checkPatternList";
import performAction from "./gameLogic/perform/performAction";
import drawPattern from "./gameLogic/drawPattern";
import performPatternList from "./gameLogic/perform/performPatternList";
import placeBullet from "./gameLogic/placeBullet";
import MainMenu from "./MainMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESTATE,
      bestScore: 0,
    };
  }

  handlePlaceBullet = () => {
    const { locationInfo, bulletPool, hp } = placeBullet(
      this.state.locationInfo,
      this.state.bulletPool,
      this.state.hp
    );
    if (hp === 0) {
      this.handleEndGame();
    }
    this.setState({
      locationInfo: locationInfo,
      bulletPool: bulletPool,
      hp: hp,
    });
  };

  handleCentraltoPlayerPool = (amount) => {
    const { central, playerPool } = drawFromCentral(
      this.state.bulletCentralPool,
      amount
    );
    this.setState({
      bulletCentralPool: central,
      bulletPool: playerPool,
    });
  };

  handleSelectAction = (action) => {
    if (action === "Action4") {
      drawPattern(
        this.state.patternDeck,
        this.state.patternCard,
        1,
        this.handleDrawPattern
      );
      action = "";
      this.setState({ energy: this.state.energy - 2 });
    }
    this.setState({
      selectedElement: action,
      ...(action === "" && { selectBullet: "", availableSpace: [] }),
    });
  };

  handleSelectBullet = (selectBullet) => {
    let availableSpace = checkAction(
      this.state.selectedElement,
      this.state.locationInfo,
      selectBullet
    );
    this.setState({
      selectBullet: selectBullet,
      availableSpace: availableSpace,
    });
  };

  handlePerformAction = (selectPlace) => {
    const updated = performAction(
      this.state.selectedElement,
      this.state.locationInfo,
      this.state.selectBullet,
      selectPlace,
      this.state.energy
    );
    const { updatedLocation, energy } = updated;
    this.setState({
      selectedElement: "",
      selectBullet: "",
      availableSpace: [],
      locationInfo: updatedLocation,
      energy: energy,
    });
  };

  handleSelectPattern = (pattern) => {
    let availableSpace = [];
    if (pattern !== "") {
      availableSpace = checkPatternList(pattern, this.state.locationInfo);
    }
    if (availableSpace.length === 0) {
      pattern = "";
    }
    this.setState({
      selectedElement: pattern,
      availableSpace: availableSpace,
      ...(pattern === "" && { availableSpace: [] }),
    });
  };

  handlePerformPattern = (selectPlace) => {
    const updated = performPatternList(
      this.state.selectedElement,
      this.state.locationInfo,
      selectPlace
    );
    const { erased, energyGain, locationInfo } = updated;
    let updatedEnergy = this.state.energy + energyGain;
    this.setState({
      locationInfo: locationInfo,
      erasedBullet: this.state.erasedBullet + erased,
      selectedElement: "",
      availableSpace: "",
      patternCard: this.state.patternCard.filter(
        (pattern) => pattern !== this.state.selectedElement
      ),
      energy: updatedEnergy > 7 ? 7 : updatedEnergy,
    });
  };

  handleDrawPattern = (deck, card) => {
    this.setState({
      patternDeck: deck,
      patternCard: card,
    });
  };

  handleStartGame = () => {
    this.handleCentraltoPlayerPool(10);
    drawPattern(
      this.state.patternDeck,
      this.state.patternCard,
      4,
      this.handleDrawPattern
    );
    this.setState({ playing: true, currRound: 1 });
  };

  handleEndRound = () => {
    while (this.state.bulletPool.length > 0) {
      this.handlePlaceBullet();
    }
    this.setState({ playing: false });
  };

  handleStartRound = () => {
    let bulletAmount = this.state.currRound + 3 + this.state.erasedBullet;
    if (this.state.patternCard.length < 4) {
      drawPattern(
        this.state.patternDeck,
        this.state.patternCard,
        4 - this.state.patternCard.length,
        this.handleDrawPattern
      );
    }
    this.handleCentraltoPlayerPool(bulletAmount);
    this.setState({
      ...DEFAULTROUNDSTATE,
      currRound: this.state.currRound + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="game-board">
          <MainMenu
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleStartGame={this.handleStartGame}
            erasedBullet={this.state.erasedBullet}
            handleStartRound={this.handleStartRound}
          />
          <Header
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleEndRound={this.handleEndRound}
          />
          <UpperPlayBoard
            locationInfo={this.state.locationInfo}
            selectedElement={this.state.selectedElement}
            handleSelectAction={this.handleSelectAction}
            handleSelectBullet={this.handleSelectBullet}
            availableSpace={this.state.availableSpace}
            handlePerformAction={this.handlePerformAction}
            energy={this.state.energy}
            handlePerformPattern={this.handlePerformPattern}
          />
          <div className="hp-bar" onClick={this.test}>
            {this.state.hp}
          </div>
          <LowerPlayBoard
            patternCard={this.state.patternCard}
            bulletPool={this.state.bulletPool}
            handlePlaceBullet={this.handlePlaceBullet}
            selectedElement={this.state.selectedElement}
            handleSelectPattern={this.handleSelectPattern}
            handleEndRound={this.handleEndRound}
          />
        </div>
      </div>
    );
  }
}

export default App;
