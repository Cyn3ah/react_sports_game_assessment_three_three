import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/Game';
import Team from './components/team/Team';
import Scoreboard from './components/scoreboard/Scoreboard';
import './App.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
      <Game />
      <Team />
      <Scoreboard />
    </div>
  );
}

export default App;
