export default function drawFromCentral(central, amount) {
  const playerPool = [];
  //pop the centralbag and put it into playerPool
  for (let i = 0; i < amount; i++) {
    playerPool.push(central.pop());
  }
  return { central, playerPool };
}
