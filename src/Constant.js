import genLocationInfo from "./genLocationInfo";
import genCentralPool from "./genCentralPool";
import genPatternDeck from "./genPatternDeck";

export const DEFAULTROUNDSTATE = {
  energy: 7,
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  erasedbullet: [],
  playing: false,
  selectBullet: "",
  chosenAction: "",
  availableSpace: [],
};

export const DEFAULTGAMESTATE = {
  hp: 4,
  energy: 7,
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  bulletPool: [],
  erasedbullet: [],
  currRound: 0,
  patternDeck: genPatternDeck([]),
  patternCardDrew: [],
  playing: false,
  selectBullet: "",
  chosenAction: "",
  availableSpace: [],
};
