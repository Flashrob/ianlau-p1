export function checkAction1(locationInfo) {
  const bulletLocated = [];
  for (const place of Object.keys(locationInfo)) {
    if (locationInfo.place !== "") {
      bulletLocated.push(place);
    }
  }
  for (let i = 0; i < bulletLocated.length; i++) {}
}

export function checkAction2(locationInfo) {}

export function checkAction3(locationInfo) {}
