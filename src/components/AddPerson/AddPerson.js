import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: '',
        age: 0
    };

    inputChangedHandler = inputName => e => {
        const value = e.target.value;
        this.setState(() => ({ [inputName]: value }))
    }


    render() {
        return (
            <div className="AddPerson">

                <input 
                    type="text" 
                    placeholder="Name"
                    value={ this.state.name }
                    onChange={ this.inputChangedHandler('name') }
                />

                <input 
                    type="number" 
                    placeholder="Age"
                    value={ this.state.age }
                    onChange={ this.inputChangedHandler('age') }
                />

                <button onClick={ () => this.props.personAdded({ id: Math.random(), ...this.state }) }>
                    Add Person
                </button>

            </div>
        );
    }

}

export default AddPerson;