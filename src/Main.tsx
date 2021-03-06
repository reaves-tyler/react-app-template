import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/semantic-ui-css/semantic.min.css';
import './Main.css';
import { Button, Container, Grid } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <Container>
            <Button color='orange'>My-App</Button>
        </Container>
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
