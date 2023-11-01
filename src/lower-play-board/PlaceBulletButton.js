import placeBullet from "./placeBullet";

export default function PlaceBulletButton(props) {
  let { location, bulletPool, handlePlaceBullet, hp, chosenAction } = props;
  return (
    <button
      className="place-bullet-button"
      onClick={
        !chosenAction
          ? () => placeBullet(location, bulletPool, handlePlaceBullet, hp)
          : null
      }
    >
      Place Bullet
    </button>
  );
}
