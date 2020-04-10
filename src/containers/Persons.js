import React from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as personsActions from '../store/actions/persons';

const Persons = ({ onAddedPerson, persons, onRemovedPerson }) => (
    <div>

        <AddPerson personAdded={ onAddedPerson } />

        {
            persons.map(({ id, name, age }) => (
                <Person 
                    key={ id }
                    name={ name } 
                    age={ age } 
                    clicked={ () => onRemovedPerson(id) }
                />
            ))
        }

    </div>
);

const mapStateToProps = state => ({
    persons: state.persons.persons
});

const mapDispatchToProps = dispatch => ({
    onAddedPerson: () => dispatch(personsActions.addPerson()),
    onRemovedPerson: (id) => dispatch(personsActions.removePerson(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);