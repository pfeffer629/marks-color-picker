import React, { Component } from "react";
import logo from "./logo.svg";
import Slider from 'react-input-slider';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      red: "0",
      green: "0",
      blue: "0",
      alpha: "1",
      error: ""
    }

    this.changeColor = this.changeColor.bind(this);
    this.changeAlpha = this.changeAlpha.bind(this);
    }

  changeColor(e) {
    e.preventDefault();

    if (e.target.value < 0 || e.target.value > 255) {
      this.setState({error: "Red, Green, and Blue values must be between 0 and 255"})
    } else {
      this.setState({[e.target.name]: e.target.value, error: ""})
    }
  }

  changeAlpha(value) {
    this.setState({alpha: parseFloat(value.x.toFixed(2)), error: ""})
  }

  render() {
    const inputs = ['red', 'blue', 'green'].map(color => 
      <div 
        className="Input-container" 
        key={color}
      >
        <label style={{color: color}}>{color}</label>
        <input 
          type="number" 
          name={color} 
          onChange={this.changeColor}
          style={{borderColor: color}}
          value={this.state[color]}
        />
      </div>
    )

    return (
      <div className="App" style={{backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha})`}}>
        <div className="Container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGAgvreMobH7a6cFVGryY1zBrdhT28GIbph-hpKlqsCQSnR9i" />
          <h2>Mark's Color Picker</h2>
          <p className="Error">{this.state.error}</p>
          {inputs}
          <div className="Input-container">
            <label>Alpha - {this.state.alpha}</label>
            <div>
              <Slider
                name="alpha"
                axis="x"
                xstep={0.1}
                xmin={0}
                xmax={1}
                x={this.state.alpha}
                onChange={(x) => this.changeAlpha(x)}
                styles={{
                  track: {
                    backgroundColor: "#d3d3d3",
                    width: "100%"
                  },
                  active: {
                    backgroundColor: "#d3d3d3"
                  },
                  thumb: {
                    backgroundColor: "#000",
                    cursor: "grab"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
