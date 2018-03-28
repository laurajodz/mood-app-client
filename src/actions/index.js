import {API_BASE_URL} from '../config';

export const ADD_MOOD = 'ADD_MOOD';
export const addMood = mood => ({
    type: ADD_MOOD,
    mood
});

export const ADD_MOOD_TYPES = 'ADD_MOOD_TYPES';
export const addMoodTypes = moodTypes => ({
    type: ADD_MOOD_TYPES,
    moodTypes
});

export const REMOVE_MOOD_TYPES = 'REMOVE_MOOD_TYPES';
export const removeMoodTypes = moodTypes => ({
  type: REMOVE_MOOD_TYPES,
  moodTypes
});

export const ADD_SLEEP = 'ADD_SLEEP';
export const addSleep = sleep => ({
    type: ADD_SLEEP,
    sleep
});

export const ADD_EATING = 'ADD_EATING';
export const addEating = eating => ({
    type: ADD_EATING,
    eating
});

export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = exercise => ({
    type: ADD_EXERCISE,
    exercise
});

export const ADD_NOTES = 'ADD_NOTES';
export const addNotes = notes => ({
    type: ADD_NOTES,
    notes
});

export const fetchEntries = () => dispatch => {
    dispatch(fetchEntriesRequest());
    fetch(`${API_BASE_URL}/entries`)
        .then(res => res.json())
        .then(entries => {
            dispatch(fetchEntriesSuccess(entries));
        })
        .catch(error => {
            dispatch(fetchEntriesError(error));
        });
};

export const FETCH_ENTRIES_REQUEST = 'FETCH_ENTRIES_REQUEST';
export const fetchEntriesRequest = () => ({
    type: FETCH_ENTRIES_REQUEST
});

export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';
export const fetchEntriesSuccess = entries => ({
    type: FETCH_ENTRIES_SUCCESS,
    entries
});

export const FETCH_ENTRIES_ERROR = 'FETCH_ENTRIES_ERROR';
export const fetchEntriesError = error => ({
    type: FETCH_ENTRIES_ERROR,
    error
});

export const addEntry = (entry) => dispatch => {
    dispatch(addEntryRequest());
    fetch(`${API_BASE_URL}/entries`, {
        method: 'post',
        body: JSON.stringify(entry),
        headers:{
            "Content-type": 'application/json'
        }
    })
        .then(res => res.json())
        .then(entry => {
            dispatch(addEntrySuccess(entry));
        })
        .catch(error => {
            dispatch(addEntryError(error));
        });
};

export const ADD_ENTRY_REQUEST = 'ADD_ENTRY_REQUEST';
export const addEntryRequest = () => ({
    type: ADD_ENTRY_REQUEST
});

export const ADD_ENTRY_SUCCESS = 'ADD_ENTRY_SUCCESS';
export const addEntrySuccess = entry => ({
    type: ADD_ENTRY_SUCCESS,
    entry
});

export const ADD_ENTRY_ERROR = 'ADD_ENTRY_ERROR';
export const addEntryError = error => ({
    type: ADD_ENTRY_ERROR,
    error
});

export const editEntry = (entry) => dispatch => {
    dispatch(editEntryRequest());
    fetch(`${API_BASE_URL}/entries`)
        .then(res => res.json())
        .then(entry => {
            dispatch(editEntrySuccess(entry));
        })
        .catch(error => {
            dispatch(editEntryError(error));
        });
};

export const EDIT_ENTRY_REQUEST = 'EDIT_ENTRY_REQUEST';
export const editEntryRequest = () => ({
    type: EDIT_ENTRY_REQUEST
});

export const EDIT_ENTRY_SUCCESS = 'EDIT_ENTRY_SUCCESS';
export const editEntrySuccess = entry => ({
    type: EDIT_ENTRY_SUCCESS,
    entry
});

export const EDIT_ENTRY_ERROR = 'EDIT_ENTRY_ERROR';
export const editEntryError = error => ({
    type: EDIT_ENTRY_ERROR,
    error
});
