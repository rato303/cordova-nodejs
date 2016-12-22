import React, { Component } from 'react';

import { hashHistory } from 'react-router';

import { Paper, Menu, MenuItem } from 'material-ui';

import { PATH } from '../pages';

class MenuPage extends Component {

  constructor(props) {
    super(props);
  }

  onTouchTap() {
    hashHistory.push(PATH.SETTINGS);
  }

  render() {
    return (
      <Paper>
        <Menu>
          <MenuItem primaryText="Settings"
                    onTouchTap={this.onTouchTap.bind(this)} />
        </Menu>
      </Paper>
    );
  }

}

export default MenuPage;
