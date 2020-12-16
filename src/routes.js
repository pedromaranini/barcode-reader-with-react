import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/home';
import Code from './pages/Code/code';
import ReadCode from './pages/ReadCode/readcode';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/code" component={Code} />
            <Route path="/readcode" component={ReadCode} />
        </BrowserRouter>
    );
}

export default Routes;