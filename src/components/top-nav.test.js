import React from 'react';
import { shallow, mount } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav>', () => {
    it('Renders without crashing', () => {
        shallow( < TopNav /> );
    });

    it('Should fire the onRestartGame callback when the New Game anchor is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback} />);
        wrapper.find('a[className="new"]').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
    
    it('Should fire the onGenerateAuralUpdate callback when the get status link is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
        wrapper.find('.status-link').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

})