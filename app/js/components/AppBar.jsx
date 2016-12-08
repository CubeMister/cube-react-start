import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class MyComponent extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
        <div>
        <AppBar title="aaa" />
        </div>
    );
  }        
}

MyComponent.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};