export const ADD_ENTRY = 'ADD_ENTRY';
export const addEntry = (date, mood, moodTypes, sleep, eating, exercise, notes) => ({
    type: ADD_ENTRY,
    date,
    mood,
    moodTypes,
    sleep,
    eating,
    exercise,
    notes
});

export const ADD_DATE = 'ADD_DATE';
export const addDate = date => ({
    type: ADD_DATE,
    date
});

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
