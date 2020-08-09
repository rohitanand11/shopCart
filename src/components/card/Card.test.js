import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

describe('Card component',()=>{
    it('should render without crashing',()=>{
        shallow(<Card product ={{}}/>);
    });

    it('should have an Class Card',()=>{
        const wrapper = shallow(<Card product={{}} />);
        expect(wrapper.find('.Card')).toHaveLength(1);
    });
})
