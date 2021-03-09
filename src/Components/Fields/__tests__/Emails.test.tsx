// import React, { useState } from 'react';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { mount } from 'enzyme';
// import { Emails } from '../Emails';
// Enzyme.configure({ adapter: new Adapter() });

// describe('[Hooks] Emails', () => {
//     it('Uses hook to set state of SIMPLE value', () => {
//         const EmailsWrapper: React.FC = () => {
//             const [field, setField] = useState('Test');
//             return <Emails fieldValue={field} onChange={setField} />;
//         };

//         // Mount the component
//         const wrapper = mount(<EmailsWrapper />);

//         //Check the original value from the useState hook
//         expect(wrapper.find('input').props().value).toBe('Test');

//         // Simulate onChange event
//         wrapper.find('input').simulate('change', { target: { value: 'abc@qwe.com' } });

//         expect(wrapper.find('input').first().props().value).toBe('abc@qwe.com');
//     });

//     it('Checks for invalid value', () => {
//         const EmailsWrapper: React.FC = () => {
//             const [field, setField] = useState('abc@qwe.com');
//             return <Emails fieldValue={field} onChange={setField} />;
//         };

//         // Mount the component
//         const wrapper = mount(<EmailsWrapper />);

//         //Check the original value from the useState hook
//         expect(wrapper.find('input').props().value).toBe('abc@qwe.com');

//         // Simulate onChange event
//         wrapper.find('input').simulate('change', { target: { value: 'abc123' } });

//         // GOTCHA: Warning will appear since React isn't expecting `undefined`, but we are for validation
//         expect(wrapper.find('input').first().props().value).toBe(undefined);
//     });
// });
