import genLocationInfo from "./genLocationInfo";
import genCentralPool from "./genCentralPool";
import genPatternDeck from "./genPatternDeck";

export const DEFAULTROUNDSTATE = {
  energy: 7,
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  erasedBullet: 0,
  playing: false,
  selectBullet: "",
  selectedElement: "",
  availableSpace: [],
};

export const DEFAULTGAMESTATE = {
  hp: 4,
  energy: 7,
  locationInfo: genLocationInfo(),
  bulletCentralPool: genCentralPool(),
  bulletPool: [],
  erasedBullet: 0,
  currRound: 0,
  patternDeck: genPatternDeck([]),
  patternCard: [],
  playing: false,
  selectBullet: "",
  selectedElement: "",
  availableSpace: [],
};
