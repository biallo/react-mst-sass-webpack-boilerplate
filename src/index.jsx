import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
const publicPath = __PUBLIC_PATH__;
const basename = publicPath === '/' ? undefined : publicPath.replace(/\/$/, '');

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
