import EndGameButton from "./EndGameButton";
import "./LowerPlayBoard.css";
import PatternDisplay from "./PatternDisplay";
import PlaceBulletButton from "./PlaceBulletButton";

export default function LowerPlayBoard(props) {
  const {
    patternCard,
    bulletPool,
    selectedElement,
    popUpMessage,
    tutorial,
    playing,
    handlePlaceBullet,
    handleEndRound,
    handleSelectPattern,
  } = props;

  return (
    <div className="lower-play-board">
      <PatternDisplay
        patternCard={patternCard}
        selectedElement={selectedElement}
        popUpMessage={popUpMessage}
        tutorial={tutorial}
        handleSelectPattern={handleSelectPattern}
      />
      <div className="place-bullet-area">
        <PlaceBulletButton
          bulletPool={bulletPool}
          selectedElement={selectedElement}
          popUpMessage={popUpMessage}
          tutorial={tutorial}
          handlePlaceBullet={handlePlaceBullet}
        />
        {(!bulletPool.length || selectedElement === "EndRound") &&
          (playing || tutorial === 33) && (
            <EndGameButton
              bulletPool={bulletPool}
              handleEndRound={handleEndRound}
            />
          )}
      </div>
    </div>
  );
}
