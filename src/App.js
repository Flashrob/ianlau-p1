import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import { DEFAULTROUNDSTATE, DEFAULTGAMESTATE } from "./Constant";
import drawFromCentral from "./game-logic/drawFromCentral";
import checkAction from "./game-logic/check/checkActionList";
import checkPatternList from "./game-logic/check/checkPatternList";
import performAction from "./game-logic/perform/performAction";
import drawPattern from "./game-logic/drawPattern";
import performPatternList from "./game-logic/perform/performPatternList";
import placeBullet from "./game-logic/placeBullet";
import MainMenu from "./MainMenu";
import genLocationInfo from "./game-logic/genLocationInfo";
import genCentralPool from "./game-logic/genCentralPool";
import genPatternDeck from "./game-logic/genPatternDeck";
import PopUp from "./pop-up/PopUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESTATE,
      bestScore: 0,
      locationInfo: genLocationInfo(),
      bulletCentralPool: genCentralPool(),
      patternDeck: genPatternDeck([]),
    };
  }

  handleConfirmMessage = () => {
    this.setState({ popUpMessage: "" });
  };

  handlePlaceBullet = (amount) => {
    const { locationInfo, bulletPool, hp, bulletHit } = placeBullet(
      amount,
      this.state.locationInfo,
      this.state.bulletPool,
      this.state.hp
    );
    if (hp < 1) {
      this.handleEndGame();
    } else {
      this.setState({
        locationInfo: locationInfo,
        bulletPool: bulletPool,
        hp: hp,
        ...{ popUpMessage: hp < this.state.hp && bulletHit },
      });
    }
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
      this.handleDrawPattern(1);
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
      selectBullet,
      this.state.energy
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
      selectPlace
    );
    const { updatedLocation, cost } = updated;
    this.setState({
      selectedElement: "",
      selectBullet: "",
      availableSpace: [],
      locationInfo: updatedLocation,
      energy: this.state.energy - cost,
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
    const newPatternCard = this.state.patternCard.filter(
      (pattern) => pattern !== this.state.selectedElement
    );
    let updatedEnergy = this.state.energy + energyGain;
    this.setState({
      locationInfo: locationInfo,
      erasedBullet: this.state.erasedBullet + erased,
      selectedElement: "",
      availableSpace: "",
      patternCard: newPatternCard,
      energy: updatedEnergy > 7 ? 7 : updatedEnergy,
    });
  };

  handleDrawPattern = (amount) => {
    const { deck, newCard } = drawPattern(
      this.state.patternDeck,
      this.state.patternCard,
      amount
    );
    this.setState({
      patternDeck: deck,
      patternCard: newCard,
    });
  };

  handleStartGame = () => {
    this.handleCentraltoPlayerPool(10);
    this.handleDrawPattern(4);
    this.setState({ playing: true, currRound: 1 });
  };

  handleEndRound = () => {
    this.handlePlaceBullet(this.state.bulletPool.length);
    this.setState({ playing: false });
  };

  handleStartRound = () => {
    let bulletAmount = this.state.currRound + 3 + this.state.erasedBullet;
    if (this.state.patternCard.length < 4) {
      this.handleDrawPattern(4 - this.state.patternCard.length);
    }
    this.handleCentraltoPlayerPool(bulletAmount);
    this.setState({
      ...DEFAULTROUNDSTATE,
      currRound: this.state.currRound + 1,
    });
  };

  handleEndGame = () => {
    this.setState({
      hp: 0,
      playing: false,
      ...(this.state.bestScore < this.state.currRound && {
        bestScore: this.state.currRound,
      }),
    });
  };

  handleReset = () => {
    this.setState({
      ...DEFAULTGAMESTATE,
      locationInfo: genLocationInfo(),
      bulletCentralPool: genCentralPool(),
      patternDeck: genPatternDeck([]),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="game-board">
          {this.state.popUpMessage && (
            <PopUp
              popUpMessage={this.state.popUpMessage}
              handleConfirmMessage={this.handleConfirmMessage}
            />
          )}
          <MainMenu
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleStartGame={this.handleStartGame}
            erasedBullet={this.state.erasedBullet}
            handleStartRound={this.handleStartRound}
            hp={this.state.hp}
            selectedElement
            bestScore={this.state.bestScore}
            handleReset={this.handleReset}
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
            popUpMessage={this.state.popUpMessage}
          />
          <div
            className={
              this.state.hp === 4
                ? "hp-bar"
                : this.state.hp === 3
                ? "hp-bar3"
                : this.state.hp === 2
                ? "hp-bar2"
                : this.state.hp === 1
                ? "hp-bar1"
                : "hp-bar0"
            }
            onClick={this.test}
          >
            {this.state.hp}
          </div>
          <LowerPlayBoard
            patternCard={this.state.patternCard}
            bulletPool={this.state.bulletPool}
            handlePlaceBullet={this.handlePlaceBullet}
            selectedElement={this.state.selectedElement}
            handleSelectPattern={this.handleSelectPattern}
            handleEndRound={this.handleEndRound}
            popUpMessage={this.state.popUpMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
