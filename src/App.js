import React, { Component } from "react";
import SceneryCard from "./components/SceneryCard";
import Wrapper from "./components/Wrapper";
import scenerys from "./scenery.json";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";

function randomScenerys(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]]
  }
  return array
}

class App extends Component {
  state = {
    scenerys,
    score: 0,
    highScore: 0,
    clicked: [],
    outcome: ""
  };

  clickHandler = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.incrementHandler()
      this.setState({ clicked: this.state.clicked.concat(id) })
    }
    else {
      this.resetScore()
    }
  }

  incrementHandler = () => {
    const newScore = this.state.score + 1
   
    this.setState({
      score: newScore,
      outcome: ""
    })
   
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore })
    }
   
    else if (newScore === 24) {
      this.setState({ outcome: "You win!" })
    }
    this.shuffle()
  }

  resetScore = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      outcome: "You lost! Click any image to restart!",
      clicked: []
    })
  }

  shuffle = () => {
    let shuffledScenerys = randomScenerys(scenerys)
    this.setState({ scenerys: shuffledScenerys })
  }

  render() {
    return (
      <Wrapper>
        <Router>
          <main className="App">
            <Navbar />
          </main>
          <header>
            <Instructions />
          </header>
        </Router>
        <h3>
          Score: {this.state.score} <br/>
          High Score: {this.state.highScore}
        </h3>
        <h5> {this.state.outcome} </h5>
        {this.state.scenerys.map(scenery => (
          <div>
            <SceneryCard
              id={scenery.id}
              key={scenery.id}
              image={scenery.image}
              shuffle={this.shuffle}
              clickHandler={this.clickHandler}
              incrementHandler={this.incrementHandler}
            />
          </div>
        )).slice(0, 12)}
      </Wrapper>
    );
  }
}

export default App;
