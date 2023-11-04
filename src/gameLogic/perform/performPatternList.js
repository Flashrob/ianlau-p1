import {
  performPattern0,
  performPattern1,
  performPattern2,
  performPattern3,
  performPattern4,
  performPattern5,
  performPattern6,
  performPattern7,
  performPattern8,
  performPattern9,
} from "./performPattern";

export default function performPatternList(pattern, locationInfo, selectPlace) {
  if (pattern === "pattern0") {
    return performPattern0(locationInfo, selectPlace);
  }
  if (pattern === "pattern1") {
    return performPattern1(locationInfo, selectPlace);
  }
  if (pattern === "pattern2") {
    return performPattern2(locationInfo, selectPlace);
  }
  if (pattern === "pattern3") {
    return performPattern3(locationInfo, selectPlace);
  }
  if (pattern === "pattern4") {
    return performPattern4(locationInfo, selectPlace);
  }
  if (pattern === "pattern5") {
    return performPattern5(locationInfo, selectPlace);
  }
  if (pattern === "pattern6") {
    return performPattern6(locationInfo, selectPlace);
  }
  if (pattern === "pattern7") {
    return performPattern7(locationInfo, selectPlace);
  }
  if (pattern === "pattern8") {
    return performPattern8(locationInfo, selectPlace);
  }
  if (pattern === "pattern9") {
    return performPattern9(locationInfo, selectPlace);
  }
}
