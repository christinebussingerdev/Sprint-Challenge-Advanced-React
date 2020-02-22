import React from 'react';

const PlayerCard = props => {
    console.log(props)
    return (
        <div className="card">
            <div>
                <h2 className="name">{props.player.name}</h2>
                <h6>{props.player.country}</h6>
            </div>
            <div className="searches">
                <h4>Searches: </h4>
                <h2>{props.player.searches}</h2>
            </div>
        </div>
    )
}

export default PlayerCard;