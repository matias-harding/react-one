import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 25},
      {name: 'Matt', age: 36},
      {name: 'Alejandro', age: 44}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name: 'Matt', age: 36},
        {name: 'Alejandro', age: 21}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 25},
        {name: event.target.value, age: 36},
        {name: 'Alejandro', age: 21}
      ]
    });
  }

  render() {
    // JS styleMe Object
    const styleMe = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px #ccc'
    };

    return (
      <div className="App">
        <h1>Holanda</h1>
        <p>Esto es su parrafo</p>
        <button 
        style={styleMe} 
        onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Tú, lo PISAS!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Matts!!')} 
          changed={this.nameChangedHandler} 
          > My hobbies: Aviador</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a title'));
  }
}

export default App;
