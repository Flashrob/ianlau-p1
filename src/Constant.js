import genLocationInfo from "./gameLogic/genLocationInfo";
import genCentralPool from "./gameLogic/genCentralPool";
import genPatternDeck from "./gameLogic/genPatternDeck";

export const DEFAULTROUNDSTATE = {
  energy: 7,
  erasedBullet: 0,
  playing: true,
  selectBullet: "",
  selectedElement: "",
  availableSpace: [],
};

export const DEFAULTGAMESTATE = {
  hp: 4,
  energy: 7,
  bulletPool: [],
  availableSpace: [],
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  patternDeck: genPatternDeck([]),
  patternCard: [],
  erasedBullet: 0,
  currRound: 0,
  playing: false,
  selectBullet: "",
  selectedElement: "",
};
