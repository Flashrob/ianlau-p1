export default function placeBullet(locationInfo, bulletPool, hp) {
  const Updatedlocation = { ...locationInfo };
  const playerPool = [...bulletPool];
  let bulletHit;
  let bullet = playerPool.pop();
  let color = bullet.color;
  let rank = bullet.rank;
  const column = Object.keys(Updatedlocation).filter((key) =>
    key.includes(color)
  );
  for (let place of column) {
    if (Updatedlocation[place] === "") {
      rank--;
    }
    if (rank === 0) {
      Updatedlocation[place] = bullet;
      break;
    }
  }
  rank !== 0 && (hp -= 1) && (bulletHit = bullet);

  return { Updatedlocation, playerPool, hp, bulletHit };
}
