import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

export default class UserNav extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="javascript:void(0);">adpro广告家</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>           
            <NavDropdown eventKey={1} title="您好 ...@goyoo.com" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Action</MenuItem>
              <MenuItem eventKey={1.2}>Another action</MenuItem>
              <MenuItem eventKey={1.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="javascript:void(0)">账户余额....</NavItem>
            <NavItem eventKey={3} href="javascript:void(0)">消息</NavItem>
            <NavItem eventKey={4} href="javascript:void(0)">退出</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
