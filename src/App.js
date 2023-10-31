import React from "react";
import "./App.css";
import Header from "./Layout/Header/Header";
import UpperPlayBoard from "./Layout/UpperPlayBoard/UpperPlayBoard";
import genLocationInfo from "./genLocationInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: "",
      //Column a-e, Row 0-5, E.g. a0, a1 ,a2
      locationInfo: genLocationInfo(),
    };
  }

  render() {
    return (
      <div className="App">
        <div className="game-board">
          <Header />
          <UpperPlayBoard location={this.state.locationInfo} />
        </div>
      </div>
    );
  }
}

export default App;
