import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';
import {BrowserRouter as Router} from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Header /></Router>, div);
})