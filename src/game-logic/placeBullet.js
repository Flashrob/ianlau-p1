export default function placeBullet(locationInfo, bulletPool, hp) {
  let bulletHit;
  let bullet = bulletPool.pop();
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
  rank !== 0 && (hp -= 1) && (bulletHit = bullet);

  return { locationInfo, bulletPool, hp, bulletHit };
}
