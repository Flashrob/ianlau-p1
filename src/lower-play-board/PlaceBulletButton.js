import placeBullet from "./placeBullet";

export default function PlaceBulletButton(props) {
  let { locationInfo, bulletPool, handlePlaceBullet, hp, chosenAction } = props;
  return (
    <button
      className="place-bullet-button"
      onClick={
        !chosenAction
          ? () => placeBullet(locationInfo, bulletPool, handlePlaceBullet, hp)
          : null
      }
    >
      Place Bullet
    </button>
  );
}
