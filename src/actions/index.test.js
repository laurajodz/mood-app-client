import {
    ADD_MOOD,
    ADD_MOOD_TYPES,
    REMOVE_MOOD_TYPES,
    ADD_SLEEP
} from './index';

describe('ADD_MOOD', () => {
    it('Should return the action', () => {
        const mood = 3;
        const action = ADD_MOOD(mood);
        expect(action.type).toEqual(ADD_MOOD);
        expect(action.mood).toEqual(mood);
    });
});

describe('ADD_MOOD_TYPES', () => {
    it('Should return the action', () => {
        const moodTypes = ["happy"];
        const action = ADD_MOOD_TYPES(moodTypes);
        expect(action.type).toEqual(ADD_MOOD_TYPES);
        expect(action.mood).toEqual(moodTypes);
    });
});

describe('REMOVE_MOOD_TYPES', () => {
    it('Should return the action', () => {
        const moodTypes = ["sad"];
        const action = REMOVE_MOOD_TYPES(moodTypes);
        expect(action.type).toEqual(REMOVE_MOOD_TYPES);
        expect(action.moodTypes).toEqual(moodTypes);
    });
});

describe('ADD_SLEEP', () => {
    it('Should return the action', () => {
        const sleep = 4;
        const action = ADD_SLEEP(sleep);
        expect(action.type).toEqual(ADD_SLEEP);
        expect(action.sleep).toEqual(sleep);
    });
});
