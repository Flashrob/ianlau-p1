export default function Tutorial34(props) {
  return (
    <div className="main-menu">
      <h4>When the timer is up, you can only place the bullets.</h4>
      <h4>After each round, up to 4 pattern cards will be drawn.</h4>
      <div>
        <h4>Here are the incoming bullet no. of each round.</h4>

        <h6>1. 10 bullets, </h6>
        <h6>
          2. 4 bullets + no. of all the bullets you cleared in the 1st rd.{" "}
        </h6>
        <h6>
          3. 5 bullets + no. of all the bullets you cleared in the 2nd rd.
          ...and so on
        </h6>
      </div>
      <h3>Enjoy your game!</h3>
      <button className="main-menu-button" onClick={props.handleReset}>
        Main Menu
      </button>
      <br />
    </div>
  );
}
