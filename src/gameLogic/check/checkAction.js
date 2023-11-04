export function checkAction1(locationInfo, selectBullet) {
  const availableSpace = [];
  const color = ["red", "blue", "green", "yellow", "pink"];
  let row = selectBullet.slice(-1);
  let column = selectBullet.slice(0, -1);
  let indexOfColumn = color.indexOf(column);
  let down = column + (Number(row) + 1);
  if (locationInfo[down] === "") {
    availableSpace.push(down);
  }
  let left = color[indexOfColumn - 1] + row;
  let right = color[indexOfColumn + 1] + row;
  if (locationInfo[left] === "") {
    availableSpace.push(left);
  }
  if (locationInfo[right] === "") {
    availableSpace.push(right);
  }
  return availableSpace;
}

export function checkAction2(locationInfo, selectBullet) {
  const availableSpace = [];
  let row = selectBullet.slice(-1);
  let column = selectBullet.slice(0, -1);
  for (let i = Number(row) + 1; i < 6; i++) {
    if (locationInfo[column + i] === "") {
      availableSpace.push(column + i);
    }
  }

  return availableSpace;
}

export function checkAction3(locationInfo, selectBullet) {
  let row = selectBullet.slice(-1);
  let column = selectBullet.slice(0, -1);
  if (locationInfo[column + (Number(row) - 1)] === "") {
    return [column + (Number(row) - 1)];
  }
  return [];
}
