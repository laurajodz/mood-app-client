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

export const ADD_ENTRY = 'ADD_ENTRY';
export const addEntry = () => ({
    type: ADD_ENTRY
});

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

export const fetchEntries = () => dispatch => {
    dispatch(fetchEntriesRequest());
    fetch(`${API_BASE_URL}/entries`)
        .then(entries => {
            dispatch(fetchEntriesSuccess(entries));
        })
        .catch(error => {
            dispatch(fetchEntriesError(error));
        });
};
