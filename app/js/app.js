import 'font-awesome/css/font-awesome.css';
import '../css/bootstrap.min.css';
import '../css/main.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import DateButtonGroup from './components/stats/DateButtonGroup';
import App from './components/App';
const app = document.createElement('div');

app.setAttribute('id', 'app');
document.body.insertBefore(app, null);

ReactDOM.render(<App />, app);
