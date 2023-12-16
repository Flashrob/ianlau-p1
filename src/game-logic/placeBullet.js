export default function placeBullet(locationInfo, bulletPool, hp) {
  const updatedLocation = { ...locationInfo };
  const playerPool = [...bulletPool];
  let bulletHit = "";
  let bullet = playerPool.pop();
  let color = bullet.color;
  let rank = bullet.rank;
  const column = Object.keys(updatedLocation).filter((key) =>
    key.includes(color) //nested loop here, not ideal
  );

  // this whole for loop is very hard to understand without having created the game.
  // Ideally you explain it a bit in comments, since naming seems appropriate.
  for (let place of column) {
    if (updatedLocation[place] === "") {
      //Must use ==="" because !updatedLocation.length with  bullet object will return false
      // perfect use of a comment here!
      rank--;
    }
    if (rank === 0) {
      updatedLocation[place] = bullet;
      break;
    }
  }
  if (rank !== 0) {
    hp -= 1;
    bulletHit = `${bullet.color}${bullet.name}`;
  }
  return { updatedLocation, playerPool, hp, bulletHit };
}
