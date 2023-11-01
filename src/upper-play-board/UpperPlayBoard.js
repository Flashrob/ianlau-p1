import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";
import ActionBoard from "./ActionBoard";

export default function UpperPlayBoard(props) {
  const { location } = props;
  return (
    <div className="upper-play-board">
      <BulletBoard location={location} />
      <ActionBoard />
    </div>
  );
}
