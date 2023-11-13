import { Button } from "primereact/button";

export default function Tutorial20(props) {
  return (
    <div className="tutorial20">
      <h1>→</h1>
      <h5>
        The second action allows you to move 1 bullet down to any place you want
        using 2 energy.
      </h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
