export default function drawFromCentral(central, amount) {
  //shuffle the central bag first
  for (let i = 0; i < central.length; i++) {
    //randomIndex from 0 to length-1
    let randomIndex = Math.floor(Math.random() * central.length);
    let temp = central[i];
    central[i] = central[randomIndex];
    central[randomIndex] = temp;
  }
  const playerPool = [];
  //pop the centralbag and put it into playerPool
  for (let i = 0; i < amount; i++) {
    playerPool.push(central.pop());
  }

  return { bulletCentralPool: central, playerPool: playerPool };
}
