import React from 'react';
import { shallow, mount } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus>', () => {
    it('Renders without crashing', () => {
        shallow( < AuralStatus /> );
    });

    it('Renders the aural paragraph', () => {
        const TEST_STATUS= "This is the test status";
        const wrapper = shallow( < AuralStatus auralStatus={TEST_STATUS}/> );
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
    });

})