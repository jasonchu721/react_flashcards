import React, { Component } from 'react';
import Cards from './Cards';
import CardForm from './CardForm';
import './App.css';
import { Container, Header, Button, Icon, Segment} from 'semantic-ui-react';

class App extends Component {
  state = {
    cards: [
      { id: 1, front: "Who am I?", back: "I don't know"},
      { id: 2, front: "What do you like?", back: "I love lamp"},
      { id: 3, front: "eugoogly??", back: "..."},
    ],
    showForm: false,
  }

  getId = () => Math.floor((1 + Math.random()) * 10000)
   
  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  removeCard = (id) => {
    let {cards} = this.state;
    const remaining = cards.filter( cards => {
      return (cards.id !== id)
    });
    this.setState({ cards: [...remaining], });
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  render() {
    return (
      <Container textAlign='center' style = {{ paddingtop: "30px" }}>
        <Header as = 'h1'> React Flashy Cards</Header>
        <hr />
        <br />

        <Segment basic>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name = {this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          { this.state.showForm ? <CardForm add={this.addCard} /> : null }
        </Segment>
        <br />
        <Cards varCards={this.state.cards} remove={this.removeCard}  toggle={this.toggleBack} /> 
      </Container>
    );
  }
}

export default App;
