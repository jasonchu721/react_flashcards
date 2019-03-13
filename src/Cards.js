// import React from 'react';
// import { Flashcard, } from 'Flashcard';

// const Cards = ({flashcards, remove, toggle}) => (
//   flashcards.map( flashcard => (
//     <Flashcard key={flashcard.id} flashcard={flashcard} remove={remove} toggle={toggle} />
//   ))
// )

// export default Cards

import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Cards = ({ varCards, remove, toggle}) => (
  <Card.Group>
    {
      varCards.map( card => (
        <Card key ={card.id} {...card}  toggle={toggle}>

            <Card.Content>
              <Card.Header> Flashy Card</Card.Header>
              <Card.Description> Q: {card.front} </Card.Description>
              <Card.Description> A: {card.back} </Card.Description>

            </Card.Content>

            <Card.Content extra>
              <div className='ui three buttons'>
                <Button color='facebook'> Edit </Button>
                {console.log(card.id)}
                <Button color='purple' onClick={() =>
                remove(card.id)}> Delete</Button>
                <Button color='green' onClick={() =>
                this.toggleBack()}> Flip </Button>
              </div>
            </Card.Content>
          </Card>
      ))
    }
  </Card.Group>
);

export default Cards;