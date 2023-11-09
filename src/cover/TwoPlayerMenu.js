import React from "react";

export default class TwoPlayerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name1: "Player1", name2: "Player2" };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handlePlayerName(this.state.name1, this.state.name2);
  };

  render() {
    return (
      <div className="main-menu">
        <h4>
          In this game mode, you two have to survived longer than the others in
          order to win.
        </h4>
        <h5>
          For additional Information, your erased bullet amount in this round
          will be part of the opponent next round imcoming bullet amount .
        </h5>
        <h4>Try clear more bullet!</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Player 1's name:</label>
            <input
              name="name1"
              value={this.state.name1}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Player 2's name:</label>
            <input
              name="name2"
              value={this.state.name2}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Player 1 go!" />
        </form>
      </div>
    );
  }
}
