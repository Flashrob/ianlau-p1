import { Button } from "primereact/button";

export default function Tutorial22(props) {
  return (
    <div className="tutorial22">
      <h1>→</h1>
      <h5>
        The fourth action allows you to draw one pattern card using 2 energy.
      </h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
