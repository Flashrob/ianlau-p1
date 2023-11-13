import { Button } from "primereact/button";

export default function Tutorial5(props) {
  return (
    <div className="tutorial5">
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
      <h5>You can choose a pattern card to clear bullets.</h5>
      <h4>This is your Pattern Card Board.</h4>
      <h1>↓</h1>
    </div>
  );
}
