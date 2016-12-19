import 'babel-polyfill';
import React, {Component} from 'react';
import {render} from 'react-dom';

require('../node_modules/onsenui/css/onsenui.css');
require('../node_modules/onsenui/css/onsen-css-components.css');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Dialog, FlatButton, RaisedButton} from 'material-ui';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  componentDidMount() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  onDeviceReady() {
    this.receivedEvent('deviceready');
  }

  receivedEvent(id) {
//     var parentElement = document.getElementById(id);
//     var listeningElement = parentElement.querySelector('.listening');
//     var receivedElement = parentElement.querySelector('.received');
// 
//     listeningElement.setAttribute('style', 'display:none;');
//     receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }

/*
      <div>

        Hello React!!!

        <div className="app">
          <h1>Apache Cordova</h1>
          <div id="deviceready" className="blink">
            <p className="event listening">Connecting to Device</p>
            <p className="event received">Device is Ready</p>
          </div>
        </div>
      </div>
      */
  render() {
    const actionModels = [
      {
        label: 'Cancel',
        keyboardFocused: false
      },
      {
        label: 'Submit',
        keyboardFocused: true
      }
    ];
    const actions = actionModels.map((actionModel) => {
      return <FlatButton label={actionModel.label}
                         primary={true}
                         keyboardFocused={actionModel.keyboardFocused}
                         onTouchTap={this.handleClose.bind(this)}/>;
    });
    {/*
    const actions = [
      <FlatButton label="Cancel"
                  primary={true}
                  onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton label="Submit"
                  primary={true}
                  keyboardFocused={true}
                  onTouchTap={this.handleClose.bind(this)}
      />
    ];
    */}

    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Dialog" onTouchTap={this.handleOpen.bind(this)} />
          <Dialog title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose.bind(this)}>
            The actions in this window were passed in as an array of React objects.
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }

}

render(
    <App />,
    document.getElementById('root')
);
