import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Segment, Card} from 'semantic-ui-react';

import './App.css';
import PlayerCard from './components/PlayerCard';
import {useDarkMode} from './components/useDarkMode';


const App = () => {

const [players, setPlayers] = useState([])

const [darkMode, setDarkMode] = useDarkMode(false);
const toggleMode = e => {
  e.preventDefault();
  setDarkMode(!darkMode);
};
  useEffect(() => {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      setPlayers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

      return (
        <div className='container'>
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
          <Segment >
            <Card.Group>

            {players.map((player, index) => {
            return(
              <PlayerCard key={index} player={player} />
            )
          })}
            </Card.Group>
          </Segment>
        </div>
        
      )
}


export default App;
