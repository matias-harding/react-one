import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log("[cockpit.js] -> useEffect");
        //HTTTP request...
        setTimeout(() => {
            alert('saved Data to Cloud!');
        },1000);
        return () => {
            console.log("[cockpit.js] -> cleanup in useEffect");
        }
    }, []);

    useEffect(() => {
        console.log("[cockpit.js] -> 2nd useEffect");
        return () => {
            console.log("[cockpit.js] -> cleanup in 2nd useEffect");
        }
    });

    const assignedClasses = [];
    // let btnClass = '';
    let btnClass = [classes.Button];
    if (props.showPersons){
        // btnClass = classes.Red;
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
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>en React!</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
                Clickea!
            </button>
        </div>
    );
}

export default cockpit;