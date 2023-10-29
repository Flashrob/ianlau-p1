import React from "react";
import "./App.css";
import Header from "./Layout/Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: "",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="game-board">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
