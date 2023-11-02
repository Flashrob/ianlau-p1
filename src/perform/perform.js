import performAction from "./performAction";

export default function perform(
  action,
  locationInfo,
  selectBullet,
  selectPlace,
  energy
) {
  const updatedLocation = performAction(
    locationInfo,
    selectBullet,
    selectPlace
  );
  if (action === "Action1") {
    return { updatedLocation: updatedLocation, energy: energy - 1 };
  }
  if (action === "Action2" || action === "Action3") {
    return { updatedLocation: updatedLocation, energy: energy - 2 };
  }
}
