import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];

    // let btnClass = '';
    let btnClass = [classes.Button];

    if (props.showPersons){

        btnClass.push(classes.Red);
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( 'red' ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Su app</h1>
            <p className={assignedClasses.join( ' ' )}>en React!</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
                Clickea!
            </button>
        </div>
    );
}

export default cockpit;