import genLocationInfo from "./genLocationInfo";
import genCentralPool from "./genCentralPool";

export const DEFAULTROUNDSATE = {
  energy: 7,
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  erasedbullet: [],
  playing: false,
};

export const DEFAULTGAMESATE = {
  hp: 4,
  energy: 7,
  gameMode: "",
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  bulletPlayerPool: [],
  erasedbullet: [],
  currRound: 0,
  patternDeck: [],
  patternCardDrew: [],
  playing: false,
};
