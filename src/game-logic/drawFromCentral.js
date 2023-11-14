export default function drawFromCentral(central, amount) {
  const playerPool = [];
  for (let i = 0; i < amount; i++) {
    playerPool.push(central.pop());
  }
  return { central, playerPool };
}
