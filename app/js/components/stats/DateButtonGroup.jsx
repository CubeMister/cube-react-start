import React, {Component} from 'react';
import {
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap';

export default class DateButtonGroup extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button>今天</Button>
          <Button>昨天</Button>
          <Button>本周</Button>
          <Button>上周</Button>
          <Button>本月</Button>
          <Button>上月</Button>
          <Button>近30天</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}
