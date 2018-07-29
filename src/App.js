import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Bootstrap from "./components/Bootstrap";
import characters from "./characters.json";
import "./App.css";

// this function shuffles the images from friends.json
function shuffleFunction(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    clickedImages: [],
    message: "Click an image to begin!",
  };

  // shuffle tiles function
  shuffleTiles = () => {
    let shuffledCharacters = shuffleFunction(characters);
    this.setState({ characters: shuffledCharacters });
  };

  // this handles when the character tiles are clicked on
  handleClick = id => {
      if (this.state.clickedImages.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clickedImages: this.state.clickedImages.concat(id) });
      } else {
        this.handleReset();
      }
    };

  // this is when the counter increments
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });

    // if the current score is 12, do this
    newScore === 12 ? (
      this.setState({
        message: "You win!",
        topScore: newScore
      })
    ) : (
      newScore >= this.state.topScore ? (
        this.setState({ topScore: newScore })
      ) : (
        this.shuffleTiles()
      )
    );

    this.shuffleTiles();
  };

  // resets the game
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Start Over!",
      clickedImages: []
    });
    this.shuffleTiles();
  };


  // the page renders this
  render() {
    return (
    <div>
      <Bootstrap
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        message={this.state.message}
      />
      <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            handleClick={this.handleClick}
            handleShuffle={this.handleShuffle}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
