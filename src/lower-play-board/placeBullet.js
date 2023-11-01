export default function placeBullet(
  location,
  bulletPool,
  handlePlaceBullet,
  hp
) {
  //draw one bullet from the pool
  let bullet = bulletPool.pop();
  //location format
  // key = color + row
  //Need to put the bullet inside of the locationInfo
  //first check the column, (color), then the row
  //bullet keys name,rank,color
  let color = bullet.color;
  let rank = bullet.rank;
  const column = Object.keys(location).filter((key) => key.includes(color));

  for (let place of column) {
    !column[place] && rank--;
    rank === 0 && (location[place] = bullet);
  }

  rank !== 0 && (hp -= 1);

  handlePlaceBullet(location, bulletPool, hp);
}
