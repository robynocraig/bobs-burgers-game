import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

// this function shuffles the images from friends.json
function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  tileClick = id => {
    // this shuffles the images
    this.handleShuffle();
  };

  // shuffle image function
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>{"Bob's Burgers - Click Away!"}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            tileClick={this.tileClick}
            handleShuffle={this.handleShuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
