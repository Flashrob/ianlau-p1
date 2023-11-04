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
  let columnIndex = column.indexOf(column);
  let row = selectPlace.slice(-1);
  for (let i = columnIndex - 1; i <= columnIndex + 1; i++) {
    let target = locationInfo[color[i] + (Number(row) + 1)];
    if (target) {
      target.star && (energyGain += 1);
      erased += 1;
      locationInfo[color[i] + (Number(row) + 1)] = "";
    }
  }

  return { erased, energyGain, locationInfo };
}
export function performPattern2(locationInfo, selectPlace) {}
export function performPattern3(locationInfo, selectPlace) {}
export function performPattern4(locationInfo, selectPlace) {}
export function performPattern5(locationInfo, selectPlace) {}
export function performPattern6(locationInfo, selectPlace) {}
export function performPattern7(locationInfo, selectPlace) {}
export function performPattern8(locationInfo, selectPlace) {}
export function performPattern9(locationInfo, selectPlace) {}
