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
    error: null,
    moods: [
      {
        name: 'bad',
        colour: 'red',
        value:1,
        id: 'mood1'
      },
      {
        name: 'meh',
        colour: 'orange',
        value:2,
        id: 'mood2'
      },
      {
        name: 'okay',
        colour: 'yellow',
        value:3,
        id: 'mood3'
      },
      {
        name: 'good',
        colour: 'chartreuse',
        value:4,
        id: 'mood4'
      },
      {
        name: 'great',
        colour: 'green',
        value:5,
        id: 'mood5'
      }
    ],
    types: [
      {name: 'happy'},
      {name: 'excited'},
      {name: 'optimistic'},
      {name: 'relaxed'},
      {name: 'great'},
      {name: 'silly'},
      {name: 'energetic'},
      {name: 'sad'},
      {name: 'angry'},
      {name: 'restless'},
      {name: 'nervous'},
      {name: 'pessimistic'},
      {name: 'bad'},
      {name: 'irritated'}
    ]
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
