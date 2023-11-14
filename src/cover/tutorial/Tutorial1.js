import { Button } from "primereact/button";

export default function Tutorial1(props) {
  return (
    <div className="main-menu">
      <h1>Welcome to Bullet! the board game.</h1>
      <p>
        In this game, you have to survive the incoming bullets for as many
        rounds as you can.
      </p>

      <p>
        In each round, you must either move or clear the incoming bullets in
        order to prevent them from deducting your health.
      </p>

      <p>
        You have three options to choose from in each round, and you can perform
        them in any order and as many times as you are able to.
      </p>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
