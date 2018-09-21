import React from 'react'
import Counter from '../src/components/Counter';
import { shallow} from 'enzyme';

describe('Example counter component', ()=> {
    it('starts with a count of 0', ()=> {
        const wrapper = shallow(<Counter />);
        const text = wrapper.find('strong').text();
        expect(text).toEqual("0");
    })
})