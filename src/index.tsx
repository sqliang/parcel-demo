import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as favicon from './static/favicon.png';

import './index.css';

import App from './pages/App';

ReactDOM.render(
    <div className="container">
        <App/>
    </div>,
    document.getElementById('app')
);