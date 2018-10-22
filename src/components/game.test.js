import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from './game';

describe('<Game>', () => {
    it('Renders without crashing', () => {
        shallow( < Game /> );
    });
    
    it('Can start a new game', () => {
        const wrapper=shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3, 4],
            feedback: "awesome",
            auralStatus: "great",
            correctAnswer: -1 
        });

        wrapper.instance().restartGame();
        expect(wrapper.state("guesses")).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

    });

    it('Can make guesses', () => {
        const wrapper=shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().makeGuess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().makeGuess(69);
        expect(wrapper.state('guesses')).toEqual([25, 69]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().makeGuess(89);
        expect(wrapper.state('guesses')).toEqual([25, 69, 89]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

        wrapper.instance().makeGuess(99);
        expect(wrapper.state('guesses')).toEqual([25, 69, 89, 99]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('guesses')).toEqual([25, 69, 89, 99, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    })

    it('Can update auralStatus', () => {
        const wrapper=shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().makeGuess(25);
        wrapper.instance().makeGuess(69);
        wrapper.instance().makeGuess(89);

        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual("Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 89, 69, 25");
    })

})