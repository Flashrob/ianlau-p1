import placeBullet from "./placeBullet";

export default function PlaceBulletButton(props) {
  let { location, bulletPool, handlePlaceBullet, hp } = props;
  return (
    <button
      className="place-bullet-button"
      onClick={() => placeBullet(location, bulletPool, handlePlaceBullet, hp)}
    >
      Place Bullet
    </button>
  );
}
