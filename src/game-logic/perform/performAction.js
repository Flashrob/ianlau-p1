export default function performAction(
  action,
  locationInfo,
  selectBullet,
  selectPlace
) {
  locationInfo[selectPlace] = locationInfo[selectBullet];
  locationInfo[selectBullet] = "";
  const color = ["red", "blue", "green", "yellow", "pink"];

  // complex logic, explanations would be helpful here.
  let row = selectBullet.slice(-1);
  let column = selectBullet.slice(0, -1);
  // please never use single letter variable names, very hard to work with as a colleague
  let c = color.indexOf(column);
  let newRow = selectPlace.slice(-1);
  let newColumn = selectPlace.slice(0, -1);
  let newC = color.indexOf(newColumn);
  let i = Math.abs(newRow - row) + Math.abs(newC - c);
  return {
    updatedLocation: locationInfo,
    cost:
      action === ACTIONS.ONE && i > 1
        ? i
        : action === ACTIONS.ONE
        ? 1
        : action === ACTIONS.THREE && i > 1
        ? i * 2
        : 2,
  };
}


// even better if we can give the actions a name instead of just numbers
const ACTIONS = {
  ONE: "Action1",
  TWO: "Action2",
  THREE: "Action3",

}