import React from 'react';
import { Segment, Card, Icon } from 'semantic-ui-react';

const PlayerCard = props => {
    console.log(props)
    return (
            <Card className='card'>
                <Card.Content>
                    <Card.Header>{props.player.name}</Card.Header>
                        <Card.Meta><Icon name='globe' />  {props.player.country}</Card.Meta>
                    <Card.Content extra>
                        <Card.Meta><strong>Searches: </strong>{props.player.searches}</Card.Meta>
                    </Card.Content>
                </Card.Content>
            </Card>
    )
}

export default PlayerCard;