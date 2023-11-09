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
      patternCard: [],
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
    let inputLocation = this.state.locationInfo;
    let inputPool = this.state.bulletPool;
    if (this.state.secondPlayer) {
      inputLocation = this.state.locationInfoSecond;
      inputPool = this.state.bulletPool;
    }
    const { locationInfo, bulletPool, hp, bulletHit } = placeBullet(
      inputLocation,
      inputPool,
      this.state.hp
    );
    if (hp < 1) {
      this.handleEndGame();
    } else {
      this.setState({
        hp: hp,
        ...(hp < this.state.hp && {
          popUpMessage: bulletHit,
        }),
        ...(!this.state.secondPlayer
          ? { locationInfo: locationInfo, bulletPool: bulletPool }
          : { locationInfoSecond: locationInfo, bulletPoolSecond: bulletPool }),
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
      ...(!this.state.secondPlayer
        ? { bulletPool: playerPool }
        : { bulletPoolSecond: playerPool }),
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
    let inputLocation = this.state.locationInfo;
    this.state.secondPlayer && (inputLocation = this.state.locationInfoSecond);
    let availableSpace = checkAction(
      this.state.selectedElement,
      inputLocation,
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
    let inputLocation = this.state.locationInfo;
    this.state.secondPlayer && (inputLocation = this.state.locationInfoSecond);
    const updated = performAction(
      this.state.selectedElement,
      inputLocation,
      this.state.selectBullet,
      selectPlace
    );
    const { updatedLocation, cost } = updated;
    this.setState({
      selectedElement: "",
      selectBullet: "",
      availableSpace: [],
      energy: this.state.energy - cost,
      ...(!this.state.secondPlayer
        ? { locationInfo: updatedLocation }
        : { locationInfoSecond: updatedLocation }),
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handleSelectPattern = (pattern) => {
    let inputLocation = this.state.locationInfo;
    this.state.secondPlayer && (inputLocation = this.state.locationInfoSecond);
    let availableSpace = [];
    if (pattern !== "") {
      availableSpace = checkPatternList(pattern, inputLocation);
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
    let inputLocation = this.state.locationInfo;
    this.state.secondPlayer && (inputLocation = this.state.locationInfoSecond);
    const updated = performPatternList(
      this.state.selectedElement,
      inputLocation,
      selectPlace
    );
    const { erased, energyGain, locationInfo } = updated;
    const newPatternCard = this.state.patternCard.filter(
      (pattern) => pattern !== this.state.selectedElement
    );
    let updatedEnergy = this.state.energy + energyGain;
    this.setState({
      selectedElement: "",
      availableSpace: "",
      energy: updatedEnergy > 7 ? 7 : updatedEnergy,
      ...(!this.state.secondPlayer
        ? {
            locationInfo: locationInfo,
            erasedBullet: this.state.erasedBullet + erased,
            patternCard: newPatternCard,
          }
        : {
            locationInfoSecond: locationInfo,
            erasedBulletSecond: this.state.erasedBullet + erased,
            patternCardSecond: newPatternCard,
          }),
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handleDrawPattern = (amount) => {
    let inputDeck = this.state.patternDeck;
    let inputCard = this.state.patternCard;
    if (this.state.secondPlayer) {
      inputDeck = this.state.patternDeckSecond;
      inputCard = this.state.patternCardSecond;
    }
    const { deck, newCard } = drawPattern(inputDeck, inputCard, amount);
    this.setState({
      ...(!this.state.secondPlayer
        ? { patternDeck: deck, patternCard: newCard }
        : { patternDeckSecond: deck, patternCardSecond: newCard }),
    });
  };

  handleStartGame = () => {
    this.handleCentraltoPlayerPool(10);
    this.handleDrawPattern(4);
    this.setState({ playing: true, currRound: 1 });
  };

  handleTwoPlayerMode = () => {
    this.setState({
      locationInfoSecond: genLocationInfo(),
      patternDeckSecond: genPatternDeck([]),
      patternCardSecond: [],
      bulletPoolSecond: [],
      erasedBulletSecond: [],
      hpSecond: 4,
      twoPlayer: true,
    });
  };

  handleStartTwoPlayer = (name1, name2) => {
    this.handleStartGame();
    this.setState({
      playerName: [name1, name2],
    });
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
    console.log(this.state);
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
            handleTwoPlayerMode={this.handleTwoPlayerMode}
            twoPlayer={this.state.twoPlayer}
            handleStartTwoPlayer={this.handleStartTwoPlayer}
          />
          <Header
            selectedElement={this.state.selectedElement}
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleEndRound={this.handleEndRound}
            tutorial={this.state.tutorial}
            playerName={this.state.playerName}
            secondPlayer={this.state.secondPlayer}
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
