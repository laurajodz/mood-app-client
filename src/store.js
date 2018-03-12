import {createStore} from 'redux'

import {entryReducer} from './reducers';

export default createStore(entryReducer);
