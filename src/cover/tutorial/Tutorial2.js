import { Button } from "primereact/button";

export default function Tutorial2(props) {
  return (
    <div className="tutorial2">
      <h1>↑</h1>
      <h4>Here is the Main Bullet Board. </h4>
      <h5>You will place bullets, move bullets, and clear bullets here.</h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
