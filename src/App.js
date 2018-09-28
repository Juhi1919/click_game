/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>Juhi Patel</h1>
        </header>
        
      </div>
    );
  }
}

export default App;
*/
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import cardscore from "./components/cardscore";
import friend from "./friendcards.json";
import "./App.css";

/*const App = () => (
  <Wrapper>
   
    <FriendCard
      name={friendcards[0].name}
      image={friendcards[0].image}
      />
    <FriendCard
      name={friendcards[1].name}
      image={friendcards[1].image}
      />
    <FriendCard
      name={friendcards[2].name}
      image={friendcards[2].image}
      />
	 <FriendCard
      name={friendcards[3].name}
      image={friendcards[3].image}
      />
      <FriendCard
      name={friendcards[4].name}
      image={friendcards[4].image}
      />
      <FriendCard
      name={friendcards[5].name}
      image={friendcards[5].image}
      />
	 
  </Wrapper>
);*/
class App extends Component {
  // Setting this.state.cartoon to the cards json array
  state = {
     friend,
    clickId: [],
    Score: 0,
    goal: 6,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  ScoreCard = id => {
    let clickId = this.state.clickId;

    if(clickId.includes(id)){
      this.setState({clickId: [], score: 0, status:"Game Over! Click to play again!"});
      return;
    }
    else{
      clickId.push(id)

      if(clickId.length === 6){
        this.setState({score: 6, status: "You Won!!", clickId: []});
        console.log('You Win');
        return;
      }

      this.setState({friend, clickId, score: clickId.length, status: " " });

      for (let i =friend.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friend[j]] =[friend[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="main">
        <header className="header">
          <h1 className="title">The Click Game</h1>
          <p className="content">
            Not try to click the same image twice!
          </p>
        </header>
        
        <Wrapper>
          {this.state.friend.map(friend => (
            <FriendCard
            ScoreCard={this. ScoreCard}
              name={friend.name}
              id={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
        
    </div>
    );
  }
}

export default App;