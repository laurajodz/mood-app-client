import React from 'react';
import {shallow} from 'enzyme';

import {Logout} from './logout';

describe('<Logout />', () => {
    it('Renders without crashing', () => {
        shallow(<Logout />);
    });
});
