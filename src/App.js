import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is a paragraph</p>
        <Person name="Max" age="25" />
        <Person name="Matt" age="36" > My hobies: Aviation</Person>
        <Person name="Alejandro" age="44" />
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a title'));
  }
}

export default App;
