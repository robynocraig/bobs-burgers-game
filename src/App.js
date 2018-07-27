import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Bootstrap from "./components/Bootstrap";
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
    friends,
    currentScore: 0,
    topScore: 0,
    clickedImages: [],
    message: "Click an image to begin!",
  };

  // shuffle image function
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  handleClick = id => {
      if (this.state.clickedImages.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clickedImages: this.state.clickedImages.concat(id) });
      } else {
        this.handleReset();
      }
    };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ message: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Start Over!",
      clicked: []
    });
    this.handleShuffle();
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    <div>
      <Bootstrap
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        message={this.state.message}
      />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            handleShuffle={this.handleShuffle}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
