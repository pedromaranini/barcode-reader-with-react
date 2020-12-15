import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/home';
import Code from './pages/Code/code';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/code" component={Code} />
        </BrowserRouter>
    );
}

export default Routes;