import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

    constructor(props){
        super(props);
        console.log('[App.js] constructor');

        // OLD SYNTAX state
        // this.state = {
        //   persons: [
        //     { id: 'kdf', name: 'Max', age: 28 },
        //     { id: '2r786t4', name: 'Matias', age: 29 },
        //     { id: 'mxnbv', name: 'Andres', age: 26 }
        //   ],
        //   otherState: 'some other value',
        //   showPersons: false
        // }
    }

    // MODERN SYNTAX state
    state = {
        persons: [
        { id: 'kdf', name: 'Max', age: 28 },
        { id: '2r786t4', name: 'Matias', age: 29 },
        { id: 'mxnbv', name: 'Andres', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps(props, state){
        console.log("[App.js] getderivedStateFromProps", props);
        return state;
    }

    componentDidMount(){
        console.log("[App.js] componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js] -> shouldComponentUpdate");
        return true;
    }
    
    componentDidUpdate(){
        console.log("[App.js] componentDidUpdate");
    }

    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
        } );

        //Proper object update. 
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        //Proper array update. 
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
        console.log("[App.js] render");
        
        let persons = null;

        if ( this.state.showPersons ) {
        persons = <Persons
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
            />;
        }

        return (
            <div className={classes.App}>
            <button onClick={() => {
                    this.setState({showCockpit: false })
                }}
            > Remove Cockpit</button>
            {this.state.showCockpit ? <Cockpit
                title={this.props.appTitle}
                showPersons = {this.state.showPersons}
                persons = {this.state.persons}
                clicked = {this.togglePersonsHandler}
            /> : null}
            {persons}
            </div>
        );
    }
}

export default App;
