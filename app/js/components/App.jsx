/*
 import React from 'react';
 import {BrowserRouter as Router, Link, Match, Miss} from 'react-router';
 import Home from './Home';
 import About from './About';
 import Topics from './Topics';
 import NotFound from './NotFound';

 const App = ({children})=> {
 return (
 <Router>
   <div>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/topics">Topics</Link></li>	
     </ul>
     <hr />
     <Match exactly pattern="/" component={Home} />
     <Match exactly pattern="/about" component={About} />
     <Match exactly pattern="/Topics" component={Topics} />
     <Miss component={NotFound} />
   </div>
 </Router>
 );
 };

 export default App;

 */

import React, {Component} from 'react';
import {HashRouter as Router, Link, Match, Miss} from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

import UserNav from './nav/UserNav';
import MenuNav from './nav/MenuNav';
import AdManage from './adManage';

class Home extends Component {
  render() {
    return (<div>Home</div>);
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <UserNav />
          <MenuNav />
          <Match pattern="/home" component={Home} />
          <Match pattern="/adManage" component={AdManage} />
          <Miss component={Home} />
        </div>
      </Router>
    );
  }
}
