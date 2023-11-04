export default function performAction(
  action,
  locationInfo,
  selectBullet,
  selectPlace,
  energy
) {
  locationInfo[selectPlace] = locationInfo[selectBullet];
  locationInfo[selectBullet] = "";
  return {
    updatedLocation: locationInfo,
    energy: action === "Action1" ? energy - 1 : energy - 2,
  };
}
