import { Button } from "primereact/button";

export default function Tutorial28(props) {
  return (
    <div className="main-menu">
      <h1>Pattern Card</h1>
      <h4>
        When your bullet has a pattern that matches the requirement, you can
        clear the bullet by clicking on the mouse logo in the place where the
        clear logo is located.
      </h4>
      <h5>
        Clear Logo:
        <img src={require(`./tutorial-img/clear.jpg`)} alt="clear" />
        Mouse Logo:
        <img src={require(`./tutorial-img/mouse.jpg`)} alt="mouse" />
      </h5>
      <h2>Requirement:</h2>
      <h5>
        <img src={require(`./tutorial-img/bullet.jpg`)} alt="bullet" />A bullet
        of any type.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/color.jpg`)} alt="color" />
        This bullet must have the same color as the one shown on the card.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/empty.jpg`)} alt="empty" />
        This space must be empty.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/equal.jpg`)} alt="equal" />
        All bullets on the card that have the equal sign must have the same
        rank.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/rank.jpg`)} alt="rank" />
        This bullet must have the same rank as the one shown on the card.
      </h5>
      <Button
        className="tutorial-button"
        onClick={props.handleConfirmMessage}
        label="Next"
      />
    </div>
  );
}
