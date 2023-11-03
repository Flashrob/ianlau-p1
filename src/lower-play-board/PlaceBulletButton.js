import placeBullet from "./placeBullet";

export default function PlaceBulletButton(props) {
  let { locationInfo, bulletPool, handlePlaceBullet, hp, selectedElement } =
    props;
  return (
    <button
      className="place-bullet-button"
      onClick={
        !selectedElement
          ? () => placeBullet(locationInfo, bulletPool, handlePlaceBullet, hp)
          : null
      }
    >
      Bullet Left:
      <div className="bullet-left">{bulletPool.length}</div>
      Place Bullet
    </button>
  );
}
