import React, { useState } from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { TextAreas } from '../TextAreas';
Enzyme.configure({ adapter: new Adapter() });

describe('[Hooks] TextAreas', () => {
    it('Uses hook to set state of SIMPLE value', () => {
        const TextAreasWrapper: React.FC = () => {
            const [field, setField] = useState('Test');
            return <TextAreas fieldValue={field} onChange={setField} />;
        };

        // Mount the component
        const wrapper = mount(<TextAreasWrapper />);

        //Check the original value from the useState hook
        expect(wrapper.find('textarea').props().value).toBe('Test');

        // Simulate onChange event
        wrapper.find('textarea').simulate('change', { target: { value: 'My new value' } });

        expect(wrapper.find('textarea').first().props().value).toBe('My new value');
    });

    it('Uses hook to set state of COMPLEX value', () => {
        const TextAreasWrapper: React.FC = () => {
            const [field, setField] = useState({ value: 'Test', classification: {} });
            return <TextAreas fieldValue={field} onChange={setField} />;
        };

        // Mount the component
        const wrapper = mount(<TextAreasWrapper />);

        //Check the original value from the useState hook
        expect(wrapper.find(TextAreas).props().fieldValue).toStrictEqual({ value: 'Test', classification: {} });

        // Simulate onChange event
        wrapper.find('textarea').simulate('change', { target: { value: 'My new value' } });

        expect(wrapper.find(TextAreas).props().fieldValue).toStrictEqual({ value: 'My new value', classification: {} });
    });

    it('Checks for invalid value', () => {
        const InputsWrapper: React.FC = () => {
            const [field, setField] = useState('123');
            return <TextAreas fieldValue={field} onChange={setField} />;
        };

        // Mount the component
        const wrapper = mount(<InputsWrapper />);

        //Check the original value from the useState hook
        expect(wrapper.find('textarea').props().value).toBe('123');

        // Simulate onChange event
        wrapper.find('textarea').simulate('change', { target: { value: ' ' } });

        // GOTCHA: Warning will appear since React isn't expecting `undefined`, but we are for validation
        expect(wrapper.find('textarea').first().props().value).toBe(undefined);
    });
});
