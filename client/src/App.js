import React from 'react';
import axios from 'axios';

import './App.css';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

    componentDidMount() {
      return(
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
          console.log(res.data)
          this.setState({players: res.data})
        })
        .catch(err => {
          console.log(err)
        })
      )
    }

    render() {
      return (
        <div className="container">

          {this.state.players.map((player, index) => {
          return(
            <PlayerCard key={index} player={player} />
          )
        })}
        </div>
        
      )
    }
}



export default App;
