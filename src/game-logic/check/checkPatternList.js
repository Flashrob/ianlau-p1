import {
  checkPattern0,
  checkPattern1,
  checkPattern2,
  checkPattern3,
  checkPattern4,
  checkPattern5,
  checkPattern6,
  checkPattern7,
  checkPattern8,
  checkPattern9,
} from "./checkPattern";

export default function checkPatternList(pattern, locationInfo) {
  // while it seems inefficient, I think it is okay, as each pattern is quite unique and requires its own function to resolve
  // get rid of the {} curly braces for better readability or use a switch statement, small improvement only.
  if (pattern === "pattern0") {
    return checkPattern0(locationInfo);
  }
  if (pattern === "pattern1") {
    return checkPattern1(locationInfo);
  }
  if (pattern === "pattern2") {
    return checkPattern2(locationInfo);
  }
  if (pattern === "pattern3") {
    return checkPattern3(locationInfo);
  }
  if (pattern === "pattern4") {
    return checkPattern4(locationInfo);
  }
  if (pattern === "pattern5") {
    return checkPattern5(locationInfo);
  }
  if (pattern === "pattern6") {
    return checkPattern6(locationInfo);
  }
  if (pattern === "pattern7") {
    return checkPattern7(locationInfo);
  }
  if (pattern === "pattern8") {
    return checkPattern8(locationInfo);
  }
  if (pattern === "pattern9") {
    return checkPattern9(locationInfo);
  }
}
