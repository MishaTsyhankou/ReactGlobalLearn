import './styles/index.scss';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import App from './Components/App/App';
import store from '../src/store/store';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
