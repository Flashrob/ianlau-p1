export function performPattern0(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  let column = selectPlace.slice(0, -1);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) + 1; i <= 5 && i <= Number(row) + 3; i++) {
    let target = locationInfo[column + i];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[column + i] = "";
    }
  }
  return { erased, energyGain, locationInfo };
}

export function performPattern1(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex - 1; c <= columnIndex + 1; c++) {
    let target = locationInfo[color[c] + (Number(row) + 1)];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[color[c] + (Number(row) + 1)] = "";
    }
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern2(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let c = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) - 1; i <= Number(row) + 1; i++) {
    let target = locationInfo[color[c + 1] + i];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[color[c + 1] + i] = "";
    }
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern3(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex + 1; c <= columnIndex + 3; c++) {
    let target = locationInfo[color[c] + row];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[color[c] + row] = "";
    }
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern4(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  let row = selectPlace.slice(-1);
  if (locationInfo["blue" + row]) {
    locationInfo["blue" + row].star && (energyGain += 1);
    erased += 1;
    locationInfo["blue" + row] = "";
  }
  if (locationInfo["yellow" + row]) {
    locationInfo["yellow" + row].star && (energyGain += 1);
    erased += 1;
    locationInfo["yellow" + row] = "";
  }
  if (locationInfo["green" + row]) {
    locationInfo["green" + row].star && (energyGain += 1);
    erased += 1;
    locationInfo["green" + row] = "";
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern5(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  let row = selectPlace.slice(-1);
  if (locationInfo["pink" + row]) {
    locationInfo["pink" + row].star && (energyGain += 1);
    erased += 1;
    locationInfo["pink" + row] = "";
  }
  if (locationInfo["yellow" + row]) {
    locationInfo["yellow" + row].star && (energyGain += 1);
    erased += 1;
    locationInfo["yellow" + row] = "";
  }
  if (locationInfo["green" + row]) {
    locationInfo["green" + row].star && (energyGain += 1);
    erased += 1;
    locationInfo["green" + row] = "";
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern6(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) - 1; i <= Number(row) + 1; i++) {
    let target = locationInfo[color[columnIndex - 1] + i];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[color[columnIndex - 1] + i] = "";
    }
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern7(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  if (locationInfo[color[columnIndex - 1] + row]) {
    locationInfo[color[columnIndex - 1] + row] && (energyGain += 1);
    erased += 1;
    locationInfo[color[columnIndex - 1] + row] = "";
  }
  if (locationInfo[color[columnIndex + 1] + row]) {
    locationInfo[color[columnIndex + 1] + row].star && (energyGain += 1);
    erased += 1;
    locationInfo[color[columnIndex + 1] + row] = "";
  }
  if (locationInfo[color[columnIndex] + (Number(row) + 1)]) {
    locationInfo[color[columnIndex] + (Number(row) + 1)].star &&
      (energyGain += 1);
    erased += 1;
    locationInfo[color[columnIndex] + (Number(row) + 1)] = "";
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern8(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex; c < columnIndex + 3; c++) {
    let target = locationInfo[color[c] + (Number(row) + 2)];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[color[c] + (Number(row) + 2)] = "";
    }
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern9(locationInfo, selectPlace) {}
