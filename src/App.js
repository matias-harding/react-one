import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 25},
      {name: 'Matt', age: 36},
      {name: 'Alejandro', age: 44}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is a paragraph</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobies: Aviation</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a title'));
  }
}

export default App;
