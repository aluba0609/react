import React from 'react';//引入核心库
import ReactDOM from 'react-dom';
// import App from './App';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'

// ReactDOM.render( <App />,document.getElementById('root'));
ReactDOM.render( <BrowserRouter><AppRouter /></BrowserRouter>,document.getElementById('root'));
