import { Button } from "primereact/button";

export default function Tutorial28(props) {
  return (
    <div className="main-menu">
      <h1>Pattern Card</h1>
      <h5>
        When a your bullet matches the pattern requirement, you can select the
        pattern by clicking on it.
      </h5>
      <h5>
        Then, click on the bullet board in the same position as indicated by the
        mouse logo on the pattern card.
      </h5>
      <div className="clear-logo">
        <h5>Clear Logo:</h5>
        <img src={require(`./tutorial-img/clear.jpg`)} alt="clear" />
        <h5>Mouse Logo:</h5>
        <img src={require(`./tutorial-img/mouse.jpg`)} alt="mouse" />
      </div>
      <h4>Requirement:</h4>

      <img src={require(`./tutorial-img/bullet.jpg`)} alt="bullet" />
      <h5>A bullet of any type.</h5>

      <img src={require(`./tutorial-img/color.jpg`)} alt="color" />
      <h5>
        This bullet must have the same color as the one shown on the card.
      </h5>

      <img src={require(`./tutorial-img/empty.jpg`)} alt="empty" />
      <h5>This space must be empty.</h5>

      <img src={require(`./tutorial-img/equal.jpg`)} alt="equal" />
      <h5>
        All bullets on the card that have the equal sign must have the same
        rank.
      </h5>

      <img src={require(`./tutorial-img/rank.jpg`)} alt="rank" />
      <h5>This bullet must have the same rank as the one shown on the card.</h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
