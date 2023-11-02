import { checkAction1, checkAction2, checkAction3 } from "./checkAction";

export default function check(action, locationInfo, selectBullet) {
  if (action === "Action1") {
    return checkAction1(locationInfo, selectBullet);
  }
  if (action === "Action2") {
    return checkAction2(locationInfo, selectBullet);
  }
  if (action === "Action3") {
    return checkAction3(locationInfo, selectBullet);
  }
}
