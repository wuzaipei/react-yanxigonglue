import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import store from './store.js'
import { Provider,connect } from 'react-redux'



//资源css/js
import './asset/css/index.css';
import './asset/css/swiper.css';




//组件
import App from './view/App.js';
// as的作用，另外取名  Router = BrowserRouter
const Basic = () =>{
  return (
  <Router>
    <div className='router'>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
)}





ReactDOM.render(
  <Provider store={store}>
    <Basic />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<Basic />, document.getElementById('root'));

