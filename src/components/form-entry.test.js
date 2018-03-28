import React from 'react';
import {shallow} from 'enzyme';
import {FormEntry} from './form-entry';

describe('<FormEntry />', () => {
    it('Renders without crashing', () => {
        shallow(<FormEntry />);
    });
});
