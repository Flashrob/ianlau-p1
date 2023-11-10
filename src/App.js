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
    let inputHp = this.state.hp;
    if (this.state.secondPlayer) {
      inputLocation = this.state.locationInfoSecond;
      inputPool = this.state.bulletPoolSecond;
      inputHp = this.state.hpSecond;
    }
    const { Updatedlocation, playerPool, hp, bulletHit } = placeBullet(
      inputLocation,
      inputPool,
      inputHp
    );

    this.setState({
      popUpMessage: bulletHit,
    });
    if (hp < 1 && !this.state.twoPlayer) {
      this.handleEndGame(bulletHit);
    } else if (hp < 1 && this.state.secondPlayer) {
      this.setState({ hpSecond: 0 });
    } else if (hp < 1 && !this.state.secondPlayer && this.state.twoPlayer) {
      this.setState({ hp: 0, playing: false });
    } else {
      this.setState({
        popUpMessage: bulletHit,
        ...(!this.state.secondPlayer
          ? { locationInfo: Updatedlocation, bulletPool: playerPool, hp: hp }
          : {
              locationInfoSecond: Updatedlocation,
              bulletPoolSecond: playerPool,
              hpSecond: hp,
            }),
        ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
      });
    }
  };

  handleCentraltoPlayerPool = (amount, isSecondPlayer) => {
    const { central, playerPool } = drawFromCentral(
      this.state.bulletCentralPool,
      amount
    );

    this.setState({
      bulletCentralPool: central,
      ...(this.state.currRound === 0 || !this.state.twoPlayer || !isSecondPlayer
        ? { bulletPool: playerPool }
        : { bulletPoolSecond: playerPool }),
    });
  };

  handleSelectAction = (action) => {
    if (action === "Action4") {
      this.handleDrawPattern(1, this.state.secondPlayer);
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
    const { erased, energyGain, updatedLocation } = performPatternList(
      this.state.selectedElement,
      inputLocation,
      selectPlace
    );

    let inputCard = this.state.secondPlayer
      ? this.state.patternCardSecond
      : this.state.patternCard;

    const newPatternCard = inputCard.filter(
      (pattern) => pattern !== this.state.selectedElement
    );
    let updatedEnergy = this.state.energy + energyGain;
    this.setState({
      selectedElement: "",
      availableSpace: "",
      energy: updatedEnergy > 7 ? 7 : updatedEnergy,
      ...(!this.state.twoPlayer
        ? {
            locationInfo: updatedLocation,
            erasedBullet: this.state.erasedBullet + erased,
            patternCard: newPatternCard,
          }
        : !this.state.secondPlayer
        ? {
            locationInfo: updatedLocation,
            erasedBulletNextRound: this.state.erasedBulletNextRound + erased,
            patternCard: newPatternCard,
          }
        : {
            locationInfoSecond: updatedLocation,
            erasedBulletSecond: this.state.erasedBulletSecond + erased,
            patternCardSecond: newPatternCard,
          }),
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handleDrawPattern = (amount, isSecondPlayer) => {
    let inputDeck = this.state.patternDeck;
    let inputCard = this.state.patternCard;
    if (isSecondPlayer) {
      inputDeck = this.state.patternDeckSecond;
      inputCard = this.state.patternCardSecond;
    }
    const { newDeck, newCard } = drawPattern(inputDeck, inputCard, amount);
    this.setState({
      ...(!isSecondPlayer
        ? { patternDeck: newDeck, patternCard: newCard }
        : { patternDeckSecond: newDeck, patternCardSecond: newCard }),
    });
  };

  handleStartGame = () => {
    this.handleCentraltoPlayerPool(10, false);
    this.handleDrawPattern(4, false);
    this.setState({ playing: true, currRound: 1 });
  };

  handleTwoPlayerMode = () => {
    this.setState({
      locationInfoSecond: genLocationInfo(),
      patternDeckSecond: genPatternDeck([]),
      patternCardSecond: [],
      bulletPoolSecond: [],
      erasedBulletSecond: 0,
      hpSecond: 4,
      twoPlayer: true,
      erasedBulletNextRound: 0,
    });
  };

  handleStartTwoPlayer = (name1, name2) => {
    this.handleStartGame();
    this.setState({
      playerName: [name1, name2],
    });
  };

  handleEndRound = () => {
    if (this.state.hp === 0) {
      return this.handlePassPlayer();
    }
    let inputPool = this.state.secondPlayer
      ? this.state.bulletPoolSecond
      : this.state.bulletPool;
    if (this.state.tutorial > 0) {
      this.setState({ tutorial: this.state.tutorial + 1 });
    }
    if (inputPool.length) {
      this.setState({ selectedElement: "EndRound" });
    } else {
      this.setState({
        playing: false,
        selectedElement: "",
        ...((this.state.secondPlayer || !this.state.twoPlayer) && {
          currRound: this.state.currRound + 1,
        }),
      });
    }
  };

  handleStartRound = () => {
    let bulletAmount = this.state.currRound + 2 + this.state.erasedBullet;
    if (this.state.patternCard.length < 4) {
      this.handleDrawPattern(4 - this.state.patternCard.length, false);
    }
    this.handleCentraltoPlayerPool(bulletAmount, false);
    this.setState({
      ...DEFAULTROUNDSTATE,
      erasedBullet: 0,
    });
  };

  handlePassPlayer = () => {
    let isNextPlayerSecondPlayer = this.state.secondPlayer !== true;
    let nextPlayerBulletAmount = 10;
    if (this.state.currRound !== 1 && isNextPlayerSecondPlayer) {
      nextPlayerBulletAmount =
        this.state.currRound + 2 + this.state.erasedBullet;
    } else if (!isNextPlayerSecondPlayer) {
      nextPlayerBulletAmount =
        this.state.currRound + 2 + this.state.erasedBulletSecond;
    }

    let inputCard = isNextPlayerSecondPlayer
      ? this.state.patternCardSecond
      : this.state.patternCard;
    if (inputCard.length < 4) {
      this.handleDrawPattern(4 - inputCard.length, isNextPlayerSecondPlayer);
    }
    this.handleCentraltoPlayerPool(
      nextPlayerBulletAmount,
      isNextPlayerSecondPlayer
    );
    this.setState({
      ...DEFAULTROUNDSTATE,
      secondPlayer: !this.state.secondPlayer,
      ...(!isNextPlayerSecondPlayer
        ? {
            erasedBullet: this.state.erasedBulletNextRound,
            erasedBulletNextRound: 0,
          }
        : { erasedBulletSecond: 0 }),
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
      patternCard: [],
      tutorial: 0,
      locationInfoSecond: {},
      patternDeckSecond: [],
      patternCardSecond: [],
      bulletPoolSecond: [],
      erasedBulletSecond: 0,
    });
  };

  render() {
    console.log(this.state);
    let inputCard = this.state.secondPlayer
      ? this.state.patternCardSecond
      : this.state.patternCard;
    let inputLocation = this.state.secondPlayer
      ? this.state.locationInfoSecond
      : this.state.locationInfo;
    let inputPool = this.state.secondPlayer
      ? this.state.bulletPoolSecond
      : this.state.bulletPool;
    let inputHp = this.state.secondPlayer ? this.state.hpSecond : this.state.hp;
    return (
      <div className="App">
        <div className="game-board">
          <PopUp
            popUpMessage={this.state.popUpMessage}
            tutorial={this.state.tutorial}
            handleConfirmMessage={this.handleConfirmMessage}
          />
          <Cover
            currRound={this.state.currRound}
            playing={this.state.playing}
            handleStartGame={this.handleStartGame}
            erasedBullet={this.state.erasedBullet}
            erasedBulletSecond={this.state.erasedBulletSecond}
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
            playerName={this.state.playerName}
            handlePassPlayer={this.handlePassPlayer}
            secondPlayer={this.state.secondPlayer}
            hpSecond={this.state.hpSecond}
            erasedBulletNextRound={this.state.erasedBulletNextRound}
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
            location={inputLocation}
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
              inputHp === 4
                ? "hp-bar"
                : inputHp === 3
                ? "hp-bar3"
                : inputHp === 2
                ? "hp-bar2"
                : inputHp === 1
                ? "hp-bar1"
                : "hp-bar0"
            }
          >
            {inputHp}
          </div>
          <LowerPlayBoard
            patternCard={inputCard}
            bulletPool={inputPool}
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
