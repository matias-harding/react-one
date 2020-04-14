import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log("Persons -> getDerivedStateFromProps");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Persons -> shouldComponentUpdate");
        return true;
    }

    // componentWillUpdate() {
    // Not in use.
    // }

    componentWillUnmount(){
        console.log("Persons -> componentWillUnmount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Persons -> getSnapshotBeforeUpdate ");
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Persons -> componentDidUpdate");
        console.log(snapshot);
    }

    render () {
        console.log("[Persons.js] rendering...");
        return this.props.persons.map( ( person, index ) => {
            return (
                <Person
                    click={() => this.props.clicked( index )}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={( event ) => this.props.changed( event, person.id )} 
                />
            );       
        });
    }
};

export default Persons;