import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MyComponent from './components/AppBar';

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.insertBefore(app, null);


ReactDOM.render(<MyComponent />, app);