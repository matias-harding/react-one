import React, { Component } from 'react';
import classes from './App.module.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      { id: 'kdf', name: 'Max', age: 28 },
      { id: '2r786t4', name: 'Matias', age: 29 },
      { id: 'mxnbv', name: 'Andres', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {

    let persons = null;

    let btnClass = [classes.Button];

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( 'red' ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Su app</h1>
          <p className={assignedClasses.join( ' ' )}>en React!</p>
          <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
            Clickea!
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
