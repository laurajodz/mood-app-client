import * as actions from '../actions';

const initialState = {
    entries: [{
        date: 'January 1, 2018',
        mood: 8,
        moodTypes: ['happy', 'relaxed'],
        sleep: 8,
        eating: 2,
        exercise: 'No',
        notes: 'Visit with family'
        }, {
        date: 'January 2, 2018',
        mood: 7,
        moodTypes: ['great'],
        sleep: 7,
        eating: 5,
        exercise: 'Yes',
        notes: 'Made progress at work on project'
        }, {
        date: 'January 3, 2018',
        mood: 6,
        moodTypes: ['anxious'],
        sleep: 7,
        eating: 4,
        exercise: 'No',
        notes: ''
        }, {
        date: 'January 4, 2018',
        mood: 5,
        moodTypes: ['irritated', 'angry'],
        sleep: 7,
        eating: 4,
        exercise: 'Yes',
        notes: 'Very cold today'
        }, {
        date: 'January 5, 2018',
        mood: 8,
        moodTypes: ['excited'],
        sleep: 7,
        eating: 2,
        exercise: 'No',
        notes: 'Drinks with friends'
        }, {
        date: 'January 6, 2018',
        mood: 8,
        moodTypes: ['happy'],
        sleep: 8,
        eating: 3,
        exercise: 'No',
        notes: 'Day trip to the country'
        }, {
        date: 'January 7, 2018',
        mood: 8,
        moodTypes: ['great'],
        sleep: 9,
        eating: 4,
        exercise: 'Yes',
        notes: ''
    }]
};

export const entryReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_ENTRY) {
        return Object.assign({}, state, {
            entries: [...state.entries, {
                date: action.date,
                mood: action.mood,
                moodTypes: action.moodTypes,
                sleep: action.sleep,
                eating: action.eating,
                exercise: action.exercise,
                notes: action.notes
            }]
        });
    }
    return state;
};
