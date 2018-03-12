import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {entryReducer} from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        entry: entryReducer
    })
);
