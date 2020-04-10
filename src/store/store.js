import { createStore, combineReducers } from 'redux';

import personsReducer from './reducers/persons';

const rootReducer = combineReducers({
    persons: personsReducer
});

export default createStore(rootReducer);
