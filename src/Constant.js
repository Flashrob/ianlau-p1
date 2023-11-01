import genLocationInfo from "./genLocationInfo";
import genCentralPool from "./genCentralPool";

export const DEFAULTROUNDSTATE = {
  energy: 7,
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  erasedbullet: [],
  playing: false,
};

export const DEFAULTGAMESTATE = {
  hp: 4,
  energy: 7,
  gameMode: "",
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  bulletPool: [],
  erasedbullet: [],
  currRound: 0,
  patternDeck: [],
  patternCardDrew: [],
  playing: false,
};
