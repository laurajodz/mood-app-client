import React from 'react';
import {shallow} from 'enzyme';
import {Done} from './done';

describe('<Done />', () => {
    it('Renders without crashing', () => {
        shallow(<Done />);
    });
});
