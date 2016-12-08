import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from 'react-bootstrap';

export default class MenuNav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/home">
              <i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;主页
            </NavItem>
            <NavItem eventKey={2} href="#/customer">
              <i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;&nbsp;客户管理
            </NavItem>
            <NavItem eventKey={3} href="#/onlineAdControl">
              <i className="fa fa-github-alt" aria-hidden="true"></i>&nbsp;&nbsp;投放控制
            </NavItem>
            <NavItem eventKey={4} href="#/adManage">
              <i className="fa fa-html5" aria-hidden="true"></i>&nbsp;&nbsp;广告管理
            </NavItem>
            <NavItem eventKey={5} href="#/dataCenter">
              <i className="fa fa-firefox"></i>&nbsp;&nbsp;数据中心
            </NavItem>
            <NavItem eventKey={6} href="#/materialsManage">
              <i className="fa fa-chrome"></i>&nbsp;&nbsp;物料管理
            </NavItem>
            <NavItem eventKey={7} href="#/purchase">
              <i className="fa fa-drupal"></i>&nbsp;&nbsp;三方广告
            </NavItem>
            <NavItem eventKey={8} href="#/authManage">
              <i className="fa fa-opera"></i>&nbsp;&nbsp;权限管理
            </NavItem>
            <NavItem eventKey={9} href="#/financialManage">
              <i className="fa fa-twitter"></i>&nbsp;&nbsp;财务管理
            </NavItem>
            <NavItem eventKey={10} href="#/tools">
              <i className="fa fa-wordpress"></i>&nbsp;&nbsp;工具
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
