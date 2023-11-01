export default function genCentralPool() {
  const color = ["red", "blue", "green", "yellow", "pink"];
  const bag = [];

  //Loop for the color
  for (let c of color) {
    //Loop for the number on the bullet
    for (let i = 1; i <= 3; i++) {
      //6 of the regular bullet for number 1,2,3
      for (let j = 0; j < 6; j++) {
        bag.push({ name: c + i, rank: i, color: c });
      }
      //2 of the star bullet for number 1,2,3
      bag.push({ name: c + i + "Star", rank: i, color: c, star: true });
    }
    //2 of the star bullet and 2 of the regular bullet for number 4
    bag.push({ name: c + 4, rank: 4, color: c });
    bag.push({ name: c + 4 + "Star", rank: 4, color: c, star: true });
  }
  return bag;
}
