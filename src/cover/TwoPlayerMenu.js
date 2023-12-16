import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class TwoPlayerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name1: "Player1", name2: "Player2" };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    // what does the 15 mean?
    if (value.length < 15) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleStartTwoPlayer(this.state.name1, this.state.name2);
  };

  render() {
    return (
      <div className="main-menu">
        <h4>
          In this game mode, you two have to survive longer than the others in
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
            <InputText
              name="name1"
              value={this.state.name1}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Player 2's name:</label>
            <InputText
              name="name2"
              value={this.state.name2}
              onChange={this.handleChange}
            />
          </div>
          <Button
            type="sumbit"
            label={`${this.state.name1}, Let's go!`}
            disabled={this.state.name1 === "" || this.state.name2 === ""}
            className="main-menu-button"
          />
        </form>
      </div>
    );
  }
}
