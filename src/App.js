import React from 'react';
import './App.css';
import Game from "./components/Game";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="Clicky-Game">
    <h1>Welcome to the Clicky-Game</h1>
      </header>
      <Game> </Game>
    </div>
  );
}

const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};
// class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,
    gameOver: false
  };


  componentDidMount() {
  this.setState({result: "Click a player to get started"})
}

// When a player gets clicked,
// increase points and add id of element to array.
clickedPlayer = (id) => {
  console.log(`Picture clicked with id: ${id}`);
  if(!this.state.clicked.includes(id)){
    this.pointIncrease();
    this.state.clicked.push(id);
    this.setState({
      gameOver: false
    });
  } else {
    this.resetGame();
  }
}





pointIncrease = () => {
  let score = this.state.currentScore + 1;
  console.log(`the score is ${score}`);
  if (score === this.state.Icons.length) {
    this.setState({
      result: "You win! Start clicking to play again!",
      topScore: score,
      currentScore: 0,
      clicked: [],
      Icons,
      gameOver: false
    });
  } else if (score > this.state.topScore) {
    this.setState({
      topScore: score,
      currentScore: score,
      result: "Correct! New high score!",
    });
  } else {
    this.setState({
      currentScore: score,
      result: "Correct!"
    });
  }
  this.resetIconArray();
}


resetGame = () => {
  this.setState({
    points: 0,
    currentScore:0,
    topScore: this.state.topScore,
    result: "You Loss!",
    clicked: [],
    Icons,
    gameOver: true
  });
  console.log('Game over? ', this.state.gameOver);
  this.resetIconArray();
}

// set the array to be mapped to a new scrambled version using shuffle algorithm
resetIconArray = () => {
  let newScramble = shuffleArray(Icons);
  this.setState({Icons: newScramble})
}

render() {
  return (
    <div className='container'>
      <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
      <Banner />
      <div className='mainStyle'>
      {this.state.Icons.map(icon => (
      <IconCard
        id={icon.id}
        image={icon.image}
        clickedPlayer={this.clickedPlayer}
      />
      ))}
      </div>
    </div>
  );
}
}



export default App;
