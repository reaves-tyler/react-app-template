import React, { useState } from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { Inputs } from '../Inputs';
Enzyme.configure({ adapter: new Adapter() });

describe('[Hooks] Inputs', () => {
    it('Uses hook to set state of SIMPLE value', () => {
        const InputsWrapper: React.FC = () => {
            const [field, setField] = useState('Test');
            return <Inputs fieldValue={field} onChange={setField} />;
        };

        // Mount the component
        const wrapper = mount(<InputsWrapper />);

        //Check the original value from the useState hook
        expect(wrapper.find('input').props().value).toBe('Test');

        // Simulate onChange event
        wrapper.find('input').simulate('change', { target: { value: 'My new value' } });

        expect(wrapper.find('input').first().props().value).toBe('My new value');
    });

    it('Uses hook to set state of COMPLEX value', () => {
        const InputsWrapper: React.FC = () => {
            const [field, setField] = useState({ value: 'Test', classification: {} });
            return <Inputs fieldValue={field} onChange={setField} />;
        };

        // Mount the component
        const wrapper = mount(<InputsWrapper />);

        //Check the original value from the useState hook
        expect(wrapper.find(Inputs).props().fieldValue).toStrictEqual({ value: 'Test', classification: {} });

        // Simulate onChange event
        wrapper.find('input').simulate('change', { target: { value: 'My new value' } });

        expect(wrapper.find(Inputs).props().fieldValue).toStrictEqual({ value: 'My new value', classification: {} });
    });

    it('Checks for invalid value MINLENGTH', () => {
        const InputsWrapper: React.FC = () => {
            const [field, setField] = useState('123');
            return <Inputs fieldValue={field} onChange={setField} minLength={5} />;
        };

        // Mount the component
        const wrapper = mount(<InputsWrapper />);

        //Check the original value from the useState hook
        expect(wrapper.find('input').props().value).toBe('123');

        // Simulate onChange event
        wrapper.find('input').simulate('change', { target: { value: '1234' } });

        // GOTCHA: Warning will appear since React isn't expecting `undefined`, but we are for validation
        expect(wrapper.find('input').first().props().value).toBe(undefined);
    });
});
