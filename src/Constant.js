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
  erasedBullet: 0,
  currRound: 0,
  playing: false,
  selectBullet: "",
  selectedElement: "",
  popUpMessage: "",
  tutorial: 0,
  playerName: [""],
  secondPlayer: false,
};

export const TUTORIALPOOLANDBAG = {
  tutorial: 1,
  patternCard: ["pattern6", "pattern3", "pattern9", "pattern8"],
  bulletPool: [
    { name: "3⭐", rank: 3, color: "pink", star: true },
    { name: "4", rank: 4, color: "yellow" },
    { name: "3", rank: 3, color: "green" },
    { name: "2⭐", rank: 2, color: "red", star: true },
    { name: "4", rank: 4, color: "blue" },
    { name: "1⭐", rank: 1, color: "green", star: true },
    { name: "4", rank: 4, color: "blue" },
    { name: "3", rank: 3, color: "red" },
    { name: "2⭐", rank: 2, color: "blue", star: true },
    { name: "2", rank: 2, color: "blue" },
  ],
};
