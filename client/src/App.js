import React from 'react';
import axios from 'axios';
import {Segment, Card} from 'semantic-ui-react';

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
        <div className='container'>
          <Segment >
            <Card.Group>

            {this.state.players.map((player, index) => {
            return(
              <PlayerCard key={index} player={player} />
            )
          })}
            </Card.Group>
          </Segment>
        </div>
        
      )
    }
}



export default App;
