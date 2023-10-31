export default function genLocationInfo() {
  const locationInfo = {};
  const column = ["red", "blue", "green", "yellow", "pink"];
  for (let i = 0; i < column.length; i++) {
    for (let j = 0; j < 6; j++) {
      locationInfo[column[i] + j] = "";
    }
  }
  return locationInfo;
}
