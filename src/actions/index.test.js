import {
    ADD_MOOD,
    addMood,
    ADD_MOOD_TYPES,
    addMoodTypes,
    REMOVE_MOOD_TYPES,
    removeMoodTypes,
    ADD_SLEEP,
    addSleep,
    ADD_EATING,
    addEating,
    ADD_EXERCISE,
    addExercise,
    ADD_NOTES,
    addNotes,
    fetchEntry,
    fetchEntries,
    addEntry,
    editEntry
} from './index';

describe('ADD_MOOD', () => {
    it('Should return the action', () => {
        const mood = 3;
        const action = addMood(mood);
        expect(action.type).toEqual(ADD_MOOD);
        expect(action.mood).toEqual(mood);
    });
});

describe('ADD_MOOD_TYPES', () => {
    it('Should return the action', () => {
        const moodTypes = ["happy"];
        const action = addMoodTypes(moodTypes);
        expect(action.type).toEqual(ADD_MOOD_TYPES);
        expect(action.moodTypes).toEqual(moodTypes);
    });
});

describe('REMOVE_MOOD_TYPES', () => {
    it('Should return the action', () => {
        const moodTypes = ["sad"];
        const action = removeMoodTypes(moodTypes);
        expect(action.type).toEqual(REMOVE_MOOD_TYPES);
        expect(action.moodTypes).toEqual(moodTypes);
    });
});

describe('ADD_SLEEP', () => {
    it('Should return the action', () => {
        const sleep = 4;
        const action = addSleep(sleep);
        expect(action.type).toEqual(ADD_SLEEP);
        expect(action.sleep).toEqual(sleep);
    });
});
