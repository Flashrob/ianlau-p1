import "./LowerPlayBoard.css";
import PatternDisplay from "./PatternDisplay";
import PlaceBulletButton from "./PlaceBulletButton";

export default function LowerPlayBoard(props) {
  let { location, bulletPool, handlePlaceBullet, hp } = props;
  return (
    <div className="lower-play-board">
      <PatternDisplay patternCard={props.patternCard} />
      <PlaceBulletButton
        location={location}
        bulletPool={bulletPool}
        handlePlaceBullet={handlePlaceBullet}
        hp={hp}
      />
    </div>
  );
}
