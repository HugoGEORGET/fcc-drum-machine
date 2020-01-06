import React from "react";

class DrumPad extends React.Component {
  constructor() {
    super();
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    this.displaySoundName();
  }

  displaySoundName() {
    document.getElementById("display").innerHTML = this.props.id;
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playSound}>
        {this.props.keyTrigger}
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.url}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
