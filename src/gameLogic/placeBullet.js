export default function placeBullet(amount, locationInfo, bulletPool, hp) {
  for (let i = 0; i < amount; i++) {
    let bullet = bulletPool.pop();
    let color = bullet.color;
    let rank = bullet.rank;
    const column = Object.keys(locationInfo).filter((key) =>
      key.includes(color)
    );
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
  }

  return { locationInfo, bulletPool, hp };
}
