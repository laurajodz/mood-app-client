import * as actions from '../actions';

const initialState = {
    entries: [{
        date: 'January 1, 2018',
        mood: 5,
        moodTypes: ['happy', 'relaxed'],
        sleep: 5,
        eating: 2,
        exercise: 'No',
        notes: 'Visit with family'
        }, {
        date: 'January 2, 2018',
        mood: 4,
        moodTypes: ['great'],
        sleep: 4,
        eating: 5,
        exercise: 'Yes',
        notes: 'Made progress at work on project'
        }, {
        date: 'January 3, 2018',
        mood: 3,
        moodTypes: ['anxious'],
        sleep: 3,
        eating: 3,
        exercise: 'No',
        notes: ''
        }, {
        date: 'January 4, 2018',
        mood: 2,
        moodTypes: ['irritated', 'angry'],
        sleep: 5,
        eating: 4,
        exercise: 'Yes',
        notes: 'Very cold today'
        }, {
        date: 'January 5, 2018',
        mood: 5,
        moodTypes: ['excited'],
        sleep: 5,
        eating: 2,
        exercise: 'No',
        notes: 'Drinks with friends'
        }, {
        date: 'January 6, 2018',
        mood: 4,
        moodTypes: ['happy'],
        sleep: 5,
        eating: 3,
        exercise: 'No',
        notes: 'Day trip to the country'
        }, {
        date: 'January 7, 2018',
        mood: 4,
        moodTypes: ['great'],
        sleep: 5,
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
