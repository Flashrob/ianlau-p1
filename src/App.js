import React from "react";
import "./App.css";
import Header from "./header/Header";
import UpperPlayBoard from "./upper-play-board/UpperPlayBoard";
import LowerPlayBoard from "./lower-play-board/LowerPlayBoard";
import {
  DEFAULTROUNDSTATE,
  DEFAULTGAMESTATE,
  TUTORIALPOOLANDBAG,
} from "./Constant";
import drawFromCentral from "./game-logic/drawFromCentral";
import checkAction from "./game-logic/check/checkActionList";
import checkPatternList from "./game-logic/check/checkPatternList";
import performAction from "./game-logic/perform/performAction";
import drawPattern from "./game-logic/drawPattern";
import performPatternList from "./game-logic/perform/performPatternList";
import placeBullet from "./game-logic/placeBullet";
import Cover from "./cover/Cover";
import genLocationInfo from "./game-logic/genLocationInfo";
import genCentralPool from "./game-logic/genCentralPool";
import genPatternDeck from "./game-logic/genPatternDeck";
import PopUp from "./pop-up/Popup";

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

  handleTutorial = () => {
    this.setState({
      ...TUTORIALPOOLANDBAG,
    });
  };

  handleConfirmMessage = () => {
    this.setState({
      popUpMessage: "",
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handlePlaceBullet = () => {
    const { locationInfo, bulletPool, hp, bulletHit } = placeBullet(
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
        ...(hp < this.state.hp && {
          popUpMessage: bulletHit,
        }),
        ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
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
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handleSelectBullet = (selectBullet) => {
    if (
      (this.state.tutorial === 17 && selectBullet !== "green0") ||
      (this.state.tutorial === 24 && selectBullet !== "blue1")
    ) {
      return;
    }
    let availableSpace = checkAction(
      this.state.selectedElement,
      this.state.locationInfo,
      selectBullet,
      this.state.energy
    );
    this.state.tutorial === 17 && (availableSpace = ["blue0"]);
    this.state.tutorial === 24 && (availableSpace = ["red3"]);

    this.setState({
      selectBullet: selectBullet,
      availableSpace: availableSpace,
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
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
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
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
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
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
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
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
    if (this.state.tutorial > 0) {
      this.setState({ tutorial: this.state.tutorial + 1 });
    }
    if (this.state.bulletPool.length) {
      this.setState({ selectedElement: "EndRound" });
    } else {
      this.setState({ playing: false, selectedElement: "" });
    }
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
      tutorial: 0,
    });
  };

  render() {
    console.log(this.state.patternDeck);
    console.log(this.state.patternCard);
    return (
      <div className="App">
        <div className="game-board">
          {(this.state.popUpMessage || this.state.tutorial > 0) && (
            <PopUp
              popUpMessage={this.state.popUpMessage}
              tutorial={this.state.tutorial}
              handleConfirmMessage={this.handleConfirmMessage}
            />
          )}
          <Cover
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleStartGame={this.handleStartGame}
            erasedBullet={this.state.erasedBullet}
            handleStartRound={this.handleStartRound}
            hp={this.state.hp}
            selectedElement
            bestScore={this.state.bestScore}
            handleReset={this.handleReset}
            handleTutorial={this.handleTutorial}
            tutorial={this.state.tutorial}
            handleConfirmMessage={this.handleConfirmMessage}
          />
          <Header
            selectedElement={this.state.selectedElement}
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleEndRound={this.handleEndRound}
            tutorial={this.state.tutorial}
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
            tutorial={this.state.tutorial}
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
            tutorial={this.state.tutorial}
          />
        </div>
      </div>
    );
  }
}

export default App;
