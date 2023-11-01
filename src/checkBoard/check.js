import { checkAction1, checkAction2, checkAction3 } from "./checkAction";

export default function check(select, locationInfo) {
  if (select === "Action1") {
    checkAction1(locationInfo);
  } else if (select === "Action2") {
    checkAction2(locationInfo);
  } else if (select === "Action1") {
    checkAction3(locationInfo);
  } else {
  }
}
