export default function genLocationInfo() {
  const locationInfo = {};

  // key = color + row(0-5)
  const column = ["red", "blue", "green", "yellow", "pink"];
  for (let i = 0; i < column.length; i++) {
    for (let j = 0; j < 6; j++) {
      locationInfo[column[i] + j] = "";
    }
  }
  return { ...locationInfo };
}
