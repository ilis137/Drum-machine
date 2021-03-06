import React, { Component } from "react";
import Controls from "./Controls/Controls";
import PadBank from "./PadBank/PadBank";
import "./DrumMachine.css";
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

class DrumMachine extends Component {
  state = {
    power: "on",
    volume: 50,
    bank: bankOne,
    display: ""
  };
  handlePowerChange = () => {
    const newPowerState = this.state.power === "on" ? "off" : "on";
    this.setState({ power: newPowerState });
  };
  handleBank = () => {
    const updatedBank = this.state.bank === bankOne ? bankTwo : bankOne;
    this.setState({ bank: updatedBank });
    console.log(this.state.bank === bankTwo);
  };
  handleVolume = e => {
    const value = e.target.value;
    const newVolume = parseInt(value * 100);
    this.setState({ volume: newVolume });
    this.display("Volume:" + newVolume);
  };
  playSound = e => {
    const sound = e.target.value;
    const audio = new Audio(sound);
    console.log(sound);
    audio.volume = this.state.volume / 100;
    audio.play();
    this.display(e.target.id);
  };
  handleKey = e => {
    const keyPressed = e.key.toUpperCase();
    this.state.bank.forEach(el => {
      if (el.keyTrigger === keyPressed) {
        const audio = new Audio(el.url);
        console.log(el.url);
        audio.volume = this.state.volume / 100;
        audio.play();
      }
    });
    this.display(e.target.id);
  };
  display(el) {
    clearTimeout(this.displayTime);
    this.setState({ display: el });
    this.displayTime = setTimeout(() => {
      this.setState({ display: "" });
    }, 1000);
  }
  render() {
    return (
      <div className="DrumMachine" onKeyDown={this.handleKey}>
        <PadBank
          power={this.state.power === "on"}
          playSound={this.playSound}
          bank={this.state.bank}
        />
        <Controls
          power={this.state.power === "on"}
          powerChange={this.handlePowerChange}
          volume={this.state.volume}
          adjustVolume={this.handleVolume}
          bank={this.state.bank === bankTwo}
          bankChange={this.handleBank}
          display={this.state.display}
        />
      </div>
    );
  }
}
export default DrumMachine;
