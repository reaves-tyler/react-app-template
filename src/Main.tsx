import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/carbon-components/css/carbon-components.min.css';
import './Main.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button, Form, Select, SelectItem, TextArea, TextInput } from 'carbon-components-react';

const Main: React.FC = () => {
    return (
        <>
            <Form>
                <div style={{ marginBottom: '2rem' }}>
                    <TextInput
                        helperText='Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)'
                        id='test2'
                        invalidText='Invalid error message.'
                        labelText='Text input label'
                        placeholder='Placeholder text'
                        light
                    />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <TextArea
                        cols={50}
                        helperText='Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)'
                        id='test5'
                        invalidText='Invalid error message.'
                        labelText='Text area label'
                        placeholder='Placeholder text'
                        rows={4}
                        invalid
                    />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <Select defaultValue='placeholder-item' id='select-1' invalidText='This is an invalid error message.' labelText='Select' invalid>
                        <SelectItem text='Option 1' value='option-1' />
                        <SelectItem text='Option 2' value='option-2' />
                        <SelectItem text='Option 3' value='option-3' />
                    </Select>
                </div>
                <Button kind='primary' tabIndex={0} type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
