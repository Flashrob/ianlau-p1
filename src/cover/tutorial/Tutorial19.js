import { Button } from "primereact/button";

export default function Tutorial19(props) {
  return (
    <div className="tutorial19">
      <h1>↑</h1>
      <h5>After you choose the space, the bullet will be moved.</h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
      <h5>Energy is spent after using an action.</h5>
      <h1>→</h1>
    </div>
  );
}
