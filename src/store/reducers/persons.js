import * as PersonsTypes from '../types/persons';

const initialState = {
    persons: []
};

export default function(state = initialState, action) {

    switch (action.type) {

        case PersonsTypes.ADD_PERSON:

            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            };

            return {
                ...state,
                persons: [...state.persons, newPerson]
            };

        case PersonsTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.payload.id)
            };

        default:
            return state;

    }

};
