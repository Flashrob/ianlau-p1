export default function performAction(
  action,
  locationInfo,
  selectBullet,
  selectPlace
) {
  locationInfo[selectPlace] = locationInfo[selectBullet];
  locationInfo[selectBullet] = "";
  const color = ["red", "blue", "green", "yellow", "pink"];
  let row = selectBullet.slice(-1);
  let column = selectBullet.slice(0, -1);
  let c = color.indexOf(column);
  let newRow = selectPlace.slice(-1);
  let newColumn = selectPlace.slice(0, -1);
  let newC = color.indexOf(newColumn);
  let i = Math.abs(newRow - row) + Math.abs(newC - c);
  return {
    updatedLocation: locationInfo,
    cost:
      action === "Action1" && i > 1
        ? i
        : action === "Action1"
        ? 1
        : action === "Action3" && i > 1
        ? i * 2
        : 2,
  };
}
