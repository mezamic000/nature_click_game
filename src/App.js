import React, { useState } from "react";
import SceneryCard from "./components/SceneryCard";
import Wrapper from "./components/Wrapper";
import initialScenerys from "./scenery.json";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";

function randomScenerys(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]]
  }
  return array
}

const App = () => {

  const [scenerys, setScenerys] = useState(initialScenerys);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [outcome, setOutcome] = useState("");

  const clickHandler = id => {
    if (clicked.indexOf(id) === -1) {
      incrementHandler()
      setClicked(clicked.concat(id))
    }
    else {
      resetScore()
    }
  }

  const incrementHandler = () => {
    const newScore = score + 1

    setScore(newScore) 
    setOutcome("")
    

    if (newScore >= highScore) {
      setHighScore(newScore)
    }

    else if (newScore === 24) {
      setOutcome("You Win!")
    }
    shuffle()
  }

  const resetScore = () => {
    setScore(0)
    setHighScore(highScore)
    setOutcome("You lost! Click any image to restart!")
    setClicked([])
  }

  const shuffle = () => {
    let shuffledScenerys = randomScenerys(scenerys)
    setScenerys(shuffledScenerys)
  }

  
    return (
      <Wrapper>
        <main className="App">
          <Navbar />
        </main>

        <header>
          <Instructions />
        </header>
        <h3>
          Score: {score} <br />
          High Score: {highScore}
        </h3>
        <h5> {outcome} </h5>
        {scenerys.map(scenery => (
          <div>
            <SceneryCard
              id={scenery.id}
              key={scenery.id}
              image={scenery.image}
              shuffle={shuffle}
              clickHandler={clickHandler}
              incrementHandler={incrementHandler}
            />
          </div>
        )).slice(0, 12)}
      </Wrapper>
    );
}

export default App;
