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

import "primereact/resources/themes/lara-light-purple/theme.css";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTGAMESTATE,
      bestScore: 0, // why are these 5 properties not included in the default game state?
      locationInfo: genLocationInfo(),
      bulletCentralPool: genCentralPool(),
      patternDeck: genPatternDeck([]),
      patternCard: [],
    };
  }

  handleTutorial = () => { // I think this function seems a bit redundant, why not just directly make a state update? You could pass an anonymous function as prop
    this.setState({
      ...TUTORIALPOOLANDBAG,
    });
  };

  handleConfirmMessage = () => {
    this.setState({
      popUpMessage: "",
      ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }), // nice use of optional object property
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

    // upper case variable only for components or classes
    const { updatedlocation, playerPool, hp, bulletHit } = placeBullet(
      inputLocation,
      inputPool,
      inputHp
    );

    this.setState({
      popUpMessage: bulletHit,
    });
    // i think we could make this more readable with early returns

    if (hp < 1) {
      if (!this.state.twoPlayer) return this.handleEndGame(bulletHit)
      if (this.state.secondPlayer) return this.setState({ hpSecond: 0})
      if (!this.state.secondPlayer && this.state.twoPlayer) return this.setState({ hp: 0, playing: false})
      return;
    }

      this.setState({
        popUpMessage: bulletHit,
        // this ternary operator here, feels borderline hard to read for me and I almost would want to rewrite the logic here somehow to improve that.
        ...(!this.state.secondPlayer
          ? { locationInfo: Updatedlocation, bulletPool: playerPool, hp: hp }
          : {
              locationInfoSecond: Updatedlocation,
              bulletPoolSecond: playerPool,
              hpSecond: hp,
            }),
        ...(this.state.tutorial > 0 && { tutorial: this.state.tutorial + 1 }),
      });
  };

  handleCentraltoPlayerPool = (amount, isSecondPlayer) => {
    const { central, playerPool } = drawFromCentral(
      this.state.bulletCentralPool,
      amount
    );

    this.setState({
      bulletCentralPool: central,
      // it would be good to pack these three OR conditions into a named variable so it is clear what is going on here
      // While ternary optional object property works, I almost feel readability is a bit impacted when the object properties get too many - subjective opinion here
      ...(this.state.currRound === 0 || !this.state.twoPlayer || !isSecondPlayer
        ? { bulletPool: playerPool }
        : { bulletPoolSecond: playerPool }),
    });
  };

  handleSelectAction = (action) => {
    // if there are a set of defined actions in the game, I would recommend packing these into an ENUM object, so we can avoid typos etc.
    /* 
      const ACTIONS = {
        ONE: "Action1",
        TWO: "Action2",
        FOUR: "Action4"
      }
    
      and then we can compare if (action === ACTIONS.FOUR) for example. That way we don't need to type again and also get to avoid typos etc.
    */
    if (action === "Action4") {
      this.handleDrawPattern(1, this.state.secondPlayer);
      action = "";
      this.setState({ energy: this.state.energy - 2 });
    }
    this.setState({
      selectedElement: action,
      ...(!action && { selectBullet: "", availableSpace: [] }),
      ...(this.state.tutorial && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handleSelectBullet = (selectBullet) => {
    // same here as with actions, maybe can give enums to the selectBullet values
    // also, the number for the tutorials is very unclear. What does 17 and 24 mean? I would either not use numbers, or give this some kind of named variable to understand that.
    if (
      (this.state.tutorial === 17 && selectBullet !== "green0") ||
      (this.state.tutorial === 24 && selectBullet !== "blue1")
    ) {
      return;
    }
    let inputLocation = this.state.locationInfo;
    // odd choice for syntax here
    // why not:
    // if (this.state.secondPlayer) inputLocation = this.state.locationInfoSecond

    // or even better: const inputLocation = this.state.secondPlayer ? this.state.locationInfoSecond : this.state.locationInfo
    this.state.secondPlayer && (inputLocation = this.state.locationInfoSecond);
    let availableSpace = checkAction(
      this.state.selectedElement,
      inputLocation,
      selectBullet,
      this.state.energy
    );
    // see above
    this.state.tutorial === 17 && (availableSpace = ["blue0"]);
    this.state.tutorial === 24 && (availableSpace = ["red3"]);

    this.setState({
      selectBullet: selectBullet,
      availableSpace: availableSpace,
      ...(this.state.tutorial && { tutorial: this.state.tutorial + 1 }), // 0 is falsy, other numbers are truthy
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
      // while this works, I feel the choice of having a state for first and secondPlayer each is quite bothersome to work with and it requires you to have a lot of these if else checks in your code.
      // I would recommend to rethink the data structures for such a setup the next time around.
      // I am not exactly sure here how the state for first or second player is set to true or not, but I think there might be a better way to design this to avoid all this extra work here. Ideally we want to be more lazy and not type so much :D
      ...(!this.state.secondPlayer
        ? { locationInfo: updatedLocation }
        : { locationInfoSecond: updatedLocation }),
      ...(this.state.tutorial && { tutorial: this.state.tutorial + 1 }),
    });
  };

  handleSelectPattern = (pattern) => {
    let inputLocation = this.state.locationInfo;
    this.state.secondPlayer && (inputLocation = this.state.locationInfoSecond);
    let availableSpace = [];
    if (pattern) { //not empty string is truthy
      availableSpace = checkPatternList(pattern, inputLocation); //re-assigning the values of an array seems odd to me.

      // const availableSpace = checkPatternList(pattern, inputLocation) || []
      // this way if the first argument is false, second will be in effect as [] is truthy and act as fallback value
    }
    if (!availableSpace.length) {
      pattern = ""; // this seems wrong, as we shouldn't reassign the value of a parameter as we will not know what the value will look like in the first place. Better to use a new variable here or conditionally use empty string in the state Update
    }
    this.setState({
      selectedElement: pattern,
      // selectedElement: !availableSpace.length ? "" : pattern
      availableSpace: availableSpace,
      ...(!pattern && { availableSpace: [] }),
      ...(this.state.tutorial && { tutorial: this.state.tutorial + 1 }),
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

    const inputCard = this.state.secondPlayer
      ? this.state.patternCardSecond
      : this.state.patternCard;

    const newPatternCard = inputCard.filter(
      (pattern) => pattern !== this.state.selectedElement
    );
    const updatedEnergy = this.state.energy + energyGain;
    this.setState({
      selectedElement: "",
      availableSpace: "",
      energy: updatedEnergy > 7 ? 7 : updatedEnergy,
      // I would advise to never use nested ternary operators. These are terrible to read. I would even prefer a if/else spaghetti to this.
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
    const inputDeck = isSecondPlayer ? this.state.patternDeckSecond : this.state.patternDeck;
    const inputCard = isSecondPlayer ? this.state.patternCardSecond : this.state.patternCard;
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
    if (!this.state.hp) {
      return this.handlePassPlayer();
    }
    const inputPool = this.state.secondPlayer
      ? this.state.bulletPoolSecond
      : this.state.bulletPool;
    if (this.state.tutorial) {
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
    const bulletAmount = this.state.currRound + 2 + this.state.erasedBullet;
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
      // for this kind of logic I would either expect a very descriptive function name or a comment to explain what is happening here, as it is hardcoded and seems to be some kind of logic based on game rules. An explanation would be good!
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
      // why are all these not in the default game state?
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
    const hpBarID = document.getElementById("hp-barID"); // ideally we should not select DOM elements directly in React. If you need to do that, we need to use a Ref for that on an element we want to target. Otherwise you might get issues with your Shadow DOM and rerendering behaviour.


    // these variables here showcase what I meant earlier. Lots of repetition because of our choice of data structure for players. Ideally we have something more dynamic and more extendable. What if we get 3,4 or 10 players?
    const inputCard = this.state.secondPlayer
      ? this.state.patternCardSecond
      : this.state.patternCard;
    const inputLocation = this.state.secondPlayer
      ? this.state.locationInfoSecond
      : this.state.locationInfo;
    const inputPool = this.state.secondPlayer
      ? this.state.bulconstPoolSecond
      : this.state.bulletPool;
    let inputHp = this.state.secondPlayer ? this.state.hpSecond : this.state.hp;
    return (
      <div className="App">
        <div className="game-board">
          <ConfirmPopup
            onHide={this.handleConfirmMessage}
            target={hpBarID}
            className="popup"
            visible={this.state.popUpMessage.length}
            message={`You have been hit by a ${this.state.popUpMessage} bullet.`}
            footer={
              <Button
                onClick={this.handleConfirmMessage}
                label="Okay"
                style={{ width: "80%", margin: "5px" }}
              />
            }
          />
          <Cover
          // wasn't this painful to code? If it was me, I would have probably restructure my state somehow in order to avoid passing so many different props to my components.
          // seeing this, I would rather just dump the whole state object instead of doing this line by line, and then destructure as needed in the child component.
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
              // this is very hard to read, nested ternary operator
              // why not define an object for example?
              /* 
                const hpStatuses = {
                  0: "hp-bar0",
                  1: "hp-bar1",
                  ...
                }

                then access like: hpStatuses[inputHp]
              
                You could also use an array or something
              */
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
            id="hp-barID"
          >
            {inputHp}
          </div>
          <LowerPlayBoard
            patternCard={inputCard}
            bulletPool={inputPool}
            handlePlaceBullet={this.handlePlaceBullet}
            selectedElement={this.state.selectedElement}
            handleSelectPattern={this.handleSelectPattern}
            popUpMessage={this.state.popUpMessage}
            tutorial={this.state.tutorial}
            handleEndRound={this.handleEndRound}
            playing={this.state.playing}
          />
        </div>
      </div>
    );
  }
}

export default App;
