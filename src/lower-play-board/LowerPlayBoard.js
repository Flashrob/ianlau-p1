import "./LowerPlayBoard.css";
import PatternDisplay from "./PatternDisplay";
import PlaceBulletButton from "./PlaceBulletButton";

export default function LowerPlayBoard(props) {
  return (
    <div className="lower-play-board">
      <PatternDisplay patternCard={props.patternCard} />
      <PlaceBulletButton />
    </div>
  );
}
