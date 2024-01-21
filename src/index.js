import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import { Routes } from './routes';
import { Navbar } from 'flowbite-react';
import NavbarComponent from './components/Navbar';

import './index.css'

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavbarComponent/>
      <Routes />
    </Provider>
  </React.StrictMode>
);


