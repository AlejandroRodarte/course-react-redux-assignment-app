import * as PersonsTypes from '../types/persons';

export const addPerson = () => ({
    type: PersonsTypes.ADD_PERSON
});

export const removePerson = (id) => ({
    type: PersonsTypes.REMOVE_PERSON,
    payload: {
        id
    }
});
