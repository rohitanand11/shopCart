import React from 'react';
import {shallow} from 'enzyme';
import PaginationTab from './PaginationTab';

describe('PaginationTab component',()=>{

    it('renders without crashing',()=>{
        shallow(<PaginationTab {...{totalPages:17, currentPage:7 ,updateCurrentPage:2}}/>);
    });

    it('should have an Class PaginationTab',()=>{
        const wrapper = shallow(<PaginationTab {...{totalPages:17, currentPage:7 ,updateCurrentPage:2}}/>);
        expect(wrapper.find('.PaginationTab')).toHaveLength(1);
    });

    it('should have render PaginationTab without crash',()=>{
        shallow(<PaginationTab {...{totalPages:2, currentPage:9 ,updateCurrentPage:100}}/>);  
    });

    it('should have render PaginationTab without crash',()=>{
        shallow(<PaginationTab {...{totalPages:2000, currentPage:9000 ,updateCurrentPage:10000}}/>);  
    });
});