// if we could give the patterns names instead of numbers, we could make things way clearer here. As it stands, these functions don't tell me anything about what is going on. Since there is no library on the patterns either, I am very lost.
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

export function checkPattern1(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 1; c <= 3; c++) {
    for (let i = 0; i <= 4; i++) {
      if (
        locationInfo[color[c - 1] + i] &&
        locationInfo[color[c - 1] + i].rank ===
          locationInfo[color[c + 1] + i].rank &&
        (locationInfo[color[c - 1] + (i + 1)] ||
          locationInfo[color[c] + (i + 1)] ||
          locationInfo[color[c + 1] + (i + 1)])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}

export function checkPattern2(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 0; c <= 3; c++) {
    for (let i = 0; i <= 4; i++) {
      if (
        locationInfo[color[c] + i] &&
        locationInfo[color[c] + (i + 1)].color === "red" &&
        (locationInfo[color[c + 1] + (i - 1)] ||
          locationInfo[color[c + 1] + i] ||
          locationInfo[color[c + 1] + (i + 1)])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}
export function checkPattern3(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 0; c <= 4; c++) {
    for (let i = 1; i <= 4; i++) {
      if (
        locationInfo[color[c] + i] &&
        locationInfo[color[c] + (i + 1)] &&
        locationInfo[color[c] + (i - 1)] &&
        (locationInfo[color[c + 1] + i] ||
          locationInfo[color[c + 2] + i] ||
          locationInfo[color[c + 3] + i])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}

export function checkPattern4(locationInfo) {
  const availableSpace = [];
  for (let i = 0; i <= 5; i++) {
    if (
      locationInfo["red" + i] &&
      locationInfo["pink" + i] &&
      (locationInfo["yellow" + i] ||
        locationInfo["green" + i] ||
        locationInfo["blue" + i])
    ) {
      availableSpace.push("red" + i);
    }
  }
  return availableSpace;
}
export function checkPattern5(locationInfo) {
  const availableSpace = [];
  for (let i = 0; i <= 5; i++) {
    if (
      !locationInfo["red" + i] &&
      !locationInfo["blue" + i] &&
      (locationInfo["yellow" + i] ||
        locationInfo["green" + i] ||
        locationInfo["pink" + i])
    ) {
      availableSpace.push("blue" + i);
    }
  }
  return availableSpace;
}
export function checkPattern6(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 1; c <= 4; c++) {
    for (let i = 1; i <= 4; i++) {
      if (
        locationInfo[color[c] + i] &&
        locationInfo[color[c] + (i + 1)] &&
        locationInfo[color[c] + (i - 1)] &&
        (locationInfo[color[c - 1] + (i - 1)] ||
          locationInfo[color[c - 1] + i] ||
          locationInfo[color[c - 1] + (i + 1)])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}
export function checkPattern7(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 1; c <= 3; c++) {
    for (let i = 0; i <= 4; i++) {
      if (
        locationInfo[color[c] + i] &&
        locationInfo[color[c - 1] + (i + 1)] &&
        locationInfo[color[c + 1] + (i + 1)] &&
        (locationInfo[color[c] + (i + 1)] ||
          locationInfo[color[c - 1] + i] ||
          locationInfo[color[c + 1] + i])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}
export function checkPattern8(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 0; c <= 2; c++) {
    for (let i = 0; i <= 3; i++) {
      if (
        locationInfo[color[c] + i] &&
        locationInfo[color[c] + (i + 1)] &&
        locationInfo[color[c + 2] + i] &&
        locationInfo[color[c + 2] + (i + 1)] &&
        (locationInfo[color[c] + (i + 2)] ||
          locationInfo[color[c + 1] + (i + 2)] ||
          locationInfo[color[c + 2] + (i + 2)])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}
export function checkPattern9(locationInfo) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  for (let c = 1; c <= 3; c++) {
    for (let i = 2; i <= 5; i++) {
      if (
        locationInfo[color[c] + i] === "" &&
        locationInfo[color[c] + (i - 1)].rank === 3 &&
        locationInfo[color[c - 1] + (i - 1)] === "" &&
        locationInfo[color[c + 1] + (i - 1)] === "" &&
        (locationInfo[color[c - 1] + (i - 2)] ||
          locationInfo[color[c] + (i - 2)] ||
          locationInfo[color[c + 1] + (i - 2)])
      ) {
        availableSpace.push(color[c] + i);
      }
    }
  }
  return availableSpace;
}
