import React from 'react';
import {shallow} from 'enzyme';
import {History} from './history';

describe('<History />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<History entries={[]} dispatch={dispatch}/>);
    });
});
