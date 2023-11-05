export function checkAction1(locationInfo, selectBullet, energy) {
  const color = ["red", "blue", "green", "yellow", "pink"];
  const availableSpace = [];
  let originalRow = Number(selectBullet.slice(-1));
  let column = selectBullet.slice(0, -1);
  let originalColumn = color.indexOf(column);

  const checkForSpace = function (c, i, ignore) {
    if (
      Math.abs(originalColumn - c) + Math.abs(originalRow - i) + 1 > energy ||
      c < 0 ||
      c > 4 ||
      i > 5
    ) {
      return;
    }
    let down = color[c] + (i + 1);
    if (locationInfo[down] === "") {
      availableSpace.push(down);
    } else {
      checkForSpace(c, i + 1);
    }

    if (ignore !== "left") {
      let left = color[c - 1] + i;
      if (locationInfo[left] === "") {
        availableSpace.push(left);
      } else {
        checkForSpace(c - 1, i, "right");
      }
    }
    if (ignore !== "right") {
      let right = color[c + 1] + i;
      if (locationInfo[right] === "") {
        availableSpace.push(right);
      } else {
        checkForSpace(c + 1, i, "left");
      }
    }
  };

  checkForSpace(originalColumn, originalRow);

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

export function checkAction3(locationInfo, selectBullet, energy) {
  const availableSpace = [];
  let row = selectBullet.slice(-1);
  let column = selectBullet.slice(0, -1);
  if (locationInfo[column + (Number(row) - 1)] === "") {
    availableSpace.push(column + (Number(row) - 1));
  } else if (locationInfo[column + (Number(row) - 2)] === "" && energy >= 4) {
    availableSpace.push(column + (Number(row) - 2));
  } else if (locationInfo[column + (Number(row) - 3)] === "" && energy >= 6) {
    availableSpace.push(column + (Number(row) - 3));
  }

  return availableSpace;
}
