import * as PersonsTypes from '../types/persons';

export const addPerson = (person) => ({
    type: PersonsTypes.ADD_PERSON,
    payload: {
        person
    }
});

export const removePerson = (id) => ({
    type: PersonsTypes.REMOVE_PERSON,
    payload: {
        id
    }
});
