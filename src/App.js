import { React, Component } from 'react';
import './App.css';
import Game from "./components/Game";
import Navbar from './components/Navbar';
import Banner from './components/Banner';

class App extends Component {
  // return (
  //   <div className="App">
  //     <header className="Clicky-Game">
  //   <h1>Welcome to the Clicky-Game</h1>
  //     </header>
  //     <Game> </Game>
  //   </div>
  // );

// shuffleArray = (array) => {
//   let counter = array.length;
//   while (counter > 0) {
//       let index = Math.floor(Math.random() * counter);
//       counter--;
//       let temp = array[counter];
//       array[counter] = array[index];
//       array[index] = temp;
//   }
//   return array;
// };

  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons: [],
    gameOver: false
  };

  // componentDidMount() {
  //   this.setState({result: "Click a player to get started"});
  // }
  

// clickedPlayer = (id) => {
//   console.log(`Picture clicked with id: ${id}`);
//   if(!this.state.clicked.includes(id)){
//     this.pointIncrease();
//     this.state.clicked.push(id);
//     this.setState({
//       gameOver: false
//     });
//   } else {
//     this.resetGame();
//   }
// }





// pointIncrease = () => {
//   let score = this.state.currentScore + 1;
//   console.log(`the score is ${score}`);
//   if (score === this.state.Icons.length) {
//     this.setState({
//       result: "You win! Start clicking to play again!",
//       topScore: score,
//       currentScore: 0,
//       clicked: [],
//       Icons: [],
//       gameOver: false
//     });
//   } else if (score > this.state.topScore) {
//     this.setState({
//       topScore: score,
//       currentScore: score,
//       result: "Correct! New high score!",
//     });
//   } else {
//     this.setState({
//       currentScore: score,
//       result: "Correct!"
//     });
//   }
//   this.resetIconArray();
// }


// resetGame = () => {
//   this.setState({
//     points: 0,
//     currentScore:0,
//     topScore: this.state.topScore,
//     result: "You Loss!",
//     clicked: [],
//     Icons:[],
//     gameOver: true
//   });
//   console.log('Game over? ', this.state.gameOver);
//   this.resetIconArray();
// }

// resetIconArray = () => {
//   let newScramble = this.shuffleArray(this.state.Icons);
//   this.setState({Icons: newScramble})
// }

render() {
  return (<div className='container'>
      foo
    </div>
  );
}
}



export default App;
