import * as actions from '../actions';

const initialState = {
    newEntry: {
        date: null,
        mood: null,
        moodTypes: [],
        sleep: null,
        eating: null,
        exercise: null,
        notes: null
    },
    entries: [],
    error: null
};

export const entryReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_MOOD) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, mood: action.mood}
        })
    } else if (action.type === actions.ADD_MOOD_TYPES) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry,
                moodTypes: [...state.newEntry.moodTypes, action.moodTypes]
            }
        })
    } else if (action.type === actions.ADD_SLEEP) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, sleep: action.sleep}
        })
    } else if (action.type === actions.ADD_EATING) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, eating: action.eating}
        })
    } else if (action.type === actions.ADD_EXERCISE) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, exercise: action.exercise}
        })
    } else if (action.type === actions.ADD_NOTES) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, notes: action.notes}
        })
    } else if (action.type === actions.FETCH_ENTRIES_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRIES_SUCCESS) {
        return Object.assign({}, state, {
            entries: action.entries,
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    } else if (action.type === actions.ADD_ENTRY_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.ADD_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entries: [...state.entries, {
                ...state.newEntry, date: Date.now()
            }],
            error: null
        })
    } else if (action.type === actions.ADD_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    } else if (action.type === actions.EDIT_ENTRY_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.EDIT_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entries: [...state.entries, {
                ...state.newEntry, date: Date.now()
            }],
            error: null
        })
    } else if (action.type === actions.EDIT_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    }
    return state;
};
