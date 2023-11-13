import { Button } from "primereact/button";

export default function Tutorial3(props) {
  return (
    <div className="tutorial3">
      <h1>→</h1>
      <h4>This is your Action Board</h4>
      <h5>You can spend your energy to use an action.</h5>
      <h5>Energy is also shown under the Action Board.</h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
