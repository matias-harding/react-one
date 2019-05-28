import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Alejandro', age: 26}
    ],
    otherState: 'some other value'
  });
  
  const [otherState, setOtherState] = useState('some other state');

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // NOT's: this.state.person[0].name = 'Lolo Palanca';
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 25},
        {name: 'Matt', age: 36},
        {name: 'Alejandro', age: 21}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>This is a paragraph</p>
      <button onClick={switchNameHandler}>Switch Me!!</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My hobies: Aviation</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a title'));
}

export default app;