export function performPattern0(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  let column = selectPlace.slice(0, -1);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) + 1; i <= 5 && i <= Number(row) + 3; i++) {
    let target = updatedLocation[column + i];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[column + i] = "";
    }
  }
  return { erased, energyGain, updatedLocation };
}

export function performPattern1(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex - 1; c <= columnIndex + 1; c++) {
    let target = updatedLocation[color[c] + (Number(row) + 1)];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[color[c] + (Number(row) + 1)] = "";
    }
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern2(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let c = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) - 1; i <= Number(row) + 1; i++) {
    let target = updatedLocation[color[c + 1] + i];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[color[c + 1] + i] = "";
    }
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern3(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex + 1; c <= columnIndex + 3; c++) {
    let target = updatedLocation[color[c] + row];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[color[c] + row] = "";
    }
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern4(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  let row = selectPlace.slice(-1);
  if (updatedLocation["blue" + row]) {
    updatedLocation["blue" + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation["blue" + row] = "";
  }
  if (updatedLocation["yellow" + row]) {
    updatedLocation["yellow" + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation["yellow" + row] = "";
  }
  if (updatedLocation["green" + row]) {
    updatedLocation["green" + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation["green" + row] = "";
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern5(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  let row = selectPlace.slice(-1);
  if (updatedLocation["pink" + row]) {
    updatedLocation["pink" + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation["pink" + row] = "";
  }
  if (updatedLocation["yellow" + row]) {
    updatedLocation["yellow" + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation["yellow" + row] = "";
  }
  if (updatedLocation["green" + row]) {
    updatedLocation["green" + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation["green" + row] = "";
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern6(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) - 1; i <= Number(row) + 1; i++) {
    let target = updatedLocation[color[columnIndex - 1] + i];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[color[columnIndex - 1] + i] = "";
    }
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern7(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  if (updatedLocation[color[columnIndex - 1] + row]) {
    updatedLocation[color[columnIndex - 1] + row] && (energyGain += 1);
    erased += 1;
    updatedLocation[color[columnIndex - 1] + row] = "";
  }
  if (updatedLocation[color[columnIndex + 1] + row]) {
    updatedLocation[color[columnIndex + 1] + row].star && (energyGain += 1);
    erased += 1;
    updatedLocation[color[columnIndex + 1] + row] = "";
  }
  if (updatedLocation[color[columnIndex] + (Number(row) + 1)]) {
    updatedLocation[color[columnIndex] + (Number(row) + 1)].star &&
      (energyGain += 1);
    erased += 1;
    updatedLocation[color[columnIndex] + (Number(row) + 1)] = "";
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern8(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex; c < columnIndex + 3; c++) {
    let target = updatedLocation[color[c] + (Number(row) + 2)];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[color[c] + (Number(row) + 2)] = "";
    }
  }

  return { erased, energyGain, updatedLocation };
}
export function performPattern9(locationInfo, selectPlace) {
  const updatedLocation = { ...locationInfo };
  let erased = 0,
    energyGain = 0;
  const color = ["red", "blue", "green", "yellow", "pink"];
  let column = selectPlace.slice(0, -1);
  let columnIndex = color.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let c = columnIndex - 1; c < columnIndex + 2; c++) {
    let target = updatedLocation[color[c] + (Number(row) - 2)];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      updatedLocation[color[c] + (Number(row) - 2)] = "";
    }
  }

  return { erased, energyGain, updatedLocation };
}
