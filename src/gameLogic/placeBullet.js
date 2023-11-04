export default function placeBullet(locationInfo, bulletPool, hp) {
  //draw one bullet from the pool
  let bullet = bulletPool.pop();
  //location format
  // key = color + row
  //Need to put the bullet inside of the locationInfo
  //first check the column, (color), then the row
  //bullet keys name,rank,color
  let color = bullet.color;
  let rank = bullet.rank;
  const column = Object.keys(locationInfo).filter((key) => key.includes(color));
  for (let place of column) {
    if (locationInfo[place] === "") {
      rank--;
    }
    if (rank === 0) {
      locationInfo[place] = bullet;
      break;
    }
  }

  rank !== 0 && (hp -= 1);

  return { locationInfo, bulletPool, hp };
}
