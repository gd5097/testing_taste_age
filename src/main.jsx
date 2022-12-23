import React from 'react';
import { render } from 'react-dom';
import {createRoot} from 'react-dom/client';
import ReactDom, {BrowserRouter} from 'react-router-dom';

import App from './app';

const app = document.getElementById('app');

const root = createRoot(app);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

