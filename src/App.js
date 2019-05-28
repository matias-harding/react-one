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

  switchNameHandler = () => {
    // console.log("Was clicked!");
    // NOT's: this.state.person[0].name = 'Lolo Palanca';
    this.setState({
      persons: [
        {name: 'Maximilian', age: 25},
        {name: 'Matt', age: 36},
        {name: 'Alejandro', age: 21}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is a paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Me!!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobies: Aviation</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a title'));
  }
}

export default App;
