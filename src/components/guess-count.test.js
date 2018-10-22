import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount>', () => {
    it('Renders without crashing', () => {
        shallow( < GuessCount /> );
    });

    it('Renders correct guessCount', () => {
        const GUESS_COUNT = 4;
        const wrapper = shallow(<GuessCount guessCount={GUESS_COUNT}  />);
        expect(wrapper.text()).toEqual(`You've made ${GUESS_COUNT} guesses!`);
    })

})