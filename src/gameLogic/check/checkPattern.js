export function checkPattern0(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c of color) {
    for (let i = 1; i < 5; i++) {
      if (
        locationInfo[c + (i - 1)].color === "yellow" &&
        locationInfo[c + i] &&
        (locationInfo[c + (i + 1)] ||
          locationInfo[c + (i + 2)] ||
          locationInfo[c + (i + 3)])
      ) {
        availableSpace.push(c + i);
      }
    }
  }
  return availableSpace;
}

export function checkPattern1(locationInfo) {}
export function checkPattern2(locationInfo) {}
export function checkPattern3(locationInfo) {}
export function checkPattern4(locationInfo) {}
export function checkPattern5(locationInfo) {}
export function checkPattern6(locationInfo) {}
export function checkPattern7(locationInfo) {}
export function checkPattern8(locationInfo) {}
export function checkPattern9(locationInfo) {}
