import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Counter from "./components/Counters/Counter";
import { images, otherArr } from "./components/Images";

class App extends React.Component {
  state = { likes: 0, dislike: 0, imgAndTitle: ["", ""], index: 1 };

  componentDidMount() {
    this.setState({ imgAndTitle: [images[0].url, images[0].name] });
  }

  handleLikesClick = () => {
    console.log(this.state.index);
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1,
        index: prevState.index + 1,
        imgAndTitle: [
          images[this.state.index].url,
          images[this.state.index].name,
        ],
      };
    });
  };
  handleDisLikesClick = () => {
    this.setState((prevState) => {
      return {
        dislike: prevState.dislike + 1,
        index: prevState.index + 1,
        imgAndTitle: [
          images[this.state.index].url,
          images[this.state.index].name,
        ],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="counter-container">
          <Counter
            value={this.state.likes}
            givenClassName="green"
            imgURL={otherArr[0].picture}
          />
          <Counter
            value={this.state.dislike}
            givenClassName="red"
            imgURL={otherArr[1].picture}
          />
        </div>
        <Card
          imgUrl={this.state.imgAndTitle[0]}
          text={this.state.imgAndTitle[1]}
        />
        <Button
          name="Like"
          handleClick={this.handleLikesClick}
          iconURL={otherArr[2].picture}
        />
        <Button
          name="Dislike"
          handleClick={this.handleDisLikesClick}
          iconURL={otherArr[3].picture}
        />
      </div>
    );
  }
}

export default App;
