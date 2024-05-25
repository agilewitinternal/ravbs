import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import  appReducer from '../src/redux/reducers'
import ComponyLogo from './components/companylogo/ComponyLogo';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureStore({reducer: appReducer, 
  devTools: process.env.NODE_ENV !== 'production'})

root.render(
  <Provider store = {store}>
    <ComponyLogo />
    <App />
  </Provider>
);

