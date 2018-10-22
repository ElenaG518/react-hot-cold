import React from 'react';
import { shallow, mount } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback>', () => {
    it('Renders without crashing', () => {
        shallow( < Feedback /> );
    });

    it('Renders feedback', () => {
    let FEEDBACK = 'You are not hot or cold!';
    
    let wrapper = shallow(<Feedback feedback={FEEDBACK} />);
    expect(wrapper.contains(FEEDBACK)).toEqual(true);
  });
})