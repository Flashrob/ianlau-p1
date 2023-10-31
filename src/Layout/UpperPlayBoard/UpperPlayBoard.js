import BulletBoard from "./BulletBoard";
import "./UpperPlayBoard.css";

export default function UpperPlayBoard(props) {
  const { location } = props;

  return (
    <div className="upper-play-board">
      <BulletBoard location={location} />
    </div>
  );
}
