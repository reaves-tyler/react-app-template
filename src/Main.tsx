import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react';

const Main: React.FC = () => {
    return (
        <><Button colorScheme="blue">Button</Button><Button colorScheme="green">Button</Button><Button colorScheme="orange">Button</Button><Button colorScheme="red">Button</Button><Button colorScheme="purple">Button</Button>
            <Button colorScheme="yellow">Button</Button></>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        
        <ChakraProvider>
            <Main />
            </ChakraProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
