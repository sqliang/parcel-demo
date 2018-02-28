import React from 'react';
import ReactDOM from 'react-dom';

import favicon from './static/favicon.png';

import './index.css';

import App from './pages/App';

ReactDOM.render(
    <div className="container">
        <img src={favicon} alt="" width={100}/>
        <App/>
    </div>,
    document.getElementById('app')
);