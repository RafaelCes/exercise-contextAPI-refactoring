import React from 'react';
import './App.css';
import carContext from './CarContext';
import Cars from './Cars';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color) {
    this.setState((previousState) => ({
      [color]: !previousState[color],
    }));
  }

  render(){
    const carObj = { 
      red: this.state.red,
      blue: this.state.blue,
      yellow: this.state.yellow,
      moveCar: this.moveCar,
    }
    
    return (
      <carContext.Provider value={carObj}>
        <Cars />
      </carContext.Provider>
      );
    }
  }

export default App;
