import React from 'react';
import {shallow} from 'enzyme';
import AddEntryCard from './add-entry-card';

describe('<AddEntryCard />', () => {
    it('Renders without crashing', () => {
        shallow(<AddEntryCard />);
    });
});
