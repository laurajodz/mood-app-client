import * as actions from '../actions';

const initialState = {
    isHidden: true,
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
      {name: 'hopeful'},
      {name: 'relaxed'},
      {name: 'great'},
      {name: 'silly'},
      {name: 'engaged'},
      {name: 'sad'},
      {name: 'angry'},
      {name: 'restless'},
      {name: 'nervous'},
      {name: 'tired'},
      {name: 'bad'},
      {name: 'irritated'}
    ],
    sleeps: [
      {
        name: 'bad',
        colour: 'red',
        value:1,
        id: 'sleep1'
      },
      {
        name: 'meh',
        colour: 'orange',
        value:2,
        id: 'sleep2'
      },
      {
        name: 'okay',
        colour: 'yellow',
        value:3,
        id: 'sleep3'
      },
      {
        name: 'good',
        colour: 'chartreuse',
        value:4,
        id: 'sleep4'
      },
      {
        name: 'great',
        colour: 'green',
        value:5,
        id: 'sleep5'
      }
    ],
    eatings: [
      {
        name: 'bad',
        colour: 'red',
        value:1,
        id: 'eating1'
      },
      {
        name: 'meh',
        colour: 'orange',
        value:2,
        id: 'eating2'
      },
      {
        name: 'okay',
        colour: 'yellow',
        value:3,
        id: 'eating3'
      },
      {
        name: 'good',
        colour: 'chartreuse',
        value:4,
        id: 'eating4'
      },
      {
        name: 'great',
        colour: 'green',
        value:5,
        id: 'eating5'
      }
    ],
    exercises: [
      {
        value: 'yes',
        id: 'exercise1'
      },
      {
        value: 'no',
        id: 'exercise2'
      }
    ],
    notes: null
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
    } else if (action.type === actions.REMOVE_MOOD_TYPES) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry,
                moodTypes: state.newEntry.moodTypes.filter(moodType => {
                    return moodType !== action.moodTypes
                })
            }
        });
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
    } else if (action.type === actions.FETCH_ENTRY_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entries: action.entry,
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
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
                ...state.newEntry
            }],
            newEntry: {
              date: null,
              mood: null,
              moodTypes: [],
              sleep: null,
              eating: null,
              exercise: null,
              notes: null
            },
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
                ...state.editedEntry
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
