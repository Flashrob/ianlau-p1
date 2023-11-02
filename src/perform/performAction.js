export default function performAction(locationInfo, selectBullet, selectPlace) {
  locationInfo[selectPlace] = locationInfo[selectBullet];
  locationInfo[selectBullet] = "";

  return locationInfo;
}
