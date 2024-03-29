import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App'
import reportWebVitals from './reportWebVitals';

import BlogFullscreenEnabledProvider from './Context/Context'

ReactDOM.render(
    <React.StrictMode>
        <BlogFullscreenEnabledProvider>
            <App />
        </BlogFullscreenEnabledProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
