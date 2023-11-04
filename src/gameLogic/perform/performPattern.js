export function performPattern0(locationInfo, selectPlace) {
  let erased = 0,
    energyGain = 0;
  let column = selectPlace.slice(0, -1);
  let row = selectPlace.slice(-1);
  for (let i = Number(row) + 1; i <= 5 && i <= Number(row) + 3; i++) {
    if (locationInfo[column + i]) {
      locationInfo[column + i].star && (energyGain += 1);
      erased += 1;
      locationInfo[column + i] = "";
    }
  }
  return { erased, energyGain, locationInfo };
}

export function performPattern1(locationInfo, selectPlace) {}
export function performPattern2(locationInfo, selectPlace) {}
export function performPattern3(locationInfo, selectPlace) {}
export function performPattern4(locationInfo, selectPlace) {}
export function performPattern5(locationInfo, selectPlace) {}
export function performPattern6(locationInfo, selectPlace) {}
export function performPattern7(locationInfo, selectPlace) {}
export function performPattern8(locationInfo, selectPlace) {}
export function performPattern9(locationInfo, selectPlace) {}
