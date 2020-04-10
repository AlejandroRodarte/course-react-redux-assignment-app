import * as PersonsTypes from '../types/persons';

const initialState = {
    persons: []
};

export default function(state = initialState, action) {

    switch (action.type) {

        case PersonsTypes.ADD_PERSON:
            return {
                ...state,
                persons: [...state.persons, action.payload.person]
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
