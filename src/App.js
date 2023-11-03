import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./drawFromCentral";
import checkAction from "./check/checkActionList";
import checkPattern from "./check/checkPatternList";
import performAction from "./perform/performAction";
import drawPattern from "./drawPattern";
import performPatternList from "./perform/performPatternList";

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

  handleSelectPattern = (pattern) => {
    let availableSpace = checkPattern(pattern, this.state.locationInfo);
    this.setState({
      selectedElement: pattern,
      availableSpace: availableSpace,
      ...(pattern === "" && { availableSpace: [] }),
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

  handlePerformPattern = (selectPlace) => {
    const updated = performPatternList(
      this.state.selectedElement,
      this.state.locationInfo,
      selectPlace
    );
    const { erased, energyGain, locationInfo } = updated;
    this.setState({
      locationInfo: locationInfo,
      erasedBullet: this.state.erasedBullet + erased,
      energy: this.state.energy + energyGain,
      selectedElement: "",
      availableSpace: "",
      patternCard: this.state.patternCard.filter(
        (pattern) => pattern !== this.state.selectedElement
      ),
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
    this.setState({ playing: true });
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
            locationInfo={this.state.locationInfo}
            bulletPool={this.state.bulletPool}
            handlePlaceBullet={this.handlePlaceBullet}
            hp={this.state.hp}
            selectedElement={this.state.selectedElement}
            handleSelectPattern={this.handleSelectPattern}
          />
        </div>
      </div>
    );
  }
}

export default App;
