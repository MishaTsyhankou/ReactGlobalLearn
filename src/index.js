import './styles/index.scss';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import App from './Components/App/App';
import store from '../src/store/store';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
