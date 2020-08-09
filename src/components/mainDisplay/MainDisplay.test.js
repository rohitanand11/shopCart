import React from 'react';
import {shallow} from 'enzyme';
import MainDisplay from './MainDisplay';

describe('MainDisplay component',()=>{
    it('renders without crashing',()=>{
        shallow(<MainDisplay/>);
    });

    it('should have an Class Footer',()=>{
        const wrapper = shallow(<MainDisplay />);
        expect(wrapper.find('.MainDisplay')).toHaveLength(1);
    });
});