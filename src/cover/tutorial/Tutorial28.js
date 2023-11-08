export default function Tutorial28(props) {
  return (
    <div className="main-menu">
      <h1>Pattern Card</h1>
      <h4>
        When your bullet have pattern equal to the requirement, you can clear up
        the bullet in clear logo.
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
        That bullet must have same color as on the card.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/empty.jpg`)} alt="empty" />
        That space must be empty.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/equal.jpg`)} alt="equal" />
        All bullet on the card that have the equal sign must have same rank.
      </h5>
      <h5>
        <img src={require(`./tutorial-img/rank.jpg`)} alt="rank" />
        That bullet must have same rank as on the card
      </h5>
      <button className="tutorial-button" onClick={props.handleConfirmMessage}>
        Next
      </button>
    </div>
  );
}
