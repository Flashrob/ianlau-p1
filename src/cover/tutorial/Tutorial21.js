import { Button } from "primereact/button";

export default function Tutorial21(props) {
  return (
    <div className="tutorial21">
      <h1>→</h1>
      <h5>
        The third action allows you to move 1 bullet up by 1 space using 2
        energy.
      </h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
