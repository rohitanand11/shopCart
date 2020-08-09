import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

describe('Header component should contain the brandname',()=>{

    it('should render without crashing',()=>{
        shallow(<Header/>);
    });

    it('should have an Class Header',()=>{
        const wrapper = shallow(<Header  />);
        expect(wrapper.find('.Header')).toHaveLength(1);
    });
    
});