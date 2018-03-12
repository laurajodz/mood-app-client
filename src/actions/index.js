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
