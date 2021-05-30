import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartReducer); //to retrieve state of the app from reducer to store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

